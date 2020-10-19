import React from "react";

import { userReducer } from "../redux/reducers/userReducer";
import { connect } from "react-redux";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Username</label>
        <input type="text" id="username" name="username" />
        <label>Password</label>
        <input type="password" id="password" name="password" />
        <button> Submit</button>
      </form>
    </div>
  );
};

export default Login;
