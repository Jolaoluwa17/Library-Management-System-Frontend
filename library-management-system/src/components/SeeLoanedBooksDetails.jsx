import React from "react";
import "./seeDetails.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import BookId from "./BookId";
import SkeletonTransactionDetailsLoader from "./SkeletonTransactionDetailsLoader";

export const SeeLoanedBooksDetails = ({ item }) => {
  const navigate = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const requestId = urlParams.get("requestId");

  // to get approved data
  const [approveBookData, setApproveBookData] = useState([]);
  const [loanedDataLoading, setLoanedDataLoading] = useState(true);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/loan`);
      const filteredData = res.data.filter(
        (item) => item.status === "approved" || item._id === requestId
      );
      setApproveBookData(filteredData);
      setLoanedDataLoading(false);
    };
    fetchbookData();
  }, []);


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
          {" "}
          {loanedDataLoading ? (
            <SkeletonTransactionDetailsLoader />
          ) : (
            approveBookData
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
                          <b>Loaned Date: </b>
                          {new Date(item.loanDate).toLocaleDateString()}
                        </div>
                        <div className="loanee-per">
                          <b>Return Date: </b>
                          {new Date(item.returnDate).toLocaleDateString()}
                        </div>
                        <div className="loanee-per">
                          <b>User Level: </b>
                          {item.user.userType}
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
                          <BookId item={item} />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};
