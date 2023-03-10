import React from "react";
import "./browseLibrary.css";
import { Link } from "react-router-dom";

export const BookCard = ({ item }) => {
  const { name, image } = item;
  return (
    <div className="book-card">
      <div className="browse-book-container">
        <div className="book-img">
          <img src={image} alt="" />
          <span>
            <Link
              to={`/userViewDetails?authour=${item.name}&category=${item.username}&status=${item.email}&quantity=${item.company}`}
            >
              <button>View Details</button>
            </Link>
          </span>
        </div>

        <div className="book-text">{name}</div>
      </div>
    </div>
  );
};
