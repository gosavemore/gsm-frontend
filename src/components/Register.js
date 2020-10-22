import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/actions/userActions'

// import { getProducts } from '../redux/actions/productsActions'

export default function Register() {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(registerUser(data))
    // dispatch(getProducts())
  }
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>User Name</label>
      <input
        type='text'
        placeholder='Username'
        name='username'
        ref={register}
      />
      <label>Email</label>
      <input type='text' placeholder='Email' name='email' ref={register} />
      <label>Password</label>
      <input
        type='text'
        placeholder='password'
        name='password'
        ref={register}
      />
      <label>First Name</label>
      <input
        type='text'
        placeholder='First Name'
        name='firstName'
        ref={register}
      />
      <label>Last Name</label>
      <input
        type='text'
        placeholder='Last Name'
        name='lastName'
        ref={register}
      />
      <label>House Number</label>
      <input
        type='text'
        placeholder='House Number'
        name='houseNumber'
        ref={register}
      />
      <label>Street name</label>
      <input
        type='text'
        placeholder='Street Name'
        name='streetName'
        ref={register}
      />
      <input type='text' placeholder='City' name='city' ref={register} />
      <input type='text' placeholder='Zip' name='zip' ref={register} />
      <input type='text' placeholder='State' name='state' ref={register} />
      <input type='text' placeholder='Country' name='country' ref={register} />

      <input type='submit' />
    </form>
  )
}
