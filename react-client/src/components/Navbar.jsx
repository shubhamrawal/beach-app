import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import { TextField, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";
import styles from "../style/Navbar.js";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import LoginModal from "./LoginModal.jsx";
import SignupModal from "./SignupModal.jsx";

const useStyles = makeStyles(theme => styles(theme));

const Navbar = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  // TODO: change to a universal search instead of filtering
  const searchCallback = props.searchCallback;

  const loginHandleClose = () => {
    setLoginOpen(false);
  };

  const signupHandleClose = () => {
    setSignupOpen(false);
  };

  const handleLogout = async () => {
    await dispatch(logout());
    window.location.reload();
  };

  const NavbarSearch = () => {
    return (
      <>
        {props.search && (
          <TextField
            className={classes.search}
            placeholder="Search..."
            InputProps={{
              "aria-label": "search",
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
            onChange={e => searchCallback(e.target.value)}
          />
        )}
      </>
    );
  };

  const NavbarLinks = () => {
    return (
      <>
        {!user ? (
          <>
            <Link
              to=""
              onClick={() => setLoginOpen(true)}
              className={classes.menuButton}
            >
              Log in
            </Link>
            <Link
              to=""
              onClick={() => setSignupOpen(true)}
              className={classes.menuButton}
            >
              Sign up
            </Link>
          </>
        ) : (
          <>
            <Link to="" className={classes.menuButton}>
              Visited
            </Link>
            <Link to="" className={classes.menuButton}>
              Wishlist
            </Link>
            <Link to="" className={classes.menuButton} onClick={handleLogout}>
              Log out
            </Link>
          </>
        )}
      </>
    );
  };

  return (
    <>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Link to="/" className={classes.title}>
            <h2>Beach Tracker</h2>
          </Link>
          <div className={classes.spacer}></div>
          <NavbarSearch />
          <Link to="/explore" className={classes.menuButton}>
            Explore
          </Link>
          <NavbarLinks />
        </Toolbar>
      </AppBar>
      <LoginModal open={loginOpen} handleClose={loginHandleClose} />
      <SignupModal open={signupOpen} handleClose={signupHandleClose} />
    </>
  );
};

export default Navbar;
