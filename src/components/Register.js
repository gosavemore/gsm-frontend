import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/authActions";

export default function Register() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data, e) => {
    e.preventDefault();
    let isAdmin = data.isAdmin === "true" ? 1 : 0;
    let updatedData = {
      ...data,
      isAdmin: isAdmin,
      houseNumber: parseInt(data.houseNumber),
      zip: parseInt(data.zip),
    };
    dispatch(registerUser(updatedData));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>User Name</label>
      <input
        type="text"
        placeholder="Username"
        name="username"
        ref={register}
      />
      <label>Email</label>
      <input type="email" placeholder="Email" name="email" ref={register} />
      <label>Password</label>
      <input
        type="password"
        placeholder="password"
        name="password"
        ref={register}
      />
      <label>First Name</label>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        ref={register}
      />
      <label>Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        ref={register}
      />
      <label>House Number</label>
      <input
        type="number"
        placeholder="House Number"
        name="houseNumber"
        ref={register}
      />
      <label>Street name</label>
      <input
        type="text"
        placeholder="Street Name"
        name="streetName"
        ref={register}
      />
      <input type="text" placeholder="City" name="city" ref={register} />
      <input type="number" placeholder="Zip" name="zip" ref={register} />
      <input type="text" placeholder="State" name="state" ref={register} />
      <input type="text" placeholder="Country" name="country" ref={register} />
      <select name="isAdmin" ref={register}>
        <option value="true">Yes</option>
        <option value="false" selected>
          No
        </option>
      </select>
      <button type="submit"> Submit </button>
    </form>
  );
}
