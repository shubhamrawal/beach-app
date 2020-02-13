import React from "react";
import { Button } from "@material-ui/core";
import { navigate } from "@reach/router";

const Login = props => {
  const handleLogin = () => {
    navigate(props.location.state ? props.location.state.redirect_url : "/");
  };

  return (
    <div>
      <h1>Login</h1>
      <Button onClick={handleLogin}>Login Now</Button>
    </div>
  );
};

export default Login;
