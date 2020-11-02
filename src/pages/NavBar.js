import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoSaveMoreLogoHeader from "../assets/GoSaveMoreLogoHeader.png";
import SearchBar from "../components/SearchBar";
import { logOut } from "../redux/actions/authActions";

import { Navbar, NavItem, Icon, Card } from "react-materialize";

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
    <Navbar
      alignLinks="right"
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      brand={
        <Link to="/">
          <img src={GoSaveMoreLogoHeader} id="logo" />
        </Link>
      }
      options={{
        draggable: true,
        edge: "left",
        preventScrolling: true,
      }}
    >
      <div className="nav-item">
        <NavItem>
          <SearchBar placeholder={placeholder} handleChange={handleChange} />
        </NavItem>
        {state.isAuth ? (
          <>
            <NavItem>
              <Link className="navLink cart" to="/cart">
                Cart
              </Link>
            </NavItem>
            <NavItem>
              <Link className="navLink track" to="/tracking">
                Orders
              </Link>
            </NavItem>
            <NavItem>
              <Link className="signout" onClick={handleLogOut} to="/tracking">
                Logout
              </Link>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem>
              <Link className="navLink cart" to="/cart">
                Cart
              </Link>
            </NavItem>
            <NavItem>
              <Link className="navLink login" to="/login">
                Login
              </Link>
            </NavItem>
          </>
        )}
      </div>
    </Navbar>
  );
};

export default NavBar;