import React from "react";
import "./Home.css";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import toast from "react-hot-toast";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Product remove");
  };

  console.log(cartItems);
  return (
    <div className="cart-container">
      <h2>Your Cart Orders</h2>
      {cartItems.length == 0 ? (
        <p>your cart is empty</p>
      ) : (
        <div className="cart-grid">
          {cartItems.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} className="product-image" />
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
              <p className="desc">{item.description}</p>
              <button
                className="remove-btn"
                onClick={() => handleRemoveItem(item.id)}
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

export default Cart;
