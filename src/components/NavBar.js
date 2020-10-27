import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      <nav>
        <div>
          <Link className='navLink home' to='/home'>
            Home
          </Link>
        </div>
        <div>
          <Link className='navLink searchBar' to='/searchBar'>
            MAKE THIS A SEARCH BAR
          </Link>
        </div>
        <div>
          <Link className='navLink register' to='/register'>
            Register New User
          </Link>
        </div>
        <div>
          <Link className='navLink login' to='/login'>
            Login Existing User
          </Link>
          <Link className='navLink track' to='/tracking'>
            Track Order
          </Link>
          <Link className='navLink cart' to='/cart'>
            Cart
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
