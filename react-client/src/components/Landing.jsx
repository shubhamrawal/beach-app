import React from "react";
import Navbar from "./Navbar";
import { makeStyles, Typography } from "@material-ui/core";
import styles from "../style/Landing";

const useStyles = makeStyles(theme => styles(theme));

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.backdrop}>
      <div className={classes.root}>
        <Navbar />
        <div className={classes.landingtext}>
          <Typography variant="h2">Keep track of your beach travels</Typography>
          <Typography variant="h6">
            Whoever you are, whatever you're looking for, we have the perfect
            beach for you. Start exploring!
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Landing;
