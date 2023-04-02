import React from "react";
import "./seeDetails.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import config from "../config";
import axios from "axios";
import { useState, useEffect } from "react";

export const SeeAppliedBooksDetails = () => {
  const navigate = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const requestId = urlParams.get("requestId");

  // to get pending data
  const [pendingBookData, setPendingBookData] = useState([]);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/request`);
      const filteredData = res.data.filter((item) => item.status === "pending");
      setPendingBookData(filteredData);
    };
    fetchbookData();
  }, []);

  // to approve a request
  const handleApprove = async () => {
    try {
      axios.put(`${config.baseURL}/request/${requestId}/approve`, {});
      window.location.reload();
    } catch (err) {
      console.err(err);
    }
  };

  // to approve a request
  const handleDecline = async () => {
    try {
      axios.put(`${config.baseURL}/request/${requestId}/decline`, {});
      window.location.reload();
    } catch (err) {
      console.err(err);
    }
  };

  return (
    <div className="see-details">
      <div className="see-details-header">
        <h2>Welcome to Transactions</h2>
        <h5>Admin/Transaction</h5>
      </div>
      <div className="see-details-container">
        <div className="details-panel-header">
          <div className="previous-btn" onClick={() => navigate(-1)}>
            <IoArrowBackOutline />
          </div>
          <h3>Details Panel</h3>
        </div>
        <div className="details-content-main">
          {pendingBookData
            .filter((item) => {
              return item._id.includes(requestId);
            })
            .map((item) => (
              <div className="details-panel-content" key={item._id}>
                <div className="loanee-pic">
                  <img src={item.user.profilePic.fileUrl} alt="" />
                </div>
                <div className="details-text">
                  <div className="details-panel-info">
                    <div className="details-personal-info">
                      <div className="details-personal-info-header">
                        <h4>Personal Information</h4>
                      </div>
                      <div className="loanee-per">
                        <b>Name: </b>
                        {item.user.username}
                      </div>
                      <div className="loanee-per">
                        <b>Phone No: </b>
                        {item.user.phoneNo}
                      </div>
                      <div className="loanee-per per-book-status">
                        <b>Status: </b>
                        {item.status}
                      </div>
                      <div className="loanee-per">
                        {" "}
                        <b>Loaned Date:</b>{" "}
                        {new Date(item.loanDate).toLocaleDateString()}
                      </div>
                      <div className="loanee-per">
                        {" "}
                        <b>Return Date:</b>{" "}
                        {new Date(item.returnDate).toLocaleDateString()}
                      </div>
                      <div className="loanee-per">
                        {" "}
                        <b>User Level:</b> {item.user.userType}
                      </div>
                    </div>
                  </div>

                  <div className="details-book-info">
                    <div className="details-book-info-header">
                      <h4>Book Information</h4>
                    </div>
                    <div className="loanee-det">
                      <b>Qty: </b>
                      {item.books.length}
                    </div>
                    <b>List Of Books</b>
                    <div className="loanee-det list-of-books">
                      <ul>
                        {item.books.map((book) => (
                          <li key={book._id}>{book.title}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="details-btn">
          <div className="details-approve-btn">
            <button onClick={handleApprove}>Approve</button>
          </div>
          <div className="details-decline-btn">
            <button onClick={handleDecline}>Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
};
