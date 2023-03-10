import React from "react";
import "./adminTransactions.css";
import { useState } from "react";
import LoanedBooks from "../components/LoanedBooks";
import ReturnedBooks from "../components/ReturnedBooks";
import AppliedBooks from "../components/AppliedBooks";
import DeclinedBooks from "../components/DeclinedBooks";

export const AdminTransactions = () => {
  const [book1, setBook1] = useState("applied-books");
  const [book2, setBook2] = useState();
  return (
    <div className="admin-transactions">
      <div className="admin-transaction-header">
        <h2>Welcome to Transactions</h2>
        <h5>Admin/Transaction</h5>
      </div>
      <div className="admin-transaction-content">
        <div className="transaction-btn-container">
          <div
            className={book1 === "applied-books" ? "applied-books-btn" : "applied-books-btn1"}
            onClick={() => setBook1("applied-books")}
          >
            Applied Books
          </div>
          <div
            className={book1 === "loaned-books" ? "loaned-books-btn" : "loaned-books-btn1"}
            onClick={() => setBook1("loaned-books")}
          >
            Loaned books
          </div>
          <div
            className={book1 === "Declined-books" ? "Declined-books-btn" : "Declined-books-btn1"}
            onClick={() => setBook1("Declined-books")}
          >
            Declined books
          </div>
          <div
            className={book1 === "returned-books" ? "returned-books-btn" : "returned-books-btn1"}
            onClick={() => setBook1("returned-books")}
          >
            Returned Books
          </div>
        </div>
        <div className="line-across">
          <hr />
        </div>
        <div className="table-content">
          {book1 === "applied-books" && (
            <AppliedBooks
              book1={book1}
              setBook1={setBook1}
              book2={book2}
              setBook2={setBook2}
            />
          )}
          {book1 === "loaned-books" && <LoanedBooks />}
          {book1 === "Declined-books" && <DeclinedBooks />}
          {book1 === "returned-books" && <ReturnedBooks />}
        </div>
      </div>
    </div>
  );
};
