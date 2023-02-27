import React from "react";
import "./userViewDetails.css";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import CategorySlider from "../components/CategorySlider";

export const UserViewDetails = () => {
  return (
    <div className="user-view-details">
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
                <h4>Author</h4> F. Scott Fitzgerald
              </div>
              <div className="category">
                <h4>Category</h4> Tragedy
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
                <h4>Quantity</h4>15
              </div>
              <div className="book-amount">
                <h4>Status</h4>On-shelf
              </div>
              <button>
                <span>
                  <FaCartPlus />
                </span>
                Add To Cart
              </button>
            </div>
          </div>
          <div className="previous-page">
            <Link style={{ color: "#28B498" }} to="/BrowseLibrary">
              Back to previous page
            </Link>
          </div>
        </div>
        <div className="details-pane">

        </div>
      </div>
      <div className="user-view-second-section">
        <div className="common-book-slider">
            <CategorySlider />
        </div>
      </div>
    </div>
  );
};
