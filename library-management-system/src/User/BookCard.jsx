import React from "react";
import "./browseLibrary.css";
import { useState } from "react";
import Popup1 from "../components/Popup1";
import { FaCartPlus } from "react-icons/fa";

export const BookCard = ({ item, handleClick }) => {
  const { name, image } = item;
  const [addNew, setAddNew] = useState(false);
  return (
    <div className="book-card">
      <div className="browse-book-container">
      
        <div className="book-img">
          <img src={image} alt="" />
          <span>
            {/* <Link
              to={`/userViewDetails?authour=${item.name}&category=${item.username}&status=${item.email}&quantity=${item.company}`}
            > */}
              <button onClick={() => setAddNew(true)}>View Details</button>
            {/* </Link> */}
          </span>
        </div>
        <div className="book-text">{name}</div>
        <Popup1 trigger={addNew} setTrigger={setAddNew}>
        <div className="user-view-first-section">
        <div className="view-details-container">
          <div className="view-details-container1">
            <div className="book-img-holder">
              <img
                src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673982941/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_2_p50lhi.jpg"
                alt=""
              />
            </div>
            <div className="book-details">
              <div className="book-title">
                <h2>The Great Gatsby</h2>
              </div>
              <div className="author">
                <h4>Author</h4>{item.name}
              </div>
              <div className="category">
                <h4>Category</h4>{item.name}
              </div>
              <div className="description">
                <h4>Description</h4> The Great Gatsby is a 1925 novel by
                American writer F. Scott Fitzgerald. Set in the Jazz Age on Long
                Island, near New York City, the novel depicts first-person
                narrator Nick Carraway's interactions with mysterious
                millionaire Jay Gatsby and Gatsby's obsession to reunite with
                his former lover, Daisy Buchanan
              </div>
              <div className="book-amount">
                <h4>Quantity</h4>{item.name}
              </div>
              <div className="book-amount">
                <h4>Status</h4>{item.name}
              </div>
              <button onClick={() => handleClick(item)}>
                <span>
                  <FaCartPlus />
                </span>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
        </ Popup1>
      </div>
    </div>
  );
};
