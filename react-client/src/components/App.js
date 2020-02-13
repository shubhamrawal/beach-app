import React, { useEffect } from "react";
import { Router } from "@reach/router";
import Landing from "./Landing";
import Explore from "./Explore";
import "../style/App.css";
import BeachDetailView from "./BeachDetailView";
import { useDispatch, useSelector } from "react-redux";
import { initUser } from "../actions/auth";
import Login from "./Login";
import { Typography, CircularProgress } from "@material-ui/core";
import _sample from "lodash/sample";
import FourOFour from "./FourOFour";

function App() {
  const dispatch = useDispatch();
  const { init } = useSelector(state => state.auth);
  const resources = [
    "surfboards",
    "sunglasses",
    "water shoes",
    "beach bags",
    "swimming gear"
  ];

  useEffect(() => {
    dispatch(initUser());
  }, [dispatch]);

  const LoadScreen = () => {
    return (
      <div className="loader-root">
        <div className="loader-content">
          <Typography variant="h6">
            Packing {_sample(resources)}, please wait...
          </Typography>
          <CircularProgress />
        </div>
      </div>
    );
  };

  return (
    <>
      {init ? (
        <div className="App">
          <Router>
            <Landing path="/" />
            <Explore path="/explore" />
            <BeachDetailView path="/explore/:name" />
            <Login path="/login" />
            <FourOFour path="/404" />
          </Router>
        </div>
      ) : (
        <LoadScreen />
      )}
    </>
  );
}

export default App;
