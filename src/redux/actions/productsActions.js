// import axiosWithAuth from "../util/axiosWithAuth";
import { types } from './index'
import axios from 'axios'

const { GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } = types

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_START })
  try {
    const res = await axios
      .create({
        baseURL: 'https://gosavemore.herokuapp.com/',
      })
      .get('/products')
    console.log('res =====>', res)
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data })
    return res
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: err.message })
  }
}
