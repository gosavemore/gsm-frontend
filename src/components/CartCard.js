import React, { useState, useEffect } from "react";
import { Card, CardTitle } from "react-materialize";
import { Button, Icon } from "react-materialize";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemQuantity,
  decreaseItemQuantity,
} from "../redux/actions/cartActions";
import "./CartCard.scss";

import SaveForLater from "./SaveForLater";

const CartCard = (props) => {
  const { id, productName, price, quantity, image } = props.product;

  const cart = useSelector((state) => state.cart.savedItems);
  const dispatch = useDispatch();

  const [localQuantity, setLocalQuantity] = useState(0);
  const [savedItems, setSavedItems] = useState([]);

  let { totalItems, totalPrice, setProducts } = props;

  useEffect(() => {
    setLocalQuantity(quantity);
    setSavedItems(cart);
  }, [localQuantity, cart]);

  const handleIncrement = (e) => {
    e.preventDefault();
    setLocalQuantity(localQuantity + 1);
    setProducts({
      totalItems: (totalItems += 1),
      totalPrice: totalPrice + price,
    });
    dispatch(addItemQuantity(id));
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    setLocalQuantity(localQuantity - 1);
    if (localQuantity !== 0) {
      setProducts({
        totalItems: (totalItems -= 1),
        totalPrice: totalPrice - price,
      });
    }
    dispatch(decreaseItemQuantity(id));
  };

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
        <SaveForLater
          key={id}
          product_id={id}
          quantity={localQuantity}
          text={"Save for later"}
        />
      </Card>
    </div>
  );
};

export default CartCard;
