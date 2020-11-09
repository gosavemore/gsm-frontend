import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from './CartCard'
import { getCart } from '../redux/actions/cartActions'
import './CartList.scss'
import { Button } from 'react-materialize'

const CartList = () => {
  const cartData = useSelector((state) => state.cart)

  const [products, setProducts] = useState({
    totalItems: 0,
    totalPrice: 0,
  })

  useEffect(() => {
    setProducts({
      totalItems: cartData.totalItems,
      totalPrice: cartData.totalPrice,
    })
  }, [cartData])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCart())
  }, [dispatch])

  return (
    <div className='cart-page'>
      <div className='cart-ring-up'>
        <h3> Total Items</h3>
        <p>{products.totalItems}</p>
        <h3> Total Price</h3>
        <p>${products.totalPrice}</p>
        <Button>Checkout</Button>
      </div>
      <div className='cart-list'>
        <div className='cart-list-product'>
          <h3>Your Shopping Cart</h3>
          {cartData.items.map((product) => {
            if (product.quantity !== 0) {
              return (
                <CartCard
                  key={product.id}
                  product={product}
                  setProducts={setProducts}
                  totalItems={products.totalItems}
                  totalPrice={products.totalPrice}
                />
              )
            }
          })}
        </div>
      </div>
    </div>
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
