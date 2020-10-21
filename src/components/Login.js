import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { userReducer } from "../redux/reducers/userReducer";
import { connect } from "react-redux";

const Login = () => {
  const [data, setData] = useState();

  console.log("checking what this is", data);

  // const login = useSelector((state) => state.userReducer);

  // const id = props.id;
  // const dispatch = useDispatch();

  // const [token] = useGetToken(); // define

  // useEffect(() => {
  //   if (token) {
  //     dispatch(fetchProfile(id));
  //   }
  // }, [id, token, dispatch]);

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
