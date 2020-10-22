import React, { useEffect } from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import { useDispatch } from 'react-redux'

import { getProducts } from './redux/actions/productsActions'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div className='App'>
      {/* <Login /> */}
      <h1>Go Save More</h1>
      <div>
        <Login />
        <Register />
        <ProductList />
        <AddProduct />
      </div>
    </div>
  )
}

export default App
