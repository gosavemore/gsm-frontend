import axiosWithAuth from "../util/axiosWithAuth";
import { types } from "./index";

const {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} = types;

// REGISTER USER ACTIONS
export const registerUser = (data) => (dispatch) => {
  dispatch({ type: REGISTER_USER_START });
  return axiosWithAuth()
    .post("/auth/register", data)
    .then((res) => {
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: REGISTER_USER_FAIL, payload: err }));
};
