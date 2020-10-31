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
    <div className="cart-cards">
      <Card
        header={
          <CardTitle image={image} className="product-name">
            {productName}
          </CardTitle>
        }
      >
        <p>${price}.00 </p>
        <p>{shortDescription} </p>
        <p>{description} </p>
        <p>Qty: {quantity}</p>
      </Card>
    </div>
  );
};

export default CartCard;
