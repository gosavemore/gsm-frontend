import axiosWithAuth from "../util/axiosWithAuth";
import axiosRoute from "../util/axiosRoute";
import { types } from "./index";

const {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} = types;

// LOGIN USER ACTIONS
export const loginUser = (data, history) => (dispatch) => {
  dispatch({ type: LOGIN_USER_START });
  return axiosWithAuth()
    .post("/auth/login", data)
    .then((res) => {
      console.log("res", res);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
      // history.push("/");
    })
    .catch((err) => dispatch({ type: LOGIN_USER_FAIL, payload: err }));
};

// REGISTER USER ACTIONS
export const registerUser = (data) => (dispatch) => {
  dispatch({ type: REGISTER_USER_START });
  return axiosRoute()
    .post("/auth/register", data)
    .then((res) => {
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: REGISTER_USER_FAIL, payload: err }));
};
