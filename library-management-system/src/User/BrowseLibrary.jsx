import React from "react";
import "./browseLibrary.css";
import { IoSearch } from "react-icons/io5";
import { BiHelpCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export const BrowseLibrary = () => {
  return (
    <div className="browse-library">
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
      </div>
      <div className="browse-library-content">
        <div className="browse-book-container">
          <div className="book-img">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983055/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_3_ywju0f.jpg"
              alt=""
            />
            <span>
            <Link to="/userViewDetails"><button>View Details</button></Link>
            </span>
          </div>
          
          <div className="book-text">The Great Gabsty</div>
        </div>
        <div className="browse-book-container">
          <div className="book-img">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983055/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_3_ywju0f.jpg"
              alt=""
            />
            <span>
              <Link to="/userViewDetails"><button>View Details</button></Link>
            </span>
          </div>
          <div className="book-text">The Great Gabsty</div>
        </div>
        <div className="browse-book-container">
          <div className="book-img">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983055/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_3_ywju0f.jpg"
              alt=""
            />
            <span>
              <button>View Details</button>
            </span>
          </div>
          <div className="book-text">The Great Gabsty</div>
        </div>
        <div className="browse-book-container">
          <div className="book-img">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983055/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_3_ywju0f.jpg"
              alt=""
            />
            <span>
              <button>View Details</button>
            </span>
          </div>
          <div className="book-text">The Great Gabsty</div>
        </div>
        <div className="browse-book-container">
          <div className="book-img">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983055/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_3_ywju0f.jpg"
              alt=""
            />
            <span>
              <button>View Details</button>
            </span>
          </div>
          <div className="book-text">The Great Gabsty</div>
        </div>
        <div className="browse-book-container">
          <div className="book-img">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983055/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_3_ywju0f.jpg"
              alt=""
            />
            <span>
              <button>View Details</button>
            </span>
          </div>
          <div className="book-text">The Great Gabsty</div>
        </div>
        <div className="browse-book-container">
          <div className="book-img">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983055/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_3_ywju0f.jpg"
              alt=""
            />
            <span>
              <button>View Details</button>
            </span>
          </div>
          <div className="book-text">The Great Gabsty</div>
        </div>
        <div className="browse-book-container">
          <div className="book-img">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983055/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_3_ywju0f.jpg"
              alt=""
            />
            <span>
              <button>View Details</button>
            </span>
          </div>
          <div className="book-text">The Great Gabsty</div>
        </div>
      </div>
    </div>
  );
};
export default BrowseLibrary;
