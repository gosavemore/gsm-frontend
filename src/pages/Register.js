import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/actions/authActions'
import { useHistory } from 'react-router-dom'

export default function Register() {
  const { register, handleSubmit, reset } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = (data) => {
    let updatedData = {
      ...data,
      isAdmin: 0,
    }
    console.log('this is the data', updatedData)
    dispatch(registerUser(updatedData))
    let path = `/`
    history.push(path)
    // setTimeout(() => reset(), 5000);
  }

  return (
    <div
      style={{
        maxWidth: '800px',
        marginBottom: '20px',
        padding: '20px',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>Create account</h4>
        <label>User Name</label>
        <input
          type='text'
          placeholder='Username'
          name='username'
          ref={register}
        />
        <label>Email</label>
        <input type='email' placeholder='Email' name='email' ref={register} />
        <label>Password</label>
        <input
          type='password'
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
        <button class='btn waves-effect waves-light' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}
