import React from "react";
import "./ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/wishlist/wishlistSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const toastConfig = {
  duration: 2000,
  position: "top-center",
  id: "product-action",
};

function ProductCard({ product }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    toast.success("Product added to cart", toastConfig);
  };

  const handleRemoveItem = (e, id) => {
    e.stopPropagation();
    dispatch(removeFromCart(id));
    toast("Product removed from cart", toastConfig);
  };

  // wishlist functions
  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      toast("Removed from wishlist", toastConfig);
    } else {
      dispatch(addToWishlist(product));
      toast.success("Added to wishlist", toastConfig);
    }
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img className="product-image" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price"> {product.price} </p>
      <p className="desc">{product.description}</p>
      <button className="add-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
      {cartItems.some((item) => item.id === product.id) ? (
        <button
          className="remove-btn"
          onClick={(e) => handleRemoveItem(e, product.id)}
        >
          Remove Item
        </button>
      ) : null}

      {/* wishlist button here . */}
      <button
        className={`wishlist-btn ${isInWishlist ? "in-wishlist" : ""}`}
        onClick={handleWishlistToggle}
      >
        {isInWishlist ? "💖" : "🤍"}
      </button>
    </div>
  );
}

export default ProductCard;
