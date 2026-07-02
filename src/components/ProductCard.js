import React from "react";

function ProductCard({ product, add, remove }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <div className="card-body">
        <span className="badge">⭐ Best Seller</span>

        <h3>{product.name}</h3>

        <h2>₹{product.price}</h2>

        <p>Freshly prepared with premium ingredients.</p>

        <div className="buttons">
          <button
            className="add-btn"
            onClick={() => add(product)}
          >
            Add to Cart
          </button>

          <button
            className="remove-btn"
            onClick={remove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;