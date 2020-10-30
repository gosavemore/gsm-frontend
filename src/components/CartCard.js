import React from 'react'

const CartCard = (props) => {
  let product = props.product

  const {
    productName,
    price,
    shortDescription,
    description,
    stock,
  } = props.product

  return (
    <>
      <h3>{productName} </h3>
      <p>{price} </p>
      <p>{shortDescription} </p>
      <p>{description} </p>
      <p>{stock} </p>
    </>
  )
}

export default CartCard
