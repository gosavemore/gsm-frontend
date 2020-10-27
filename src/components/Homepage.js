import React from 'react'
import ProductList from './ProductList'

const Homepage = () => {
  return (
    <div className='homepage'>
      <div class='row'>
        <h1 class='center-align'>Go Save More!</h1>
        <ProductList />
      </div>
    </div>
  )
}

export default Homepage
