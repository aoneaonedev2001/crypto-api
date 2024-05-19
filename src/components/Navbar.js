import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaCoins } from "react-icons/fa";
const Navbar = () => {
  return (
    <Link to="/">
      <div className="navbar">
        <h1>Coin Search</h1>
        <FaCoins className="icon" />
      </div>
    </Link>
  );
};

export default Navbar;
