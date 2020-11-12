import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CartCard from './CartCard'
import { Button } from 'react-materialize'
import './CartList.scss'

const CartList = () => {
  const cartData = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const [products, setProducts] = useState({
    totalItems: 0,
    totalPrice: 0,
  })

  var price = products.totalPrice

  useEffect(() => {
    setProducts({
      totalItems: cartData.totalItems,
      totalPrice: cartData.totalPrice,
    })
  }, [cartData])

  return (
    <div className='cart-page'>
      <div className='cart-ring-up'>
        <h3> Total Items</h3>
        <p>{products.totalItems}</p>
        <h3> Total Price</h3>
        <p>${products.totalPrice}</p>
        <Link to={'/checkout'} totalPrice={price}>
          <Button>Checkout</Button>
        </Link>
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
