import React from "react";
import { Link } from "react-router-dom";
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
        <Link to={`/product/${product.id}`}>
          <h3>{product.productName}</h3>
        </Link>
      </CardTitle>
      <p>${price}</p>
      <div>
        <Link to="/product" productName={productName}>
          <button
            style={{ marginBottom: "20px" }}
            className="btn waves-effect waves-light"
          >
            Info
          </button>
        </Link>
      </div>
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
