// import axiosWithAuth from "../util/axiosWithAuth";
import { types } from './index'
import axiosRoute from '../util/axiosRoute'

const {
  GET_INDIVIDUAL_PRODUCT_START,
  GET_INDIVIDUAL_PRODUCT_SUCCESS,
  GET_INDIVIDUAL_PRODUCT_FAIL,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  ADD_PRODUCTS_START,
  ADD_PRODUCTS_SUCCESS,
  ADD_PRODUCTS_FAIL,
  EDIT_PRODUCTS_START,
  EDIT_PRODUCTS_SUCCESS,
  EDIT_PRODUCTS_FAIL,
} = types

export const getProduct = (id) => async (dispatch) => {
  dispatch({ type: GET_INDIVIDUAL_PRODUCT_START })
  try {
    const res = await axiosRoute().get(`/products/${id}`)
    dispatch({ type: GET_INDIVIDUAL_PRODUCT_SUCCESS, payload: res.data })
    return res
  } catch (err) {
    dispatch({ type: GET_INDIVIDUAL_PRODUCT_FAIL, payload: err })
  }
}

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_START })
  try {
    const res = await axiosRoute().get('/products')
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data })
    return res
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: err.message })
  }
}

export const addProducts = (newProduct) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCTS_START })
  try {
    const res = await axiosRoute().post('/products', newProduct)
    dispatch({ type: ADD_PRODUCTS_SUCCESS, payload: res.data })
    return res
  } catch (err) {
    dispatch({ type: ADD_PRODUCTS_FAIL, payload: err.message })
  }
}

export const editProducts = (productName, updatedData) => async (dispatch) => {
  dispatch({ type: EDIT_PRODUCTS_START })
  try {
    const res = await axiosRoute().put(`/products/${productName}`, updatedData)
    dispatch({ type: EDIT_PRODUCTS_SUCCESS, payload: res.data })
    return res
  } catch (err) {
    dispatch({ type: EDIT_PRODUCTS_FAIL, payload: err.message })
  }
}
