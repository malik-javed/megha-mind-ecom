import React from "react";
import "./NavBar.css";

import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="company-name">
          Exclusive
        </Link>
      </div>

      <div className="navbar-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          About
        </NavLink>
      </div>

      <div className="navbar-right">
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
        />
        <Link to="/wishlist" className="icon-link">
          <FaHeart />
        </Link>
        <Link to="/cart" className="icon-link">
          <FaShoppingCart />
          {cartItems.length > 0 && (
            <span className="total-items badge"> {cartItems.length} </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
