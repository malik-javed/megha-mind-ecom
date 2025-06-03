import React from "react";
import "./SmallProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";
import toast from "react-hot-toast";

function SmallProductCard({ product }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Product added");
  };

  return (
    <div className="smallproduct-card">
      <div className="image-container">
        <img src={product.image} alt="" />
      </div>
      <div className="product-content">
        <h3>{product.name}</h3>
        <button className="add-btn" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default SmallProductCard;
