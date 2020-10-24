import React from 'react'

const dispatch = useDispatch()

const { register, handleSubmit } = useForm()
const dispatch = useDispatch()

const GetCart = () => {
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
