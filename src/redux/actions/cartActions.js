import axiosWithAuth from '../util/axiosWithAuth'
import axiosRoute from '../util/axiosRoute'
import { types } from './index'

const {
  GET_CART_START,
  GET_CART_SUCCESS,
  GET_CART_FAIL,
  ADD_CART_START,
  ADD_CART_SUCCESS,
  ADD_CART_FAIL,
} = types

export const getCart = () => async (dispatch) => {
  dispatch({ type: GET_CART_START })
  try {
    const id = 1 // fix
    const res = await axiosRoute().get(`/cart/${id}`)
    dispatch({ type: GET_CART_SUCCESS, payload: res.data })
    return res
  } catch (err) {
    dispatch({ type: GET_CART_FAIL, payload: err.message })
  }
}

export const addCart = (newProduct) => async (dispatch) => {
  dispatch({ type: ADD_CART_START })
  const id = 1 // fix
  try {
    const res = await axiosRoute().post(`/cart/${id}`, newProduct)
    dispatch({ type: ADD_CART_SUCCESS, payload: res.data })
    return res
  } catch (err) {
    dispatch({ type: ADD_CART_FAIL, payload: err.message })
  }
}
