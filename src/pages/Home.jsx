import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";
import "./Home.css";

function Home() {
  return (
    <div>
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
