import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import "./Home.css";

function Home() {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  // console.log(searchTerm);
  const filterProducts = searchTerm
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  // console.log(filterProducts);
  return (
    <div>
      <div className="home-header">
        <h2>Our Products</h2>
      </div>
      <div className="products-grid">
        {filterProducts.length > 0 ? (
          filterProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <p className="no-products">No matching products found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
