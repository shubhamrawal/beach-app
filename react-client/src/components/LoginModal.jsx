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
// import { post } from "../helpers/request";
import { logIn } from "../actions/auth";
import { firebaseLogin } from "../helpers/auth";
import styles from "../style/AuthModal";

const useStyles = makeStyles(styles);

const LoginModal = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // TODO: Validation
  const handleSubmit = () => {
    const login = async () => {
      try {
        const user = await firebaseLogin(email, password);
        props.handleClose();
        if (user) {
          dispatch(logIn(user));
        } else {
          throw new Error("Login Failed");
        }
      } catch (e) {
        // TODO: change to snackbar
        alert(e.message);
      }
    };
    login();
  };

  return (
    <Modal
      aria-labelledby="Log in modal"
      aria-describedby="Modal for logging the user in through email and password"
      open={props.open}
      onClose={props.handleClose}
    >
      <div className={classes.root}>
        <div className={classes.header}>
          <CloseIcon fontSize="small" onClick={props.handleClose} />
          <Typography variant="h6" className={classes.title}>
            Log in
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
          <br />
          <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Log in
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
