import React from "react";
import "./browseLibrary.css";
import { useState } from "react";
import Popup1 from "../components/Popup1";
import { FaCartPlus } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import config from "../config";

export const BookCard = ({
  item,
  handleClick,
  cartFull,
  setCartFull,
  user,
}) => {
  const {
    author,
    bookPic,
    category,
    description,
    publisher,
    title,
    copies,
    inventoryCopies,
  } = item;
  const [addNew, setAddNew] = useState(false);

  // to get pending data
  const [pendingBookData, setPendingBookData] = useState([]);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/loan`);
      const filteredData = res.data.filter(
        (item) =>
          item.status === "pending" ||
          item.status === "approved" ||
          user._id === item.user._id
      );
      const bookCount = filteredData.length;
      setPendingBookData(bookCount);
    };
    fetchbookData();
  }, []);

  //get the logged in user
  const [userData, setUserData] = useState("");
  useEffect(() => {
    const getUserDetails = async () => {
      const res = await axios.get(`${config.baseURL}/user/${user._id}`);
      setUserData(res.data);
    };
    getUserDetails();
  }, [user._id]);
  console.log(userData);

  const disabled =
    userData.profilePic &&
    userData.dob &&
    userData.address &&
    userData.sex &&
    userData.phoneNo
      ? false
      : true;

  return (
    <div className="book-card">
      <div className="browse-book-container">
        <div className="book-img">
          <img src={item.bookPic.fileUrl} alt="" />
          <span>
            {/* <Link
              to={`/userViewDetails?authour=${item.name}&category=${item.username}&status=${item.email}&quantity=${item.company}`}
            > */}
            <button onClick={() => setAddNew(true)} disabled={disabled}>
              View Details
            </button>
            {/* </Link> */}
          </span>
        </div>
        <div className="book-text">{item.title}</div>
        <Popup1 trigger={addNew} setTrigger={setAddNew}>
          <div className="user-view-first-section">
            <div className="view-details-container">
              <div className="view-details-container1">
                <div className="book-img-holder">
                  <img src={item.bookPic.fileUrl} alt="" />
                </div>
                <div className="book-details">
                  <div className="book-title">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="book-details-main">
                    <div className="author details-item">
                      <h4>Author</h4>
                      {item.author}
                    </div>
                    <div className="category details-item">
                      <h4>Category</h4>
                      {item.category.name}
                    </div>
                    <div className="description details-item">
                      <h4>Publisher</h4>
                      {item.publisher}
                    </div>
                    <div className="description details-item">
                      <h4>Status</h4>
                      {item.availableCopies === 0 ? "off-shelf" : "on-shelf"}
                    </div>
                    <div className="description details-item">
                      <h4>Inventory Copies</h4>
                      {item.totalCopies}
                    </div>
                    <div className="description details-item">
                      <h4>Availble Copies</h4>
                      {item.availableCopies}
                    </div>
                    <div className="description">
                      <h4>Description</h4>
                      <p
                        style={{
                          width: "400px",
                          height: "95px",
                          overflowY: "scroll",
                          padding: "2px",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleClick(item)}
                    disabled={item === 0 ? true : false}
                  >
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
                  {item === 0
                    ? true
                    : false && (
                        <span style={{ color: "red", marginTop: "10px" }}>
                          You cannot make a new request without returning all
                          the books <br /> in the previous request.
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
