import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../redux/actions/cartActions'
import CartCart from './CartCard'

const CartList = () => {
  // get shopping cart data from redux-store
  const cartData = useSelector((state) => state.cart)

  // DISPLAY DATA BELOW ===>>>
  console.log('cart data::::============>', cartData)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getCart())
  // }, [dispatch])

  const { productName, price, shortDescription, description, stock } = cartData

  console.log('p!!!!!!!!!!!!!!!!', cartData.items)

  return (
    <>
      <h3>Your Shopping Cart</h3>
      {cartData.items.map((product) => {
        return <CartCart key={product.id} product={product} />
      })}
    </>
  )
}

export default CartList

// FOR FUN
// MAKE CART VERY SECURE USING SHA256

// PLAN
// CREATE UNIQUE TOKEN FOR EACH CART ITEM WHEN ADDED TO CART
// STORE TOKEN ON BE UNDER THAT USER
// WHEN ACCESSING CART, CHECK TO SEE IF TOKEN IS AVAILABLE FOR EACH ITEM
// IF NO DISPLAY IT, IF NOT, DO NOT DISPLAY
