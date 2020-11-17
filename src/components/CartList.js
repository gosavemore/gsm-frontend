import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import { Button } from "react-materialize";
import "./CartList.scss";

const CartList = () => {
  const { isLoading, items } = useSelector((state) => state.cart);

  const [products, setProducts] = useState({
    totalItems: 0,
    totalPrice: 0,
  });

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  useEffect(() => {
    if (!isLoading) {
      setProducts({
        totalPrice: addDecimals(
          items.reduce((acc, item) => acc + item.price * item.quantity, 0)
        ),
      });
    }
  }, []);

  return (
    <div className="cart-page">
      <div className="cart-ring-up">
        <h3> Total Items</h3>
        <p>{products.totalItems}</p>
        <h3> Total Price</h3>
        <p>${products.totalPrice}</p>
        <Link to={"/checkout"}>
          <Button>Checkout</Button>
        </Link>
      </div>
      <div className="cart-list">
        <div className="cart-list-product">
          <h3>Your Shopping Cart</h3>
          {items.map((product) => {
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
