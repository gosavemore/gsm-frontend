import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/authActions";

import { userReducer } from "../redux/reducers/userReducer";
import { connect } from "react-redux";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };
  console.log(errors);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input type="type" id="username" name="username" ref={register} />
        <label>Password</label>
        <input type="password" id="password" name="password" ref={register} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
