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
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h4>Get cart</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button class='btn waves-effect waves-light' type='submit'>
          {' '}
          Get Cart{' '}
        </button>
      </form>
    </div>
  )
}

export default GetCart
