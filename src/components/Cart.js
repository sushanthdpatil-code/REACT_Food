import React from "react";

function Cart({ cartCount, total }) {
  return (
    <div className="cart-summary">

      <div>

        <h2>🛒 Shopping Cart</h2>

        <p>Total Items</p>

        <h3>{cartCount}</h3>

      </div>

      <div>

        <p>Total Amount</p>

        <h2>₹{total}</h2>

      </div>

      <button className="checkout-btn">
        View Cart
      </button>

    </div>
  );
}

export default Cart;