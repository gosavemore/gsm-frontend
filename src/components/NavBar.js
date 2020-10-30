import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoSaveMoreLogoHeader from "../assets/GoSaveMoreLogoHeader.png";
import SearchBar from "./SearchBar";
import { logOut } from "../redux/actions/authActions";

const NavBar = ({ placeholder, handleChange }) => {
  const [user, setUser] = useState({
    user: [],
    isLoading: "",
    isAuth: "",
    isSuccess: "",
  });

  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOut = () => {
    dispatch(logOut(history));
  };

  useEffect(() => {
    setUser(state);
  }, [state, user]);

  return (
     <div>
    <nav>
      <div className="navbar">
      <div class="nav-wrapper">
        {/* <ul class="right hide-on-med-and-down"> */}
        <>
          <Link style={{ textAlign: "center" }} className="navLink home" to="/">
            <img
              className="navLink image"
              src={GoSaveMoreLogoHeader}
              style={{ padding: "10px" }}
            ></img>
          </Link>
        </>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul id="nav" class="right hide-on-med-and-down">
          <li>
            <SearchBar placeholder={placeholder} handleChange={handleChange} />
          </li>
          <li>
            <Link className="navLink cart" to="/cart">
              Cart
            </Link>
          </li>
          {state.isAdmin ? (
            <>
              <li>
                <Link className="navLink addProduct" to="/admin/addProducts">
                  Admin Add Products
                </Link>
              </li>
            </>
          ) : null}
          {state.isAuth ? (
            <>
              <li>
                <Link className="navLink track" to="/tracking">
                  Orders
                </Link>
              </li>
              <li>
                <Link className="signout" onClick={handleLogOut} to="/tracking">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="navLink login" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
        </div>
      </div>
    </nav>

    

  <ul class="sidenav sidenav-fixed" id="hamburger">
      <div className="navbar">
      <div class="nav-wrapper">
        {/* <ul class="right hide-on-med-and-down"> */}
        <>
          <Link style={{ textAlign: "center" }} className="navLink home" to="/">
            <img
              className="navLink image"
              src={GoSaveMoreLogoHeader}
              style={{ padding: "10px" }}
            ></img>
          </Link>
        </>
        <ul id="nav" class="sidenav sidenav-fixed">
          <li>
            <SearchBar placeholder={placeholder} handleChange={handleChange} />
          </li>
          <li>
            <Link className="navLink cart" to="/cart">
              Cart
            </Link>
          </li>
          {state.isAdmin ? (
            <>
              <li>
                <Link className="navLink addProduct" to="/admin/addProducts">
                  Admin Add Products
                </Link>
              </li>
            </>
          ) : null}
          {state.isAuth ? (
            <>
              <li>
                <Link className="navLink track" to="/tracking">
                  Orders
                </Link>
              </li>
              <li>
                <Link className="signout" onClick={handleLogOut} to="/tracking">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="navLink login" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
        </div>
      </div>
  </ul>
          </div>
  );
};

export default NavBar;
