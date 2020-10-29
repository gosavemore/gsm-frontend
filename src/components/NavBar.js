import React from 'react'
import { Link } from 'react-router-dom'
import GoSaveMoreLogoHeader from '../assets/GoSaveMoreLogoHeader.png'

const NavBar = () => {
  return (
    <nav>
      <div className='navbar' class='nav-wrapper'>
        {/* <div class='nav-wrapper'>     ---- MOBILE VIEW FIX ATTEMP ---
          <a href='#' class='brand-logo'>
            GoSaveMore
          </a>
          <ul id='nav-mobile' class='right hide-on-med-and-down'>
            <li>
              <Link className='navLink home' to='/'>
                Home
              </Link>
            </li>

            <li>
              <Link className='navLink searchBar' to='/searchBar'>
                MAKE THIS A SEARCH BAR
              </Link>
            </li>
            <li>
              <Link className='navLink register' to='/register'>
                Register New User
              </Link>
            </li>
            <li>
              <Link className='navLink login' to='/login'>
                Login Existing User
              </Link>
            </li>
            <li>
              <Link className='navLink track' to='/tracking'>
                Track Order
              </Link>
            </li>
            <li>
              <Link className='navLink cart' to='/cart'>
                Cart
              </Link>
            </li>
            <li>
              <Link className='navLink addProduct' to='/admin/addProducts'>
                Admin Add Products
              </Link>
            </li>
          </ul>
        </div> */}
        <ul id='nav' class='right  blue-text text-darken-2'>
          <li>
            <Link
              style={{ textAlign: 'center' }}
              className='navLink home'
              to='/'
            >
              <img
                className='navLink image'
                src={GoSaveMoreLogoHeader}
                style={{ padding: '10px' }}
              ></img>
            </Link>
          </li>

          <li>
            <Link className='navLink searchBar' to='/searchBar'>
              MAKE THIS A SEARCH BAR
            </Link>
          </li>
          <li>
            <Link className='navLink register' to='/register'>
              Register New User
            </Link>
          </li>
          <li>
            <Link className='navLink login' to='/login'>
              Login Existing User
            </Link>
          </li>
          <li>
            <Link className='navLink track' to='/tracking'>
              Track Order
            </Link>
          </li>
          <li>
            <Link className='navLink cart' to='/cart'>
              Cart
            </Link>
          </li>
          <li>
            <Link className='navLink addProduct' to='/admin/addProducts'>
              Admin Add Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
