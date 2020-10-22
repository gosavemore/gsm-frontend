import { combineReducers } from 'redux'
import userReducer from './userReducer'
import authReducer from './authReducer'
import productsReducer from './productsReducer'

export default combineReducers({
  user: userReducer,
  auth: authReducer,
  products: productsReducer,
})
