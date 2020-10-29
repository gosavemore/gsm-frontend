import React from "react";
import ProductList from "./ProductList";

const Homepage = ({ filteredProduct }) => {
  return (
    <div className="homepage">
      <div class="row">
        <h1 class="center-align">Go Save More!</h1>
        <ProductList filteredProduct={filteredProduct} />
      </div>
    </div>
  );
};

export default Homepage;
