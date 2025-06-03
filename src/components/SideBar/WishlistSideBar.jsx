import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import wishlistSlice from '../../features/wishlist/wishlistSlice'
import { removeFromWishlist } from "../../features/wishlist/wishlistSlice";
import ProductCard from "../ProductCard/ProductCard";
import "./WishlistSideBar.css";
import SmallProductCard from "../ProductCard/SmallProductCard";

function WishlistSideBar({ isOpen, onClose }) {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h3>Wishlist Items</h3>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
      <div className="sidebar-content">
        {wishlistItems.length === 0 ? (
          <p>wishlist is empty</p>
        ) : (
          wishlistItems.map((item) => (
            // <div key={item.id} className="sidebar-card">
            //   <img src={item.image} alt={item.name} />
            //   <div>
            //     <h4>{item.name}</h4>
            //     <p>{item.price}</p>
            //     <button
            //       onClick={() => dispatch(removeFromWishlist(item.id))}
            //       className="remove-btn"
            //     >
            //       Remove
            //     </button>
            //   </div>
            // </div>
            // <ProductCard product={item} key={item.id} />
            <SmallProductCard product={item} key={item.id} />
          ))
        )}
      </div>
    </div>
  );
}

export default WishlistSideBar;
