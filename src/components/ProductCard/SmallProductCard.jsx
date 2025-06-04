import React from "react";
import "./SmallProductCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import toast from "react-hot-toast";

function SmallProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Product added to cart");
  };

  return (
    <div className="smallproduct-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-content">
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="price-small">{product.price}</p>
        </div>
        <button className="add-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SmallProductCard;
