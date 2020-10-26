import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { getCart } from '../redux/actions/cartActions'

const GetCart = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const onSubmit = () => {
    dispatch(getCart())
  }

  return (
    <div>
      <h1>Get cart</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button type='submit'>Get Cart</button>
      </form>
    </div>
  )
}
export default GetCart
