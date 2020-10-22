import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import productReducer from '../redux/reducers/productReducer'
import { addProducts } from '../redux/actions/productsActions'

const AddProduct = () => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(addProducts(data))
  }

  return (
    <div>
      <h1>Add a new Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Product Name</label>
        <input type='text' id='productName' name='productName' ref={register} />
        <label>Price</label>
        <input type='text' id='price' name='price' ref={register} />
        <label>Short Description</label>
        <input
          type='text'
          id='shortDescription'
          name='shortDescription'
          ref={register}
        />
        <label>Description</label>
        <input type='text' id='description' name='description' ref={register} />
        <label>Stock: </label>
        <input type='text' id='stock' name='stock' ref={register} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddProduct
