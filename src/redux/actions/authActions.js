import axiosWithAuth from "../util/axiosWithAuth";
import { types } from "./index";

const {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} = types;

// LOGIN USER ACTIONS
export const loginUser = (data, history) => dispatch => {
  
    dispatch({ type: LOGIN_USER_START });
    return axiosWithAuth()
      .post("/auth/login", data)
      .then((res) => {
        console.log('res', res)
        localStorage.setItem("token", res.data.token);
        dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
        // history.push("/");
      })
      .catch((err) => dispatch({ type: LOGIN_USER_FAIL, payload: err }));
  };


