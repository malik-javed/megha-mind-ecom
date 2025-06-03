import React from "react";
import "./ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/wishlist/wishlistSlice";
import toast from "react-hot-toast";

function ProductCard({ product }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Product added");
  };

  const handleRemoveItem = (id) => {
    // console.log("removed");
    // console.log(id);
    dispatch(removeFromCart(id));
    toast("Product remove");
  };

  // wishlist functions
  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      toast("Removed from wishlist");
    } else {
      dispatch(addToWishlist(product));
      toast.success("Added to wishlist");
    }
  };

  return (
    <div className="card">
      <img className="product-image" src={product.image} />
      <h3>{product.name}</h3>
      <p className="price"> {product.price} </p>
      <p className="desc">{product.description}</p>
      <button className="add-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
      {cartItems.some((item) => item.id === product.id) ? (
        <button
          className="remove-btn"
          onClick={() => handleRemoveItem(product.id)}
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
