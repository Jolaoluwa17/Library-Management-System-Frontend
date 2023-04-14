import React from "react";
import "./transactions.css";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import UserTransactionLoanedBooks from "../components/UserTransactionLoanedBooks";
import UserTransactionReturnedBooks from "../components/UserTransactionReturnedBooks";
import UserTransactionAppliedBooks from "../components/UserTransactionAppliedBooks";
import UserTransactionDeclinedBooks from "../components/UserTransactionDeclinedBooks";
import UserTransactionPartialBooks from "../components/UserTransactionPartialBooks";
import SkeletonTransactionLoader from "../components/SkeletonTransactionLoader";


export const Transactions = ({ user }) => {
  const [userBook1, setUserBook1] = useState("user-applied-books");
  const [userBook2, setUserBook2] = useState();

  // to get pending data
  const [pendingBookData, setPendingBookData] = useState([]);
  const [pendingDataLoading, setPendingDataLoading] = useState(true);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/loan`);
      const filteredData = res.data.filter(
        (item) => item.status === "pending" && user._id === item.user._id
      );
      setPendingBookData(filteredData);
      setPendingDataLoading(false);
    };
    fetchbookData();
  }, []);

  // to get approved data
  const [loanedBookData, setLoanedBookData] = useState([]);
  const [loanedDataLoading, setLoanedDataLoading] = useState(true);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/loan`);
      const filteredData = res.data.filter(
        (item) => item.status === "approved" && user._id === item.user._id
      );
      setLoanedBookData(filteredData);
      setLoanedDataLoading(false);
    };
    fetchbookData();
  }, []);

  // to get declined data
  const [declinedBookData, setDeclinedBookData] = useState([]);
  const [declinedDataLoading, setDeclinedDataLoading] = useState(true);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/loan`);
      const filteredData = res.data.filter(
        (item) => item.status === "denied" && user._id === item.user._id
      );
      setDeclinedBookData(filteredData);
      setDeclinedDataLoading(false);
    };
    fetchbookData();
  }, []);

  // to get returned data
  const [returnedBookData, setReturnedBookData] = useState([]);
  const [returnedDataLoading, setReturnedDataLoading] = useState(true);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/loan`);
      const filteredData = res.data.filter(
        (item) => item.status === "returned" && user._id === item.user._id
      );
      setReturnedBookData(filteredData);
      setReturnedDataLoading(false);
    };
    fetchbookData();
  }, []);

  // to get returned data
  const [partialBookData, setPartialBookData] = useState([]);
  const [partialDataLoading, setPartialDataLoading] = useState(true);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/loan`);
      const filteredData = res.data.filter(
        (item) =>
          item.status === "partially-returned" && user._id === item.user._id
      );
      setPartialBookData(filteredData);
      setPartialDataLoading(false);
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
          <div
            className={
              userBook1 === "user-partial-books"
                ? "user-partial-books-btn"
                : "user-partial-books-btn1"
            }
            onClick={() => setUserBook1("user-partial-books")}
          >
            Partially Returned Books
          </div>
        </div>
        <div className="line-across">
          <hr />
        </div>
        <div className="table-content">
          <div className="table-content-main">
            {userBook1 === "user-applied-books" ? (
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
                  <UserTransactionAppliedBooks
                    key={item._id}
                    item={item}
                    user={user}
                  />
                ))
              )
            ) : null}
            {userBook1 === "user-loaned-books" ? (
              loanedDataLoading ? (
                <div>
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                </div>
              ) : loanedBookData.length === 0 ? (
                <p style={{ textAlign: "center" }}>No Approved Data</p>
              ) : (
                loanedBookData.map((item) => (
                  <UserTransactionLoanedBooks
                    key={item._id}
                    item={item}
                    user={user}
                  />
                ))
              )
            ) : null}
            {userBook1 === "user-declined-books" ? (
              declinedDataLoading ? (
                <div>
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                </div>
              ) : declinedBookData.length === 0 ? (
                <p style={{ textAlign: "center" }}>No Denied Data</p>
              ) : (
                declinedBookData.map((item) => (
                  <UserTransactionDeclinedBooks
                    key={item._id}
                    item={item}
                    user={user}
                  />
                ))
              )
            ) : null}
            {userBook1 === "user-returned-books" ? (
              returnedDataLoading ? (
                <div>
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                  <SkeletonTransactionLoader />
                </div>
              ) : returnedBookData.length === 0 ? (
                <p style={{ textAlign: "center" }}>No Returned Data</p>
              ) : (
                returnedBookData.map((item) => (
                  <UserTransactionReturnedBooks
                    key={item._id}
                    item={item}
                    user={user}
                  />
                ))
              )
            ) : null}

            {userBook1 === "user-partial-books" ? (
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
                  <UserTransactionPartialBooks
                    key={item._id}
                    item={item}
                    user={user}
                  />
                ))
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
