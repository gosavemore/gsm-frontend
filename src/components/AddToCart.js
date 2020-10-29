import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/actions/cartActions'

const AddToCart = (data) => {
  const dispatch = useDispatch()
  const product = data.product
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  console.log('data::::', data)

  const handleSubmit = (product) => {
      setCart(product);
      console.log('product', product)
    };

  console.log('cart::::=>>>>', cart)
  

  return (
    <div>
      <h5>Add to shopping cart</h5>
      <form onSubmit={handleSubmit}>
        <button class='btn waves-effect waves-light' type='submit'>
          Add To Cart
        </button>
      </form>
    </div>
  )
}

export default AddToCart

//  const total = () => {
//     let totalVal = 0;
//     for (let i = 0; i < cart.length; i++) {
//       totalVal += cart[i].price;
//     }
//     setCartTotal(totalVal);
// //   };