import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  return (
    <div>
      <h5>Checkout</h5>
      <p>Total today is: {totalPrice}</p>
    </div>
  )
}

export default Checkout
