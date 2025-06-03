import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";
import "./Home.css";

function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  console.log(wishlistItems);
  const dispatch = useDispatch();

  const handleRemoveWishlistItem = (id) => {
    console.log(id);
    dispatch(removeFromWishlist(id));
  };
  return (
    <div className="cart-container">
      <h2>WishList Items</h2>
      {wishlistItems.length == 0 ? (
        <p>your cart is empty</p>
      ) : (
        <div className="cart-gird">
          {wishlistItems.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} className="product-image" />
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
              <p className="desc">{item.description}</p>
              <button
                className="remove-btn"
                onClick={() => handleRemoveWishlistItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
