import React from "react";
import pizza from "./images/pizza.jpg";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="tag">
          Delicious food, delivered fast
        </span>

        <h1>
          Discover & Enjoy
          <br />
          Amazing <span>Food</span>
        </h1>

        <p>
          Choose your favourite dishes from our menu
          and enjoy delicious meals at your doorstep.
        </p>

        <button className="hero-btn">
          Order Now
        </button>

      </div>

      <div className="hero-right">
        <img src={pizza} alt="Pizza" />
      </div>

    </section>
  );
}

export default Hero;