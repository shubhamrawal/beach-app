import React from "react";
import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styles from "../style/BeachTile";
import backdrop from "../assets/images/backdrop2.jpg";
import { Link } from "@reach/router";

const useStyles = makeStyles(styles);

const BeachTile = props => {
  const classes = useStyles();
  const beach = props.beach;

  return (
    <CardActionArea disableRipple>
      <Link
        to={`/explore/${beach.name.replace(" ", "_").toLowerCase()}`}
        state={{ beach }}
        className={classes.link}
      >
        <Card elevation={0}>
          <CardMedia
            image={backdrop}
            title={beach.name}
            className={classes.media}
          />
          <CardContent>
            <Typography variant="h5">{beach.name}</Typography>
            <Typography variant="body1" color="textSecondary">
              {beach.location}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {beach.state}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {beach.country}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </CardActionArea>
  );
};

export default BeachTile;
