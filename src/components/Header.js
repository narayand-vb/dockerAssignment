import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const cartNo = useSelector((state) => state.inCart);
  return (
    <>
      <nav className="navbar">
        <div className="menu ">
          <NavLink activeClassName="dashboard" exact to="/bots">
            Dashboard
          </NavLink>
          <NavLink activeClassName="cart" exact to="/cart">
            cart - {cartNo}
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
