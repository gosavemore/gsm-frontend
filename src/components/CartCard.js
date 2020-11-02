import React from "react";
import { Card, CardTitle } from "react-materialize";
import "./CartCard.scss";

const CartCard = (props) => {
  const {
    productName,
    price,
    shortDescription,
    description,
    quantity,
    image,
  } = props.product;

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
        <p className="cart-cards-quantity">{quantity}</p>
      </Card>
    </div>
  );
};

export default CartCard;
