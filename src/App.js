import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import SearchBar from './components/SearchBar'
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import GetProduct from './components/GetProduct'
import Homepage from './components/Homepage'
import Cart from './components/Cart'
import GetCart from './components/GetCart'
import NavBar from './components/NavBar'
import Tracking from './components/Tracking'
import Footer from './components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './redux/actions/productsActions'

function App() {
  const [search, setSearch] = useState({
    searchField: '',
  })

  console.log('search::::', search)

  // const [cart, setCart] = useState({
  //   user_id: 1,
  //   product_id: 2,
  //   savedForLater: true,
  //   quantity: 5,
  // })
  // console.log(cart)

  const products = useSelector((state) => state.products.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  // FIX SEARCH BAR LINE 32 COMPONENT={} and tracking
  const handleChange = (e) => {
    setSearch({ searchField: e.target.value })
  }

  // search product if exists
  let filteredProduct
  console.log('filteredProduct::::', filteredProduct)
  if (search.searchField) {
    filteredProduct = products.filter((product) =>
      product.productName.toLowerCase().includes(search.searchField)
    )
  } else {
    filteredProduct = products
  }

  return (
    <div className='App'>
      <h5 className='top' class='center-align'>
        FREE SHIPPING FOR ORDERS OVER $49
      </h5>
      <header className='App-header'>
        <NavBar placeholder={'search product'} handleChange={handleChange} />
        <div>
          <Route
            exact
            path='/'
            component={() => <Homepage filteredProduct={filteredProduct} />}
          />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/tracking' component={Tracking} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/admin/addProducts' component={AddProduct} />
        </div>
      </header>
      <footer>
        <div>
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default App
