import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "../Navbar";

import Home from "../../pages/Home";
import Menu from "../../pages/Menu";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import CartPage from "../../pages/CartPage";
import Checkout from "../../pages/Checkout";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;