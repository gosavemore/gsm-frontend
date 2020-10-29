import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux/actions/authActions'
import undraw_Add_user from '../assets/undraw_Add_user.svg'

const Login = () => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(loginUser(data))
  }
  console.log(errors)

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h4>Login</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input type='text' id='username' name='username' ref={register} />
        <label>Password</label>
        <input type='password' id='password' name='password' ref={register} />
        <button class='btn waves-effect waves-light' type='submit'>
          {' '}
          Submit{' '}
        </button>
        <img src={undraw_Add_user}></img>
      </form>
    </div>
  )
}

export default Login
