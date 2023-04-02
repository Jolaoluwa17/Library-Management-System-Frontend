import React from "react";
import "./transactions.css";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import UserTransactionLoanedBooks from "../components/UserTransactionLoanedBooks";
import UserTransactionReturnedBooks from "../components/UserTransactionReturnedBooks";
import UserTransactionAppliedBooks from "../components/UserTransactionAppliedBooks";
import UserTransactionDeclinedBooks from "../components/UserTransactionDeclinedBooks";

export const Transactions = ({ user }) => {
  const [userBook1, setUserBook1] = useState("user-applied-books");
  const [userBook2, setUserBook2] = useState();

  // to get pending data
  const [pendingBookData, setPendingBookData] = useState([]);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/request`);
      const filteredData = res.data.filter(
        (item) => item.status === "pending" && user._id === item.user._id
      );
      setPendingBookData(filteredData);
    };
    fetchbookData();
  }, []);

  return (
    <div className="transactions">
      <div className="transactions-header">
        <h2>Transactions</h2>
        <h5>{`${user.username} / Previous Transactions`}</h5>
      </div>
      <div className="transaction-content">
        <div className="transaction-btn-container">
          <div
            className={
              userBook1 === "user-applied-books"
                ? "user-applied-books-btn"
                : "user-applied-books-btn1"
            }
            onClick={() => setUserBook1("user-applied-books")}
          >
            Applied Books
          </div>
          <div
            className={
              userBook1 === "user-loaned-books"
                ? "user-loaned-books-btn"
                : "user-loaned-books-btn1"
            }
            onClick={() => setUserBook1("user-loaned-books")}
          >
            Loaned books
          </div>
          <div
            className={
              userBook1 === "user-declined-books"
                ? "user-declined-books-btn"
                : "user-declined-books-btn1"
            }
            onClick={() => setUserBook1("user-declined-books")}
          >
            Declined books
          </div>
          <div
            className={
              userBook1 === "user-returned-books"
                ? "user-returned-books-btn"
                : "user-returned-books-btn1"
            }
            onClick={() => setUserBook1("user-returned-books")}
          >
            Returned Books
          </div>
        </div>
        <div className="line-across">
          <hr />
        </div>
        <div className="table-content">
          {userBook1 === "user-applied-books" &&
            pendingBookData.map((item) => (
              <UserTransactionAppliedBooks
                key={item._id}
                item={item}
                user={user}
              />
            ))}
          {userBook1 === "user-loaned-books" && <UserTransactionLoanedBooks />}
          {userBook1 === "user-declined-books" && (
            <UserTransactionDeclinedBooks />
          )}
          {userBook1 === "user-returned-books" && (
            <UserTransactionReturnedBooks />
          )}
        </div>
      </div>
    </div>
  );
};
