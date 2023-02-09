import React from "react";
import { IoSearch } from "react-icons/io5";
import { BiHelpCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import CategorySidebar from "../components/CategorySidebar";
import { MdOutlineCancel } from "react-icons/md";
// import { FaShoppingCart } from "react-icons/fa"
import { useState } from "react";
import { Link } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const [isCategorySidebar, setIsCategorySidebar] = useState("false");
  return (
    <div className="cart">
      <div className="library-header">
        <div className="library-header-title">
          <h2>Welcome to Babcock Library</h2>
          <h5>Olusanya Jolaoluwa/Babcock Library</h5>
        </div>
        <div className="library-search-bar">
          <div className="search-input">
            <div>
              <IoSearch className="library-search-icon" />
            </div>
            <input type="search" placeholder="Search by name and category" />
          </div>
          <button>Search</button>
        </div>
        <div className="help">
          <div className="help-icon">
            <BiHelpCircle />
          </div>
          <h4>Help</h4>
        </div>
        <div className="help">
          <div className="help-icon">
            <GiHamburgerMenu
              onClick={() => setIsCategorySidebar(false)}
              className={
                isCategorySidebar ? "hamburger-icon" : "hamburger-icon1"
              }
            />
            <MdOutlineCancel
              onClick={() => setIsCategorySidebar(true)}
              className={
                isCategorySidebar ? "linecancel-icon" : "linecancel-icon1"
              }
            />
          </div>
        </div>
        <div
          className={
            isCategorySidebar ? "category-side-bar" : "category-side-bar1"
          }
        >
          <CategorySidebar />
        </div>
      </div>
      <div className="cart-content-container">
        <div className="cart-img">
          {/* <FaShoppingCart /> */}
          <img src="https://res.cloudinary.com/dneawlwcp/image/upload/v1675916991/Final%20Year%20Project%20Pictures/icons8-shopping-cart-96_xoh61z.png" alt="cart_image" />
        </div>
        <div className="cart-header">
            <h4>Your cart is empty</h4>
            <h5>Browse our category and find the best books for you</h5>
        </div>
        <div className="library-btn">
           <Link to="/Library"> <button>GO TO LIBRARY</button></Link>
        </div>
      </div>
    </div>
  );
};
