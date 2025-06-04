// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";
import { Toaster } from "react-hot-toast";

// const Home = () => <h2>Home Page</h2>;
// const Contact = () => <h2>Contact Page</h2>;
// const About = () => <h2>About Page</h2>;
// const Signup = () => <h2>Sign Up Page</h2>;
// const Wishlist = () => <h2>Wishlist Page</h2>;
// const Cart = () => <h2>Cart Page</h2>;

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
