import React from "react";
import "./adminTransactions.css";
import { useState } from "react";
import LoanedBooks from "../components/LoanedBooks";
import ReturnedBooks from "../components/ReturnedBooks";

export const AdminTransactions = () => {
  const [book1, setBook1] = useState("loaned-books");
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
            className="transaction-btn"
            onClick={() => setBook1("loaned-books")}
          >
            Loaned books
          </div>
          <div
            className="transaction-btn"
            onClick={() => setBook1("returned-books")}
          >
            Returned Books
          </div>
        </div>
        <div className="line-across">
            <hr />
        </div>
        <div className="table-content">
          {book1 === "loaned-books" && (
            <LoanedBooks
              book1={book1}
              setBook1={setBook1}
              book2={book2}
              setActive2={setBook2}
            />
          )}
          {book1 === "returned-books" && <ReturnedBooks />}
        </div>
      </div>
    </div>
  );
};
