import React from "react";
import "./cart.css";
import UserHeader from "../components/UserHeader";
import CartCard from "../components/CartCard";

export const Cart = ({ user }) => {
  
  return (
    <div className="cart">
      <UserHeader user = {user} />
      <div className="cart-main-container">
      <div className="cart-content-container">
        <CartCard />
        {/* <div className="cart-img">
          <img src="https://res.cloudinary.com/dneawlwcp/image/upload/v1675916991/Final%20Year%20Project%20Pictures/icons8-shopping-cart-96_xoh61z.png" alt="cart_image" />
        </div>
        <div className="cart-header">
            <h4>Your cart is empty</h4>
            <h5>Browse our category and find the best books for you</h5>
        </div>
        <div className="library-btn">
           <Link to="/Library"> <button>GO TO LIBRARY</button></Link>
        </div> */}
      </div>
    </div>
    <div className="checkout-btn">
            <button>Check Out</button>
        </div>
    </div>
  );
};
