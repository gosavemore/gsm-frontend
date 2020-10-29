import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductList = ({ filteredProduct }) => {
  // const { products } = useSelector((state) => state.products);

  return (
    <div>
      <h3 style={{ padding: "20px" }}>Recommended for You!</h3>
      {filteredProduct.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
export default ProductList;
