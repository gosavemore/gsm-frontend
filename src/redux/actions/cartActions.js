import axiosRoute from "../util/axiosRoute";
import { types } from "./index";

const { GET_CART_START, GET_CART_SUCCESS, GET_CART_FAIL, ADD_TO_CART } = types;

export const getCart = () => async (dispatch) => {
  dispatch({ type: GET_CART_START });
  try {
    const id = 1; // fix
    const res = await axiosRoute().get(`/cart/${id}`);
    dispatch({ type: GET_CART_SUCCESS, payload: res.data });
    return res;
  } catch (err) {
    dispatch({ type: GET_CART_FAIL, payload: err.message });
  }
};

export const addToCart = (product) => async (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: product });
};
