import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Checkout = (props) => {
  // const [displayPrice, setDisplayPrice] = useState(0) // maybe not num? []?
  console.log('props', props.location.state.p)
  const totalPrice = props.location.state.p

  // useEffect(() => {
  //   setDisplayPrice(totalPrice)
  // }, [totalPrice])

  return (
    <div>
      <h5>Checkout</h5>
      <p>Total today is: {totalPrice}</p>
    </div>
  )
}

export default Checkout
