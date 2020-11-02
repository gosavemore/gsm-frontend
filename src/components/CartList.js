import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/actions/cartActions";
import CartCart from "./CartCard";
import "./CartList.scss";

const CartList = () => {
  const cartData = useSelector((state) => state.cart);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);
  const cartTotalItems = useSelector((state) => state.cart.totalItems);

  return (
    <div class="cart-list">
      <div className="cart-list-product">
        <h3>Your Shopping Cart</h3>
        {cartData.items.map((product) => {
          return (
            <CartCart
              key={product.id}
              product={product}
              cartTotalPrice={cartTotalPrice}
              cartTotalItems={cartTotalItems}
            />
          );
        })}
      </div>
      <div class="cart-total">
        <div class="card-content">
          <h3> Total Items</h3>
          <p>{cartTotalItems}</p>
          <h3> Total Price</h3>
          <p>${cartTotalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default CartList;

// FOR FUN
// MAKE CART VERY SECURE USING SHA256

// PLAN
// CREATE UNIQUE TOKEN FOR EACH CART ITEM WHEN ADDED TO CART
// STORE TOKEN ON BE UNDER THAT USER
// WHEN ACCESSING CART, CHECK TO SEE IF TOKEN IS AVAILABLE FOR EACH ITEM
// IF NO DISPLAY IT, IF NOT, DO NOT DISPLAY
