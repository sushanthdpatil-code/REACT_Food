import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useContext(CartContext);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const delivery = subtotal > 0 ? 50 : 0;
  const gst = subtotal * 0.05;
  const grandTotal = subtotal + delivery + gst;

  return (
    <div className="cart-page">

      <h1 className="cart-title">🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty 😔</h2>
          <Link to="/" className="shop-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
                className="cart-image"
              />

              <div className="cart-info">
                <h2>{item.name}</h2>
                <p>₹ {item.price}</p>
              </div>

              <div className="qty-box">

                <button
                  onClick={() => decreaseQty(item.name)}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQty(item.name)}
                >
                  +
                </button>

              </div>

              <h3>
                ₹ {item.price * item.quantity}
              </h3>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.name)}
              >
                Remove
              </button>

            </div>
          ))}

          <div className="bill-box">

            <h2>Bill Summary</h2>

            <div className="bill-row">
              <span>Subtotal</span>
              <span>₹ {subtotal}</span>
            </div>

            <div className="bill-row">
              <span>Delivery</span>
              <span>₹ {delivery}</span>
            </div>

            <div className="bill-row">
              <span>GST (5%)</span>
              <span>₹ {gst.toFixed(2)}</span>
            </div>

            <hr />

            <div className="bill-row total">
              <span>Grand Total</span>
              <span>₹ {grandTotal.toFixed(2)}</span>
            </div>

            <Link
              to="/checkout"
              className="checkout-btn"
            >
              Proceed To Checkout
            </Link>

          </div>

        </>
      )}
    </div>
  );
}

export default CartPage;