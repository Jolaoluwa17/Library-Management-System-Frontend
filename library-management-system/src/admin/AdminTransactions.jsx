import React from "react";
import "./adminTransactions.css";
import { useState, useEffect } from "react";
import LoanedBooks from "../components/LoanedBooks";
import ReturnedBooks from "../components/ReturnedBooks";
import AppliedBooks from "../components/AppliedBooks";
import DeclinedBooks from "../components/DeclinedBooks";
import axios from "axios";
import config from "../config";

export const AdminTransactions = () => {
  const [book1, setBook1] = useState("applied-books");

  // to get pending data
  const [pendingBookData, setPendingBookData] = useState([]);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/request`);
      const filteredData = res.data.filter(
        (item) => item.status === "pending");
      setPendingBookData(filteredData);
    };
    fetchbookData();
  }, []);

  // to get approve data
  const [approveBookData, setApproveBookData] = useState([]);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/request`);
      const filteredData = res.data.filter(
        (item) => item.status === "approved");
      setApproveBookData(filteredData);
    };
    fetchbookData();
  }, []);

  // to get declined data
  const [declineBookData, setDeclineBookData] = useState([]);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/request`);
      const filteredData = res.data.filter(
        (item) => item.status === "declined"
      );
      setDeclineBookData(filteredData);
    };
    fetchbookData();
  }, []);

  // to get returned data
  const [returnBookData, setReturnBookData] = useState([]);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/request`);
      const filteredData = res.data.filter(
        (item) => item.status === "returned"
      );
      setReturnBookData(filteredData);
    };
    fetchbookData();
  }, []);

  return (
    <div className="admin-transactions">
      <div className="admin-transaction-header">
        <h2>Welcome to Transactions</h2>
        <h5>Admin/Transaction</h5>
      </div>
      <div className="admin-transaction-content">
        <div className="transaction-btn-container">
          <div
            className={
              book1 === "applied-books"
                ? "applied-books-btn"
                : "applied-books-btn1"
            }
            onClick={() => setBook1("applied-books")}
          >
            Applied Books
          </div>
          <div
            className={
              book1 === "loaned-books"
                ? "loaned-books-btn"
                : "loaned-books-btn1"
            }
            onClick={() => setBook1("loaned-books")}
          >
            Loaned books
          </div>
          <div
            className={
              book1 === "Declined-books"
                ? "Declined-books-btn"
                : "Declined-books-btn1"
            }
            onClick={() => setBook1("Declined-books")}
          >
            Declined books
          </div>
          <div
            className={
              book1 === "returned-books"
                ? "returned-books-btn"
                : "returned-books-btn1"
            }
            onClick={() => setBook1("returned-books")}
          >
            Returned Books
          </div>
        </div>
        <div className="line-across">
          <hr />
        </div>
        <div className="table-content">
          {book1 === "applied-books" &&
            pendingBookData.map((item) => (
              <AppliedBooks item={item} key={item._id} />
            ))}
          {book1 === "loaned-books" &&
            approveBookData.map((item) => (
              <LoanedBooks item={item} key={item._id} />
            ))}
          {book1 === "Declined-books" &&
            declineBookData.map((item) => (
              <DeclinedBooks item={item} key={item._id} />
            ))}
          {book1 === "returned-books" &&
            returnBookData.map((item) => (
              <ReturnedBooks item={item} key={item._id} />
            ))}
        </div>
      </div>
    </div>
  );
};
