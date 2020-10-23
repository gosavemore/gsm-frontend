import React from "react";

const ProductCard = (props) => {
  const {
    productName,
    price,
    shortDescription,
    description,
    stock,
  } = props.product;
  return (
    <div>
      <h3>{productName} </h3>
      <p>{price} </p>
      <p>{shortDescription} </p>
      <p>{description} </p>
      <p>{stock} </p>
    </div>
  );
};

export default ProductCard;
