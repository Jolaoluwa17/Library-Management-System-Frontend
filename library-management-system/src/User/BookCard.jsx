import React from "react";
import "./browseLibrary.css";
import { useState } from "react";
import Popup1 from "../components/Popup1";
import { FaCartPlus } from "react-icons/fa";

export const BookCard = ({ item, handleClick, cartFull, setCartFull }) => {
  const { author, bookPic, category, description, publisher, status, title } = item;
  const [addNew, setAddNew] = useState(false);
  console.log(item);

  setTimeout(function () {
    setCartFull(false);
  }, 3000);

  return (
    <div className="book-card">
      <div className="browse-book-container">
        <div className="book-img">
          <img src={item.bookPic.fileUrl} alt="" />
          <span>
            {/* <Link
              to={`/userViewDetails?authour=${item.name}&category=${item.username}&status=${item.email}&quantity=${item.company}`}
            > */}
            <button onClick={() => setAddNew(true)}>View Details</button>
            {/* </Link> */}
          </span>
        </div>
        <div className="book-text">{item.title}</div>
        <Popup1 trigger={addNew} setTrigger={setAddNew}>
          <div className="user-view-first-section">
            <div className="view-details-container">
              <div className="view-details-container1">
                <div className="book-img-holder">
                  <img
                    src={item.bookPic.fileUrl}
                    alt=""
                  />
                </div>
                <div className="book-details">
                  <div className="book-title">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="author">
                    <h4>Author</h4>
                    {item.author}
                  </div>
                  <div className="category">
                    <h4>Category</h4>
                    {item.category.name}
                  </div>
                  <div className="description">
                    <h4>Description</h4> 
                    {item.description}
                  </div>
                  <div className="book-amount">
                    <h4>Publisher</h4>
                    {item.publisher}
                  </div>
                  <div className="book-amount">
                    <h4>Status</h4>
                    {item.status}
                  </div>
                  <button onClick={() => handleClick(item)}>
                    <span>
                      <FaCartPlus />
                    </span>
                    Add To Cart
                  </button>
                  {cartFull && (
                    <span style={{ color: "red", marginTop: "10px" }}>
                     The cart is currently full, remove an item to add new book
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Popup1>
      </div>
    </div>
  );
};
