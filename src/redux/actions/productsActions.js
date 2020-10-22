// import axiosWithAuth from "../util/axiosWithAuth";
import { types } from './index'
import axios from 'axios'

const {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  ADD_PRODUCTS_START,
  ADD_PRODUCTS_SUCCESS,
  ADD_PRODUCTS_FAIL,
} = types

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_START })
  try {
    const res = await axios
      .create({
        baseURL: 'https://gosavemore.herokuapp.com/',
      })
      .get('/products')
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data })
    return res
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: err.message })
  }
}

export const addProducts = (newProduct) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCTS_START })
  try {
    console.log('this is the new product', newProduct)
    const res = await axios
      .create({
        baseURL: 'https://gosavemore.herokuapp.com/',
      })
      .post('/products/addProduct', newProduct)
    console.log('res')
    dispatch({ type: ADD_PRODUCTS_SUCCESS, payload: res.data })
    return res
  } catch (err) {
    dispatch({ type: ADD_PRODUCTS_FAIL, payload: err.message })
  }
}
