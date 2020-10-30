import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.item);
  let product = props.product;

  const {
    productName,
    price,
    shortDescription,
    description,
    stock,
  } = props.product;

  const handleClick = () => {
    if (product.id === cart.product_id) {
      console.log("this is true", product.id);
    } else {
      console.log("this is false", product.id);
    }
    dispatch(addToCart(product));
  };

  return (
    // <div class='row'>
    <div class="col s12 m3">
      <div class="card">
        <div class="card-content">
          <h3>{productName} </h3>
          <p>{price} </p>
          <p>{shortDescription} </p>
          <p>{description} </p>
          <p>{stock} </p>
          <button
            class="btn waves-effect waves-light"
            type="submit"
            onClick={handleClick}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ProductCard;
