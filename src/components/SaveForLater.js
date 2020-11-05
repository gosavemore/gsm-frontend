import React from "react";
import { Button } from "react-materialize";
import { useSelector, useDispatch } from "react-redux";
import { saveCart } from "../redux/actions/cartActions";

const SaveForLater = ({ product_id, quantity }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("this is the props", product_id, user.id, quantity);
    let data = {
      user_id: user.id,
      product_id: product_id,
      savedForLater: true,
      quantity: quantity,
    };
    dispatch(saveCart(data));
  };
  return <Button onClick={handleClick}>Save for later</Button>;
};

export default SaveForLater;
