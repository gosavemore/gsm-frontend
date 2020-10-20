import { types } from "../actions/index";

const {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} = types;

const initialState = {
  username: "",
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  houseNumber: "",
  streetName: "",
  city: "",
  zip: 0,
  state: "",
  country: "",
  err: "",
  isLoading: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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

export default userReducer;
