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
      <div className="productInfo">{item.productName}</div>
      <div className="productInfo">{item.price}</div>
      <div className="productInfo">{item.brand}</div>
      <div className="productInfo">{item.ratings}</div>
    </>
  );
};

export default ProductInfo;
