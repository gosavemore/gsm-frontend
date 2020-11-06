import React, { useEffect } from 'react'
import { Button } from 'react-materialize'
import { useSelector, useDispatch } from 'react-redux'
import { saveCart, getCart } from '../redux/actions/cartActions'
import { useHistory } from 'react-router-dom'

const SaveForLater = ({ product_id, quantity, text }) => {
  const user = useSelector((state) => state.auth.user)
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const history = useHistory()
  var isInCart = false

  const handleSave = () => {
    let data = {
      user_id: user.id,
      product_id: product_id,
      savedForLater: true,
      quantity: quantity,
    }

    if (!auth.isAuth) {
      history.push('/login')
    } else {
      dispatch(saveCart(data))
    }
  }

  useEffect(() => {
    dispatch(getCart())
  }, [isInCart])

  if (isInCart === false) {
    isInCart = true
    console.log(isInCart, '<======if=======>')
    return (
      <>
        <Button onClick={handleSave}>{text}</Button>
      </>
    )
  }
  if (isInCart === true) {
    console.log('<======else=======>')
    return (
      <>
        <Button onClick={handleSave}>in cart{text}</Button>
      </>
    )
  }
}

export default SaveForLater
