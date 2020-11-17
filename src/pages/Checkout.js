import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import CheckOutForm from '../components/CheckOutForm'

const Checkout = (props) => {
  const totalPrice = props.location.state.price

  return (
    <div>
      <h5>Checkout</h5>
      <p>Total today is: {totalPrice}</p>
      <CheckOutForm totalPrice={totalPrice} />
    </div>
  )
}

export default Checkout
