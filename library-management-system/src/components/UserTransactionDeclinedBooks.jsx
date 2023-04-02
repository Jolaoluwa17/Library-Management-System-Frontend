import React from "react";
import { Link } from "react-router-dom";
import "./loanedBooks.css";

export const UserTransactionDeclinedBooks = ({ item }) => {
  const loanDate = new Date(item.loanDate).toLocaleDateString();
  const returnDate = new Date(item.returnDate).toLocaleDateString();
  const bookQty = item.books.length;

  return (
    <div className="loaned-books-content">
      <div className="loaned-details-container">
        <div className="loaned-books-image-conatiner">
          <img src={item.user.profilePic.fileUrl} alt="" />
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
          <div className="decline-status">
            <b>Status: </b>
            {item.status}
          </div>
          <div className="loaned-date">
            <b>Loaned Date: </b>
            {loanDate}
          </div>
          <div className="loaned-date">
            <b>Return Date: </b>
            {returnDate}
          </div>
        </div>
      </div>
      <Link to={`/userSeeDeclinedBooksDetails?requestId=${item._id}`}>
        <div className="see-details-btn">SEE DETAILS</div>
      </Link>
    </div>
  );
};
export default UserTransactionDeclinedBooks;
