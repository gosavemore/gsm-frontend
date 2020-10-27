import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { getProduct } from '../redux/actions/productsActions'

const GetProduct = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(getProduct(data))
  }

  return (
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
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
