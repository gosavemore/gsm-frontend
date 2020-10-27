import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import GetProduct from './components/GetProduct'
import Homepage from './components/Homepage'
import Cart from './components/Cart'
import GetCart from './components/GetCart'
import NavBar from './components/NavBar'
import { useDispatch } from 'react-redux'
import { getProducts } from './redux/actions/productsActions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  // FIX SEARCH BAR LINE 32 COMPONENT={} and tracking

  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
        <div>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/searchBar' component={GetProduct} />
          <Route exact='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact='/tracking' component={Homepage} />
          <Route exact path='/cart' component={GetCart} />
        </div>
      </header>
    </div>
  )
}

export default App
