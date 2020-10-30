import React, { useState, useEffect } from 'react'
import AddToCart from './AddToCart'

const ProductCard = (props) => {
  const {
    productName,
    price,
    shortDescription,
    description,
    stock,
  } = props.product

  // const [cart, setCart] = useState([])

  // const addToCart = (el) => {
  //   setCart([...cart, el])
  // }

  return (
    // <div class='row'>
    <div class='col s12 m3'>
      <div class='card'>
        <div class='card-content'>
          <h3>{productName} </h3>
          <p>{price} </p>
          <p>{shortDescription} </p>
          <p>{description} </p>
          <p>{stock} </p>
          <AddToCart data={props}/> 
        </div>
      </div>
    </div>
    // </div>
  )
}

export default ProductCard
