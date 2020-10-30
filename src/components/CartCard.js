import React from 'react'

const CartCard = (props) => {
  let product = props.product

  const {
    productName,
    price,
    shortDescription,
    description,
    quantity,
  } = props.product

  return (
    <div class='col s12 m3'>
      <div class='card'>
        <div class='card-content'>
          <h3>{productName} </h3>
          <p>${price}.00 </p>
          <p>{shortDescription} </p>
          <p>{description} </p>
          <p>Qty: {quantity}</p>
        </div>
      </div>
    </div>
  )
}

export default CartCard
