import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux/actions/authActions'
import undraw_Add_user from '../assets/undraw_Add_user.svg'

const Login = () => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()

  //  submitForm (e) {
  //   e.preventDefault()
  //   history.push('/'); 
  // }

  const onSubmit = (data, e) => {
    e.prevent.default()
    console.log('EVENT::::::E::::==>>', e)
    dispatch(loginUser(data, history))
    // let path = `/`
    // history.push(path)
  }
  console.log(errors)

  // const redirectHome = () => {
  //   let path = `/`
  //   history.push(path)
  // }

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h4>Login</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input type='text' id='username' name='username' ref={register} />
        <label>Password</label>
        <input type='password' id='password' name='password' ref={register} />
        <Link to={`/`}>
        <button class='btn waves-effect waves-light' type='submit'>
          {' '}
          Submit{' '}
        </button>
        </Link>
      </form>
      <div>
        <p>New to GoSaveMore?</p>
        <button
          style={{ marginBottom: '20px' }}
          class='btn waves-effect waves-light'
          to='/register'
          // onClick={redirectHome}
        >
          Register
        </button>
      </div>
      <>
        <img src={undraw_Add_user} />
      </>
    </div>
  )
}

export default Login
