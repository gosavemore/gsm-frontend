import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const [displayPrice, setDisplayPrice] = useState(0) // maybe not num? []?

  const totalPrice = useSelector((state) => state.cart.totalPrice)

  useEffect(() => {
    setDisplayPrice(totalPrice)
  }, [totalPrice])

  return (
    <div>
      <h5>Checkout</h5>
      <p>Total today is: {displayPrice}</p>
    </div>
  )
}

export default Checkout
