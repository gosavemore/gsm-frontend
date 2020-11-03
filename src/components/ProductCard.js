import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { Card, CardTitle, Button } from "react-materialize";
import "./ProductCard.scss";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  let product = props.product;

  const { productName, price, image } = props.product;

  const handleClick = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card className="product">
      <CardTitle image={image} className="product-name">
        {productName}
      </CardTitle>
      <p>${price}</p>
      <Button
        waves="light"
        onClick={handleClick}
        className="product-button string"
      >
        Add
      </Button>
    </Card>
  );
};

export default ProductCard;
