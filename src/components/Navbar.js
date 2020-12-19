import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/cart">Cart </Link>
      <Link to="/checkout">Checkout </Link>
      <Link to="/menu">Menu </Link>
    </div>
  );
}

export default Navbar;
