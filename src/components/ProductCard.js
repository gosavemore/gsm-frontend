import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { Card, CardTitle, Button } from "react-materialize";
import "./ProductCard.scss";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  let product = props.product;

  const { productName, image } = props.product;

  const handleClick = () => {
    dispatch(addToCart(product, "testing"));
  };

  return (
    <Card className="product">
      <CardTitle image={image} className="product-name">
        {productName}
      </CardTitle>
      <Button waves="light" onClick={handleClick} className="product-button">
        Add To Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
