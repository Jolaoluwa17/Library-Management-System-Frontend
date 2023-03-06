import React from "react";
import "./seeDetails.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const SeeLoanedBooksDetails = () => {
  const navigate = useNavigate();
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
        <div className="details-panel-content">
          <div className="loanee-pic">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1677403380/Final%20Year%20Project%20Pictures/joseph-gonzalez-iFgRcqHznqg-unsplash_bafg0u.jpg"
              alt=""
            />
          </div>
          <div className="details-text">
            <div className="details-panel-info">
              <div className="details-personal-info">
                <div className="details-personal-info-header">
                  <h4>Personal Information</h4>
                </div>
                <div className="loanee-per">
                  <b>Name: </b>Olusanya Jolaoluwa
                </div>
                <div className="loanee-per">
                  <b>Phone No: </b>08155668282
                </div>
                <div className="loanee-per per-book-status">
                  <b>Status: </b>Loaned
                </div>
                <div className="loanee-per">
                  {" "}
                  <b>Loaned Date:</b> 21-01-2023
                </div>
                <div className="loanee-per">
                  {" "}
                  <b>Return Date:</b> 28-01-2023
                </div>
                <div className="loanee-per">
                  {" "}
                  <b>User Level:</b> Student
                </div>
              </div>
            </div>

            <div className="details-book-info">
              <div className="details-book-info-header">
                <h4>Book Information</h4>
              </div>
              <div className="loanee-det">
                <b>Qty: </b>3
              </div>
              <b>List Of Books</b>
              <div className="loanee-det list-of-books">
                <ul>
                  <li>Moby Dick</li>
                  <li>Moby Dick</li>
                  <li>Moby Dick</li>
                </ul>
              </div>
            </div>
            <div className="details-librarian-info">
              <div className="librarian-info-header">
                <h4>Librarian Information</h4>
              </div>
              <div className="librarian-det">
                <b>Name: </b>Alabi Emmanuel Subomi
              </div>
              <div className="librarian-det">
                <b>Phone No: </b>+2348155668282
              </div>
            </div>
          </div>
        </div>
        <div className="details-returned-btn">
            <button>Returned</button>
        </div>
      </div>
    </div>
  );
};
