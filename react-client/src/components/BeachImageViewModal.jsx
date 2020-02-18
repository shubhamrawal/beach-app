import React, { useEffect, useState } from "react";
import { Modal, IconButton, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../style/BeachImageViewModal";

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
            <div className={classes.beachTile}>
              <Typography variant="h4">{props.beach.name}</Typography>
              <Typography variant="body1" color="textSecondary">
                {`${props.beach.location}, ${props.beach.state}, ${props.beach.country}`}
              </Typography>
              <p>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.beachDesc}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
              </p>
            </div>
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
    </div>
  );
};

export default BeachImageViewModal;
