import { combineReducers } from 'redux'
import userReducer from './userReducer'
import authReducer from './authReducer'
import productReducer from './productReducer'

export default combineReducers({
  user: userReducer,
  auth: authReducer,
  products: productReducer,
})
