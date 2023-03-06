import React from 'react'
import "./transactions.css";
import { useState } from 'react';
import UserTransactionLoanedBooks from '../components/UserTransactionLoanedBooks';
import UserTransactionReturnedBooks from '../components/UserTransactionReturnedBooks';
import UserTransactionAppliedBooks from '../components/UserTransactionAppliedBooks';
import UserTransactionDeclinedBooks from '../components/UserTransactionDeclinedBooks';

export const Transactions = () => {
  const [userBook1, setUserBook1] = useState("user-applied-books");
  const [userBook2, setUserBook2] = useState();
  return (
    <div className="transactions">
        <div className="transactions-header">
          <h2>Transactions</h2>
          <h5>Olusanya Jolaoluwa / Previous Transactions</h5>
        </div>
        <div className="transaction-content">
        <div className="transaction-btn-container">
          <div
            className="transaction-btn"
            onClick={() => setUserBook1("user-applied-books")}
          >
            Applied Books
          </div>
          <div
            className="transaction-btn"
            onClick={() => setUserBook1("user-loaned-books")}
          >
            Loaned books
          </div>
          <div
            className="transaction-btn"
            onClick={() => setUserBook1("user-declined-books")}
          >
            Declined books
          </div>
          <div
            className="transaction-btn"
            onClick={() => setUserBook1("user-returned-books")}
          >
            Returned Books
          </div>
        </div>
        <div className="line-across">
          <hr />
        </div>
        <div className="table-content">
          {userBook1 === "user-applied-books" && (
            <UserTransactionAppliedBooks
            userBook1={userBook1}
              setBook1={setUserBook1}
              userBook2={userBook2}
              setUserBook2={setUserBook2}
            />
          )}
          {userBook1 === "user-loaned-books" && <UserTransactionLoanedBooks />}
          {userBook1 === "user-declined-books" && <UserTransactionDeclinedBooks />}
          {userBook1 === "user-returned-books" && <UserTransactionReturnedBooks />}
        </div>
        </div>
    </div>
  )
}


