import React, { useContext } from "react";

import "./Product.css";

import img1 from "../images/pizza.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";

import Hero from "../Hero";
import Categories from "../Categories";
import ProductCard from "../ProductCard";
import Footer from "../Footer";

import { CartContext } from "../../Context/CartContext";

const products = [
  {
    id: 1,
    image: img1,
    name: "Pizza",
    price: 500,
  },
  {
    id: 2,
    image: img2,
    name: "Manchurian",
    price: 200,
  },
  {
    id: 3,
    image: img3,
    name: "Paneer Chilli",
    price: 400,
  },
  {
    id: 4,
    image: img4,
    name: "Noodles",
    price: 300,
  },
  {
    id: 5,
    image: img5,
    name: "Vada Pav",
    price: 100,
  },
  {
    id: 6,
    image: img6,
    name: "Grill Paneer Chilli",
    price: 600,
  },
];

function Product() {

  const {
    addToCart,
    removeFromCart,
  } = useContext(CartContext);

  return (

    <div className="wrapper">

      <Hero />

      <Categories />

      <div className="products">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            add={addToCart}
            remove={() => removeFromCart(product.name)}
          />

        ))}

      </div>

      <Footer />

    </div>

  );

}

export default Product;