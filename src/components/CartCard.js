import React, { useState, useEffect } from "react";
import { Card, CardTitle } from "react-materialize";
import "./CartCard.scss";
import { Button, Icon } from "react-materialize";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemQuantity,
  decreaseItemQuantity,
} from "../redux/actions/cartActions";

const CartCard = (props) => {
  const {
    id,
    productName,
    price,
    shortDescription,
    quantity,
    image,
  } = props.product;

  const dispatch = useDispatch();

  const [localQuantity, setLocalQuantity] = useState(0);

  useEffect(() => {
    setLocalQuantity(quantity);
  }, [localQuantity]);

  const handleIncrement = (e) => {
    e.preventDefault();
    setLocalQuantity(localQuantity + 1);
    dispatch(addItemQuantity(id));
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    setLocalQuantity(localQuantity - 1);
    dispatch(decreaseItemQuantity(id));
  };

  console.log("ths is the product", localQuantity);

  return (
    <div className="cart">
      <Card
        header={
          <CardTitle image={image} className="product-name">
            {productName}
          </CardTitle>
        }
        className="cart-cards"
      >
        <h5>${price}.00 </h5>
        <h5>Short Description</h5>
        <p>{shortDescription} </p>
        <h5>Quantity</h5>
        <div className="cart-buttons">
          <Button
            flat
            node="button"
            waves="light"
            icon={<Icon>remove</Icon>}
            onClick={handleDecrement}
          ></Button>
          <p className="cart-cards-quantity">{localQuantity}</p>
          <Button
            flat
            node="button"
            waves="light"
            icon={<Icon>add</Icon>}
            onClick={handleIncrement}
          ></Button>
        </div>
      </Card>
    </div>
  );
};

export default CartCard;
