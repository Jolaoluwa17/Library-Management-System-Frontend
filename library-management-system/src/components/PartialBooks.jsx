import React from "react";
import "./loanedBooks.css";
import { Link } from "react-router-dom";

export const PartialBooks = ({ item }) => {
  const loanDate = new Date(item.loanDate).toLocaleDateString();
  const returnDate = new Date(item.returnDate).toLocaleDateString();
  const bookQty = item.books.length;

  return (
    <div className="loaned-books-content">
      <div className="loaned-details-container">
        <div className="loaned-books-image-conatiner">
          <img src={item.user.profilePic.fileUrl} alt="profile" />
        </div>
        <div className="loaned-books-details">
          <div className="loanee-name">
            <b>Name: </b>
            {item.user.username}
          </div>
          <div className="loanee-phone-no">
            <b>Phone No: </b>
            {item.user.phoneNo}
          </div>
          <div className="loanee-amountof-books">
            <b>Qty: </b>
            {bookQty}
          </div>
          <div className="loanee-status">
            <b>Status: </b>
            {item.status}
          </div>
          <div className="loaned-date">
            <b>Loaned Date:</b> {loanDate}
          </div>
          <div className="loaned-date">
            {" "}
            <b>Return Date:</b> {returnDate}
          </div>
        </div>
      </div>
      <div className="see-details-btn">
        <Link
          to={`/seePartialBooksDetails?requestId=${item._id}`}
          style={{ color: "#28B498" }}
        >
          SEE DETAILS
        </Link>
      </div>
    </div>
  );
};
export default PartialBooks;
