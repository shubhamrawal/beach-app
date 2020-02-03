import React from "react";
import AppBar from "@material-ui/core/AppBar";
// import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import { TextField, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";
import styles from "../style/Navbar.js";

const useStyles = makeStyles(styles);

const Navbar = props => {
  const classes = useStyles();
  const hasSearch = props.search;

  // TODO: change to a universal search instead of filtering
  const searchCallback = props.searchCallback;

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <Link to="/" className={classes.title}>
          <h2>Beach Tracker</h2>
        </Link>
        {hasSearch && (
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
        {/* <Button className={classes.menuButton}>Login</Button>
        <Button className={classes.menuButton}>Signup</Button> */}
        <Link to="/explore" className={classes.menuButton}>
          Explore
        </Link>
        <Link to="" className={classes.menuButton}>
          Visited
        </Link>
        <Link to="" className={classes.menuButton}>
          Wishlist
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
