import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import productReducer from '../redux/reducers/productReducer'
import { getProduct } from '../redux/actions/productsActions'

const GetProduct = () => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(getProduct(data))
  }

  return (
    <div>
      <h1>Get product by name</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Product Name</label>
        <input type='text' id='productName' name='productName' ref={register} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default GetProduct
