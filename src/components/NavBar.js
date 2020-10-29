import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoSaveMoreLogoHeader from "../assets/GoSaveMoreLogoHeader.png";
import SearchBar from "./SearchBar";
import { signout } from "../redux/actions/authActions";

const NavBar = ({ placeholder, handleChange }) => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSignout = () => {
    dispatch(signout());
    history.push("/");
  };

  return (
    <nav>
      <div className="navbar">
        <>
          <Link style={{ textAlign: "center" }} className="navLink home" to="/">
            <img
              className="navLink image"
              src={GoSaveMoreLogoHeader}
              style={{ padding: "10px" }}
            ></img>
          </Link>
        </>
        <ul id="nav" class="right  blue-text text-darken-2">
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
            <li>
              <Link className="navLink track" to="/tracking">
                Track Order
              </Link>
              <button className="signout" onClick={handleSignout}>
                Signout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link className="navLink register" to="/register">
                  Register New User
                </Link>
              </li>
              <li>
                <Link className="navLink login" to="/login">
                  Login Existing User
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

{
  /* <div class='nav-wrapper'>     ---- MOBILE VIEW FIX ATTEMP ---
          <a href='#' class='brand-logo'>
            GoSaveMore
          </a>
          <ul id='nav-mobile' class='right hide-on-med-and-down'>
            <li>
              <Link className='navLink home' to='/'>
                Home
              </Link>
            </li>

            <li>
              <Link className='navLink searchBar' to='/searchBar'>
                MAKE THIS A SEARCH BAR
              </Link>
            </li>
            <li>
              <Link className='navLink register' to='/register'>
                Register New User
              </Link>
            </li>
            <li>
              <Link className='navLink login' to='/login'>
                Login Existing User
              </Link>
            </li>
            <li>
              <Link className='navLink track' to='/tracking'>
                Track Order
              </Link>
            </li>
            <li>
              <Link className='navLink cart' to='/cart'>
                Cart
              </Link>
            </li>
            <li>
              <Link className='navLink addProduct' to='/admin/addProducts'>
                Admin Add Products
              </Link>
            </li>
          </ul>
        </div> */
}
