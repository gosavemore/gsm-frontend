import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/actions/cartActions'

const AddToCart = () => {
  const { register, handleSubmit, reset } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    let updatedData = {
      ...data,
      // price: parseInt(data.price),
      // ratings: parseInt(data.ratings),
      // stock: parseInt(data.stock),
    }

    dispatch(addCart(updatedData))
    setTimeout(() => reset(), 5000)
  }

  return (
    <div>
      <h1>Add to shopping cart</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddToCart
