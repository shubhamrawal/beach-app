import React from "react";
import { Router } from "@reach/router";
import Landing from "./Landing";
import Explore from "./Explore";
import "../style/App.css";
import BeachDetailView from "./BeachDetailView";

function App() {
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
