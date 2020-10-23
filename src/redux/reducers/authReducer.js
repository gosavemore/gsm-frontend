import { types } from "../actions/index";

const {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} = types;

const initialState = {
  email: "",
  password: "",
  token: "",
  err: "",
  isLoading: false,
  isAuth: false,
  isSuccess: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: payload.token,
        isAuth: true,
        isSuccess: true,
        isLoading: false,
        err: "",
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isSuccess: false,
        err: payload,
      };
    case REGISTER_USER_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loggedInUser: payload.currentUser || payload.newUser,
        isLoading: false,
        err: "",
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        err: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
