// import React, { useEffect, useState } from "react";
import "./cart.css";
import UserHeader from "../components/UserHeader";
// import CartCard from "../components/CartCard";
import { Link } from "react-router-dom";

export const Cart = ({ user, cart, setCart }) => {
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };
  console.log(cart);

  return (
    <div className="cart">
      <UserHeader user={user} />

      <div className="cart-main-container">
        <div className="cart-content-container"> 
          {cart.length === 0 && <div className="cart-content-container1">
            <div className="cart-img">
              <img
                src="https://res.cloudinary.com/dneawlwcp/image/upload/v1675916988/Final%20Year%20Project%20Pictures/icons8-shopping-cart-96_nuwk9v.png"
                alt="cart_image"
              />
            </div>
            <div className="cart-header">
              <h4>Your cart is empty</h4>
              <h5>Browse our category and find the best books for you</h5>
            </div>
            <div className="library-btn">
              <Link to="/browseLibrary">
                <button>GO TO LIBRARY</button>
              </Link>
            </div>
          </div>}
            <article>
              {cart.map((item) => (
                <div className="cart-card">
                  <div className="cart-card-container">
                    <div className="cart-book-details-main">
                      <div className="cart-book-img">
                        <img
                          src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983055/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_3_ywju0f.jpg"
                          alt=""
                        />
                      </div>
                      <div className="cart-book-details">
                        <div className="cart-details-main1">
                          <b>Name of Book: </b>
                          {item.name}
                        </div>
                        <div className="cart-details-main1">
                          <b>Name of Authour: </b>Olusanya Jolaoluwa Oluwapelumi
                        </div>
                        <div className="cart-details-main1">
                          <b>Status: </b>On-Shelf
                        </div>
                        <div className="cart-details-main1">
                          <b>No. of Book: </b>5
                        </div>
                      </div>
                    </div>
                    <div className="cart-remove-btn">
                      <button onClick={() => handleRemove(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </article>
        </div>
      </div>
      <div className="checkout-btn">
        <button>Check Out</button>
      </div>
      {/* {cart.map((item) => 
      <div><input type="text" value={item.name} /></div>)} */}
    </div>
  );
};
