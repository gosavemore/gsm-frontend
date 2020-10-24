import { types } from '../actions/index'

const {  
  GET_CART_START,
  GET_CART_SUCCESS,
  GET_CART_FAIL,
  ADD_CART_START,
  ADD_CART_SUCCESS,
  ADD_CART_FAIL,
} = types

const initialState = {
  cart: []
  err: '',
  isLoading: false,
}

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_CART_SUCCESS:
      return {
        ...state,
        cart: payload
        isLoading: false,
      }
      case GET_CART_FAIL: 
        return {
          ...state,
          isLoading: false
          err: payload
      }
      case ADD_CART_START:
        return {
          ...state,
          isLoading: true,
        };
      case ADD_CART_SUCCESS:
        return {
          ...state,
          cart: payload,
        };
      case ADD_CART_FAIL:
        return {
          ...state,
          isLoading: false,
          err: payload,
        };
    default:
      return state
  }
}

export default cartReducer
