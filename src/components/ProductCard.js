import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'
import { Card, CardTitle, CardDescription, Button } from 'react-materialize'
import './ProductCard.scss'
import DescriptionCard from './DescriptionCard'

const ProductCard = (props) => {
  const dispatch = useDispatch()
  let product = props.product
  console.log('props.product===>', props.product)
  const {
    productName,
    price,
    image,
    shortDescription,
    description,
  } = props.product

  const handleClick = () => {
    dispatch(addToCart(product))
  }

  const handleClickInfo = () => {
    dispatch(addToCart(product)) //TBC link to description cart.
  }

  return (
    <Card className='product'>
      <CardTitle image={image} className='product-name'>
        {productName}
      </CardTitle>
      <div className='product-shortDescription'>{shortDescription}</div>
      <Button
        waves='light'
        onClick={handleClickInfo}
        className='product-button string'
      >
        Info
      </Button>
      <p>${price}</p>
      <Button
        waves='light'
        onClick={handleClick}
        className='product-button string'
      >
        Add
      </Button>
    </Card>
  )
}

export default ProductCard
