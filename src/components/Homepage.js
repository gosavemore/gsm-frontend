import React from "react";
import ProductList from "./ProductList";
import undrawGiftBox from "../assets/undraw_Gift_box.svg";

const Homepage = ({ filteredProduct }) => {
  return (
    <div className="homepage">
      <div class="row">
        <h1 class="center-align">Go Save More!</h1>
        <ProductList filteredProduct={filteredProduct} />
        <img src={undrawGiftBox}></img>
      </div>
    </div>
  );
};

export default Homepage;
