import { types } from '../actions/index'

const {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  ADD_PRODUCTS_START,
  ADD_PRODUCTS_SUCCESS,
  ADD_PRODUCTS_FAIL,
} = types

const initialState = {
  products: [],
  registerUser: [],
  err: '',
  isLoading: false,
}

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      }
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        isLoading: false,
        err: 'ERROR', // FIX FOR ERROR HANDLING
      }
    case ADD_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      }
    case ADD_PRODUCTS_SUCCESS:
      return {
        ...state,
        registerUser: payload,
      }
    case ADD_PRODUCTS_FAIL:
      return {
        ...state,
        isLoading: false,
        err: payload,
      }
    default:
      return state
  }
}

export default productReducer
