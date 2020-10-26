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
    <div>
      <h3>{productName} </h3>
      <p>{price} </p>
      <p>{shortDescription} </p>
      <p>{description} </p>
      <p>{stock} </p>
      <AddToCart data={productName} />
    </div>
  )
}

export default ProductCard
