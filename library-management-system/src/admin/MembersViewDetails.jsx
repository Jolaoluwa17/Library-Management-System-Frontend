import React from "react";
import "./membersViewDetails.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export const MembersViewDetails = () => {
  const navigate = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userId = urlParams.get("userId");

  const [pendingData, setPendingData] = useState([]);
  useEffect(() => {
    const fetchPendingData = async () => {
      const res = await axios.get(`${config.baseURL}/user`);
      const filteredData = res.data.filter((item) => item._id === userId);
      setPendingData(filteredData);
    };
    fetchPendingData();
  }, []);

  return (
    <div className="members-view-details">
      <div className="members-details-header">
        <h2>Welcome to Transactions</h2>
        <h5>Admin/Transaction</h5>
      </div>
      <div className="members-view-container">
        <div className="members-view-header">
          <div className="previous-btn" onClick={() => navigate(-1)}>
            <IoArrowBackOutline />
          </div>
          <h3>Details Panel</h3>
        </div>
        <div className="personal-information-header">
          <h3>Personal Information</h3>
        </div>
        {pendingData.map((item) => (
          <div className="members-panel-content" key={item._id}>
            <div className="members-item">
              <b>Id</b>
              <br />
              {item._id}
            </div>
            <div className="members-item">
              <b>Full Name</b>
              <br />
              {item.username}
            </div>
            <div className="members-item">
              <b>Email</b>
              <br />
              {item.email}
            </div>
            <div className="members-item">
              <b>User Level</b>
              <br />
              {item.userType}
            </div>
            {item.userType === "student" && (
              <div className="members-item">
                <b>Matric No</b>
                <br />
                {item.matricNo}
              </div>
            )}
            <div className="members-item">
              <b>Phone No</b>
              <br />
              {item.phoneNo}
            </div>
            <div className="members-item">
              <b>Date of Birth</b>
              <br />
              {item.dob}
            </div>
            <div className="members-item">
              <b>Sex</b>
              <br />
              {item.sex}
            </div>
            <div className="members-item">
              <b>Borrowed Books</b>
              <br />{" "}
              {item.borrowedBooks.length === 0
                ? " null"
                : item.borrowedBooks.map((book) => (
                    <li key={book._id}>{book.title}</li>
                  ))}
            </div>
            <div className="members-item">
              <b>Address</b>
              <br />
              {item.address}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
