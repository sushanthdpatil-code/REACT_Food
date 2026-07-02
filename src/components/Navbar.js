import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../Context/CartContext";

function Navbar() {

  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (

    <nav className="navbar">

      <div className="logo">
        🍔 Foodie
      </div>

      <ul className="nav-menu">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/menu">Menu</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

      <Link
        className="cart-box"
        to="/cart"
      >
        🛒 Cart ({totalItems})
      </Link>

    </nav>

  );

}

export default Navbar;