import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
var sha256 = require('js-sha256')

const Cart = () => {
  const [cart, setCart] = useState({
    user_id: 1,
    product_id: 2,
    savedForLater: true,
    quantity: 5,
  })
  // const cart = useSelector((state) => state.cart)
  // console.log('cart', cart)
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h1>cart{cart.user_id}</h1>
    </div>
  )
}

export default Cart

// FOR FUN
// MAKE CART VERY SECURE USING SHA256

// PLAN
// CREATE UNIQUE TOKEN FOR EACH CART ITEM WHEN ADDED TO CART
// STORE TOKEN ON BE UNDER THAT USER
// WHEN ACCESSING CART, CHECK TO SEE IF TOKEN IS AVAILABLE FOR EACH ITEM
// IF NO DISPLAY IT, IF NOT, DO NOT DISPLAY
