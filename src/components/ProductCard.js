import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'

const ProductCard = (props) => {
  const dispatch = useDispatch()
  let product = props.product

  const {
    productName,
    price,
    shortDescription,
    description,
    stock,
  } = props.product

  const handleClick = () => {
    dispatch(addToCart(product, 'testing'))
  }

  return (
    // <div class='row'>
    <div class='col s12 m3'>
      <div class='card'>
        <div class='card-content'>
          <h3>{productName} </h3>
          <p>${price}.00 </p>
          <p>{shortDescription} </p>
          <p>{description} </p>
          <p>Only {stock} left in stock!</p>
          <button
            class='btn waves-effect waves-light'
            type='submit'
            onClick={handleClick}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default ProductCard
