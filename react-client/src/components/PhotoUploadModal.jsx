import React, { useState, useEffect } from "react";
import { Modal, Button, Typography, CircularProgress } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { makeStyles } from "@material-ui/core/styles";
import _isEmpty from "lodash/isEmpty";
import { useDispatch } from "react-redux";
import { uploadPhoto } from "../actions/user";
import styles from "../style/PhotoUploadModal";
import { firebaseUploadPhoto } from "../helpers/storage";
import ExifReader from "exifreader";

const useStyles = makeStyles(theme => styles(theme));

const PhotoUploadModal = props => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [tileData, setTileData] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const readFile = async file => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        const buffer = reader.result;
        const metadata = (({
          DateTimeOriginal,
          GPSLatitude,
          GPSLatitudeRef,
          GPSLongitude,
          GPSLongitudeRef,
          GPSAltitude,
          GPSAltitudeRef
        }) => ({
          DateTimeOriginal,
          GPSLatitude,
          GPSLatitudeRef,
          GPSLongitude,
          GPSLongitudeRef,
          GPSAltitude,
          GPSAltitudeRef
        }))(ExifReader.load(buffer));
        const src = URL.createObjectURL(
          new Blob([buffer], { type: "image/jpg" })
        );
        const newFile = {
          file: file,
          name: file.name,
          img: src,
          metadata: metadata,
          progress: 0
        };
        setTileData(data => [...data, newFile]);
      };
    };
    Array.from(props.files).forEach(file => {
      readFile(file);
    });
  }, [props.files]);

  const handleCancel = () => {
    props.handleClose();
  };

  const handleUpload = async () => {
    // console.log(props.files);
    setUploading(true);
    tileData.forEach(async data => {
      const promises = [];
      try {
        const photoRefId = await dispatch(
          uploadPhoto(props.beachId, data.file.name, data.metadata)
        );
        const uploadTask = firebaseUploadPhoto(photoRefId, data.file);
        promises.push(uploadTask);
        uploadTask.on("state_changed", snapshot => {
          const newProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setTileData(t => {
            const clone = Array.from(t);
            const fileIndex = clone.findIndex(({ name }) => name === data.name);
            clone[fileIndex].progress = newProgress;
            return clone;
          });
        });
        Promise.all(promises).then(() => {
          props.dispatchPhoto(photoRefId);
        });
      } catch (e) {}
    });
    // props.handleClose();
  };

  const UploadTile = props => {
    const data = props.data;
    return (
      <>
        <img
          key={`${data.name}-img`}
          src={data.img}
          alt=""
          className={classes.tileImage}
        />
        <Typography
          key={`${data.name}-text`}
          variant="h6"
          color="textSecondary"
        >
          {data.name}
        </Typography>
        <div className={classes.spacer}></div>
        {data.progress === 100 ? (
          <CheckCircleIcon className={classes.checkIcon} />
        ) : (
          <CircularProgress
            key={`${data.name}-progress`}
            variant="static"
            size={20}
            thickness={7.2}
            value={data.progress}
            className={classes.tileProgress}
          />
        )}
      </>
    );
  };

  return (
    <div>
      <Modal
        aria-labelledby="Photo upload modal"
        aria-describedby="Modal for uploading photos selected by the user"
        open={props.open}
        onClose={props.handleClose}
        className={classes.modal}
      >
        <div className={classes.root}>
          <div className={classes.header}>
            <CloseIcon fontSize="small" onClick={props.handleClose} />
            <Typography variant="h6" className={classes.title}>
              Upload memories
            </Typography>
          </div>
          {_isEmpty(tileData) ? (
            <div className={classes.loadingTile}>
              <Typography variant="body1">Loading...</Typography>
              <CircularProgress size={20} />
            </div>
          ) : (
            tileData.map(data => (
              <div key={data.name} className={classes.tile}>
                <UploadTile data={data} />
              </div>
            ))
          )}
          <div className={classes.action}>
            <Button
              className={classes.submitButton}
              variant="contained"
              color="secondary"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              className={classes.submitButton}
              variant="contained"
              color="primary"
              type="button"
              disabled={uploading}
              onClick={handleUpload}
            >
              Upload
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PhotoUploadModal;
