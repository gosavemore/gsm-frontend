import React from 'react'
import AddToCart from './AddToCart'

const ProductCard = (props) => {
  const {
    productName,
    price,
    shortDescription,
    description,
    stock,
  } = props.product
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
          <AddToCart data={productName} />
        </div>{' '}
      </div>
    </div>
    // </div>
  )
}

export default ProductCard
