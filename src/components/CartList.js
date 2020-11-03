import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import "./CartList.scss";

const CartList = () => {
  const cartData = useSelector((state) => state.cart);

  const [products, setProducts] = useState({
    totalItems: 0,
    totalPrice: 0,
  });

  useEffect(() => {
    setProducts({
      totalItems: cartData.totalItems,
      totalPrice: cartData.totalPrice,
    });
  }, [cartData]);

  return (
    <div className="cart-list">
      <div className="cart-list-product">
        <h3>Your Shopping Cart</h3>
        {cartData.items.map((product) => {
          if (product.quantity !== 0) {
            return (
              <CartCard
                key={product.id}
                product={product}
                setProducts={setProducts}
                totalItems={products.totalItems}
                totalPrice={products.totalPrice}
              />
            );
          }
        })}
      </div>
      <div className="cart-total">
        <div className="card-total-info">
          <h3> Total Items</h3>
          <p>{products.totalItems}</p>
          <h3> Total Price</h3>
          <p>${products.totalPrice}</p>
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
