import React, { useState, useEffect } from 'react'
import './NavBar.scss'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoSaveMoreLogoHeader from '../assets/GoSaveMoreLogoHeader.png'
import SearchBar from '../components/SearchBar'
import { logOut } from '../redux/actions/authActions'

import { Navbar, NavItem, Icon, Badge } from 'react-materialize'
import { NavLink } from 'react-router-dom'

const NavBar = ({ placeholder, handleChange }) => {
  const [user, setUser] = useState({
    user: [],
    isLoading: '',
    isAuth: '',
    isSuccess: '',
  })

  const cartData = useSelector((state) => state.cart)
  const cartCount = useSelector((state) => state.cart.totalItems)
  const userCount = cartData.items.length
  const cartCount2 = cartCount + userCount
  console.log('cartData', cartData)
  console.log('cartCount2', cartCount2)

  const state = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogOut = () => {
    dispatch(logOut(history))
  }

  useEffect(() => {
    setUser(state)
  }, [state, user])

  return (
    <Navbar
      className='nav-bar'
      alignLinks='right'
      id='mobile-nav'
      menuIcon={<Icon>menu</Icon>}
      brand={
        <NavLink to='/'>
          <img src={GoSaveMoreLogoHeader} id='logo' />
        </NavLink>
      }
      options={{
        draggable: true,
        edge: 'left',
        preventScrolling: true,
      }}
    >
      <div className='nav-item'>
        <div>
          <NavItem className='nav-item-search'>
            <SearchBar placeholder={placeholder} handleChange={handleChange} />
          </NavItem>
        </div>
        {state.isAuth ? (
          <div className='nav-item-auth'>
            <NavLink className='navLink cart' to='/cart'>
              Cart <Badge className='nav-item-cart-num'> {cartCount2}</Badge>
            </NavLink>

            <NavLink className='navLink track' to='/tracking'>
              Orders
            </NavLink>

            <NavLink className='signout' onClick={handleLogOut} to='/tracking'>
              Logout
            </NavLink>
          </div>
        ) : (
          <div className='nav-item-auth'>
            <NavLink to='/cart'>
              <div className='nav-item-cart-count'>
                Cart <Badge className='nav-item-cart-num'> {cartCount2}</Badge>
              </div>
            </NavLink>

            <NavLink className='login' to='/login'>
              <div className='nav-item-login'>Login</div>
            </NavLink>

            <NavLink className='register' to='/register'>
              <div className='nav-item-register'>Register</div>
            </NavLink>
          </div>
        )}
      </div>
    </Navbar>
  )
}

export default NavBar
