import React, { useState } from "react";
import {
  Modal,
  TextField,
  InputAdornment,
  Button,
  Typography
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch } from "react-redux";
import { signup } from "../actions/auth";
import styles from "../style/AuthModal";

const useStyles = makeStyles(theme => styles(theme));

const SignupModal = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // TODO: Validation
  const handleSubmit = async () => {
    if (password === confirmPassword) {
      await dispatch(signup(email, password));
      props.handleClose();
    } else {
      // TODO: switch to snackbars
      alert("Please make sure the two passwords are the same.");
    }
  };

  return (
    <Modal
      aria-labelledby="Sign up modal"
      aria-describedby="Modal for signing up the user through an email and password"
      open={props.open}
      onClose={props.handleClose}
    >
      <div className={classes.root}>
        <div className={classes.header}>
          <CloseIcon fontSize="small" onClick={props.handleClose} />
          <Typography variant="h6" className={classes.title}>
            Sign up
          </Typography>
        </div>
        <hr />
        <form className={classes.form}>
          <TextField
            className={classes.formInput}
            placeholder="Email"
            variant="outlined"
            InputProps={{
              "aria-label": "email",
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon />
                </InputAdornment>
              )
            }}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            className={classes.formInput}
            placeholder="Password"
            variant="outlined"
            type="password"
            InputProps={{
              "aria-label": "password",
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              )
            }}
            onChange={e => setPassword(e.target.value)}
          />
          <TextField
            className={classes.formInput}
            placeholder="Confirm password"
            variant="outlined"
            type="password"
            InputProps={{
              "aria-label": "confirm password",
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              )
            }}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <br />
          <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Sign up
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default SignupModal;
