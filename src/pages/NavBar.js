import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoSaveMoreLogoHeader from "../assets/GoSaveMoreLogoHeader.png";
import SearchBar from "../components/SearchBar";
import { logOut } from "../redux/actions/authActions";
import { getCart, resetQuantity } from "../redux/actions/cartActions";

import { Navbar, NavItem, Icon, Badge } from "react-materialize";
import { NavLink } from "react-router-dom";

const NavBar = ({ placeholder, handleChange }) => {
  const [user, setUser] = useState({
    user: [],
    isLoading: "",
    isAuth: "",
    isSuccess: "",
  });

  var cartData = useSelector((state) => state.cart);
  var cartCount = useSelector((state) => state.cart.totalItems);
  var userCount = cartData.items.length;
  // var cartCount2 = cartCount + userCount

  const state = useSelector((state) => state.auth);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOut = () => {
    dispatch(resetQuantity());
    userCount = 0;
    dispatch(logOut(history));
    // delete all local state for cart
    //   cartCount2 = cartCount + userCount
  };

  console.log("cartData", cartData);
  // console.log('cartCount2', cartCount2)

  useEffect(() => {
    setUser(state);
    // dispatch(getCart(auth.user.id));
  }, [state, user]);

  // useEffect(() => {
  //   dispatch(resetQuantity())
  // }, [handleLogOut])

  return (
    <Navbar
      className="nav-bar"
      alignLinks="right"
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      brand={
        <NavLink to="/">
          <img src={GoSaveMoreLogoHeader} id="logo" />
        </NavLink>
      }
      options={{
        draggable: true,
        edge: "left",
        preventScrolling: true,
      }}
    >
      <div className="nav-item">
        <div>
          <NavItem className="nav-item-search">
            <SearchBar placeholder={placeholder} handleChange={handleChange} />
          </NavItem>
        </div>
        {state.isAuth ? (
          <div className="nav-item-auth">
            <NavLink className="navLink cart" to="/cart">
              Cart <Badge className="nav-item-cart-num"> {userCount}</Badge>
            </NavLink>

            <NavLink className="navLink track" to="/tracking">
              Orders
            </NavLink>

            <NavLink className="signout" onClick={handleLogOut} to="#signout">
              Logout
            </NavLink>
          </div>
        ) : (
          <div className="nav-item-auth">
            <NavLink to="/cart">
              Cart <Badge className="nav-item-cart-num"> {userCount}</Badge>
            </NavLink>

            <NavLink className="login" to="/login">
              Login
            </NavLink>

            <NavLink className="register" to="/register">
              Register
            </NavLink>
          </div>
        )}
      </div>
    </Navbar>
  );
};

export default NavBar;
