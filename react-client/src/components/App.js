import React from "react";
import { Router } from "@reach/router";
import Landing from "./Landing";
import Explore from "./Explore";
import "../style/App.css";
import BeachDetailView from "./BeachDetailView";
import { useDispatch } from "react-redux";
import { initUser } from "../actions/auth";

function App() {
  const dispatch = useDispatch();
  dispatch(initUser());

  return (
    <div className="App">
      <Router>
        <Landing path="/" />
        <Explore path="/explore" />
        <BeachDetailView path="/explore/:name" />
      </Router>
    </div>
  );
}

export default App;
