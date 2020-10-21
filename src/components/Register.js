import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/actions/userActions";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    houseNumber: "",
    streetName: "",
    city: "",
    zip: "",
    state: "",
    country: "",
  });

  //   const state = useSelector((state) => state);
  //   const dispatch = useDispatch(setData);
  // const token = "token"; // fix

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setData();
  //   };
  // }, [token, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let change = {};
    change[name] = value;
    setData(change);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this is the local state", data);
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <label>First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
        />
        <label>House Number</label>
        <input
          type="text"
          id="houseNumber"
          name="houseNumber"
          value={data.houseNumber}
          onChange={handleChange}
        />
        <label>Street Name</label>
        <input
          type="text"
          id="streetName"
          name="streetName"
          value={data.streetName}
          onChange={handleChange}
        />
        <label>City </label>
        <input
          type="text"
          id="city"
          name="city"
          value={data.city}
          onChange={handleChange}
        />
        <label>Zip </label>
        <input
          type="text"
          id="zip"
          name="zip"
          value={data.zip}
          onChange={handleChange}
        />
        <label>State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={data.state}
          onChange={handleChange}
        />
        <label>Country</label>
        <input
          type="text"
          id="country"
          name="country"
          value={data.country}
          onChange={handleChange}
        />
        <button> Submit </button>
      </form>
    </div>
  );
};

export default Register;
