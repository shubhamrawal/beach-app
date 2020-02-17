import React, { useEffect, useState } from "react";
import { Modal, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../style/BeachImageViewModal";
import backdrop from "../assets/images/backdrop0.jpg";

const useStyles = makeStyles(theme => styles(theme));

const BeachImageViewModal = props => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (props.currentPhoto) {
      setIndex(props.photos.indexOf(props.currentPhoto));
    }
  }, [props.currentPhoto, props.photos]);

  const handleBack = () => {
    setIndex(index - 1);
  };

  const handleForward = () => {
    setIndex(index + 1);
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
          {index > 0 ? (
            <div className={classes.left}>
              <IconButton aria-label="prev" onClick={handleBack}>
                <ArrowBackIosIcon className={classes.navIcon} />
              </IconButton>
            </div>
          ) : (
            <div className={classes.left}></div>
          )}
          <div className={classes.middle}>
            <img
              src={props.photos[index]}
              alt={`beach-${index}`}
              className={classes.image}
            />
          </div>
          {index < props.photos.length - 1 && (
            <div className={classes.right}>
              <IconButton aria-label="next" onClick={handleForward}>
                <ArrowForwardIosIcon className={classes.navIcon} />
              </IconButton>
            </div>
          )}
        </div>
      </Modal>
      {/* <Modal
        aria-labelledby="Photo upload modal"
        aria-describedby="Modal for uploading photos selected by the user"
        open={props.open}
        onClose={props.handleClose}
        className={classes.modal}
      >
        <div className={classes.root}>
          {index > 0 && (
            <div className={classes.leftArrow}>
              <IconButton aria-label="prev" onClick={handleBack}>
                <ArrowBackIosIcon />
              </IconButton>
            </div>
          )}
          <div className={classes.mainContent}>
            <img
              src={props.photos[index]}
              alt={`beach-${index}`}
              className={classes.image}
            />
          </div>
          {index < props.photos.length - 1 && (
            <div className={classes.rightArrow}>
              <IconButton aria-label="next" onClick={handleForward}>
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          )}
        </div>
      </Modal> */}
    </div>
  );
};

export default BeachImageViewModal;
