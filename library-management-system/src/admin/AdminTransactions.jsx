import React from "react";
import "./adminTransactions.css";
import { useState, useEffect } from "react";
import LoanedBooks from "../components/LoanedBooks";
import ReturnedBooks from "../components/ReturnedBooks";
import AppliedBooks from "../components/AppliedBooks";
import DeclinedBooks from "../components/DeclinedBooks";
import PartialBooks from "../components/PartialBooks";
import { TailSpin, LineWave } from "react-loader-spinner";
import SkeletonTransactionLoader from "../components/SkeletonTransactionLoader";
import axios from "axios";
import config from "../config";

export const AdminTransactions = ({ admin }) => {
  const [book1, setBook1] = useState("applied-books");

  // to get pending data
  const [pendingBookData, setPendingBookData] = useState([]);
  const [pendingDataLoading, setPendingDataLoading] = useState(true);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/loan`);
      const filteredData = res.data.filter((item) => item.status === "pending");
      const reversedData = filteredData.reverse();
      setPendingBookData(reversedData);
      setPendingDataLoading(false);
    };
    fetchbookData();
  }, []);

  // to get approve data
  const [approveBookData, setApproveBookData] = useState([]);
  const [loanedDataLoading, setLoanedDataLoading] = useState(true);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/loan`);
      const filteredData = res.data.filter(
        (item) => item.status === "approved"
      );
      const reversedData = filteredData.reverse();
      setApproveBookData(reversedData);
      setLoanedDataLoading(false);
    };
    fetchbookData();
  }, []);

  // to get declined data
  const [declineBookData, setDeclineBookData] = useState([]);
  const [declinedDataLoading, setDeclinedDataLoading] = useState(true);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/loan`);
      const filteredData = res.data.filter((item) => item.status === "denied");
      const reversedData = filteredData.reverse();
      setDeclineBookData(reversedData);
      setDeclinedDataLoading(false);
    };
    fetchbookData();
  }, []);

  // to get returned data
  const [returnBookData, setReturnBookData] = useState([]);
  const [returnedDataLoading, setReturnedDataLoading] = useState(true);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/loan`);
      const filteredData = res.data.filter(
        (item) => item.status === "returned"
      );
      const reversedData = filteredData.reverse();
      setReturnBookData(reversedData);
      setReturnedDataLoading(false);
    };
    fetchbookData();
  }, []);

  // to get partially returned data
  const [partialBookData, setPartialBookData] = useState([]);
  const [partialDataLoading, setPartialDataLoading] = useState(true);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/loan`);
      const filteredData = res.data.filter(
        (item) => item.status === "partially-returned"
      );
      const reversedData = filteredData.reverse();
      setPartialBookData(reversedData);
      setPartialDataLoading(false);
    };
    fetchbookData();
  }, []);

  return (
    <div className="admin-transactions">
      <div className="admin-transaction-header">
        <h2>Welcome to Transactions</h2>
        <h5>{admin.admin.username}/Transaction</h5>
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
          <div
            className={
              book1 === "partial-books"
                ? "partial-books-btn"
                : "partial-books-btn1"
            }
            onClick={() => setBook1("partial-books")}
          >
            Partially Returned Books
          </div>
        </div>
        <div className="line-across">
          <hr />
        </div>
        <div className="table-content">
          <div className="table-content-main">
            {book1 === "applied-books" ? (
              pendingDataLoading ? (
                <div>
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                </div>
              ) : pendingBookData.length === 0 ? (
                <p style={{ textAlign: "center" }}>No Loaned Data</p>
              ) : (
                pendingBookData.map((item) => (
                  <AppliedBooks item={item} key={item._id} />
                ))
              )
            ) : null}
            {book1 === "loaned-books" ? (
              loanedDataLoading ? (
                <div>
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                </div>
              ) : approveBookData.length === 0 ? (
                <p style={{ textAlign: "center" }}>No Approved Data</p>
              ) : (
                approveBookData.map((item) => (
                  <LoanedBooks item={item} key={item._id} />
                ))
              )
            ) : null}
            {book1 === "Declined-books" ? (
              declinedDataLoading ? (
                <div>
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                </div>
              ) : declineBookData.length === 0 ? (
                <p style={{ textAlign: "center" }}>No Denied Data</p>
              ) : (
                declineBookData.map((item) => (
                  <DeclinedBooks item={item} key={item._id} />
                ))
              )
            ) : null}
            {book1 === "returned-books" ? (
              returnedDataLoading ? (
                <div>
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                </div>
              ) : returnBookData.length === 0 ? (
                <p style={{ textAlign: "center" }}>No Returned Data</p>
              ) : (
                returnBookData.map((item) => (
                  <ReturnedBooks item={item} key={item._id} />
                ))
              )
            ) : null}
            {book1 === "partial-books" ? (
              partialDataLoading ? (
                <div>
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                </div>
              ) : partialBookData.length === 0 ? (
                <p style={{ textAlign: "center" }}>
                  No Partially Returned Data
                </p>
              ) : (
                partialBookData.map((item) => (
                  <PartialBooks item={item} key={item._id} />
                ))
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
