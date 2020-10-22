import { types } from '../actions/index'

const { GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } = types

const initialState = {
  products: [],
  err: '',
  isLoading: false,
}

const productsReducer = (state = initialState, { type, payload }) => {
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
    default:
      return state
  }
}

export default productsReducer
