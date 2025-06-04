import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice";
import toast from "react-hot-toast";
import products from "../data/products";
import "./ProductDetails.css";

const toastConfig = {
  duration: 2000,
  position: "top-center",
  id: "product-action",
};

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  // Find the product from our data
  const product = products.find((p) => p.id === parseInt(id));
  const isInWishlist = wishlistItems.some((item) => item.id === product?.id);

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Product added to cart", toastConfig);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      toast("Removed from wishlist", toastConfig);
    } else {
      dispatch(addToWishlist(product));
      toast.success("Added to wishlist", toastConfig);
    }
  };

  return (
    <div className="product-details-container">
      <div className="product-details-card">
        <div className="product-image-section">
          <img
            src={product.image}
            alt={product.name}
            className="product-detail-image"
          />
        </div>
        <div className="product-info-section">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-category">{product.category}</p>
          <p className="product-price">₹{product.price}</p>
          <p className="product-description">{product.description}</p>

          <div className="action-buttons">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button
              className={`wishlist-btn-rect ${
                isInWishlist ? "in-wishlist" : ""
              }`}
              onClick={handleWishlistToggle}
            >
              {isInWishlist ? "💖 In Wishlist" : "🤍 Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
