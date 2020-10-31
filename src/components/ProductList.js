import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.scss";

const ProductList = ({ filteredProduct }) => {
  return (
    <div>
      <h3 style={{ padding: "20px" }}>Recommended for You!</h3>
      <div className="product-list">
        {filteredProduct.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
export default ProductList;
