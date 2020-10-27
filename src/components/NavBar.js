import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      <nav>
        <ul id='nav-mobile' class='right hide-on-med-and-down'>
          <li>
            <Link className='navLink home' to='/home'>
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
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
