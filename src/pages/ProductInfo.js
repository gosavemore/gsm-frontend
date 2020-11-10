import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../redux/actions/productsActions";

const ProductInfo = (props) => {
  let id = props.match.params.id;

  const dispatch = useDispatch();
  const item = useSelector((state) => state.products.item);

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  return (
    <>
      <div className="ProductInfo">
        <h3>{item.productName}</h3>
        <h4>${item.price}</h4>
        <p>{item.shortDescription}</p>
        <p>Description: {item.description}</p>
        <p>Stock: {item.stock}</p>
        <p>Ratings: {item.ratings}</p>
      </div>
    </>
  );
};

export default ProductInfo;
