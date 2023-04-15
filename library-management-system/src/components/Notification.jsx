import React from "react";
import "./notification.css";
import axios from "axios";
import config from "../config";
import { useState, useEffect } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Notification = ({ user }) => {
  const [BookData, setBookData] = useState([]);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/loan`);
      const filteredData = res.data.filter(
        (item) => item.status === "pending" && user._id === item.user._id
      );
      const reversedData = filteredData.reverse();
      const limitedData = reversedData.slice(0, 1);
      setBookData(limitedData);
    };
    fetchbookData();
  }, []);
  const pendingQty = BookData.length;

  // to get approved data
  const [loanedBookData, setLoanedBookData] = useState([]);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/loan`);
      const filteredData = res.data.filter(
        (item) => item.status === "approved" && user._id === item.user._id
      );
      const reversedData = filteredData.reverse();
      const limitedData = reversedData.slice(0, 1);
      setLoanedBookData(limitedData);
    };
    fetchbookData();
  }, []);
  const approveQty = loanedBookData.length;

  // to get declined data
  const [declinedBookData, setDeclinedBookData] = useState([]);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/loan`);
      const filteredData = res.data.filter(
        (item) => item.status === "denied" && user._id === item.user._id
      );
      const reversedData = filteredData.reverse();
      const limitedData = reversedData.slice(0, 1);
      setDeclinedBookData(limitedData);
    };
    fetchbookData();
  }, []);
  const declineQty = declinedBookData.length;


  return (
    <div className="notification">
      <div className="notification-header">
        <h4>Notification</h4>
      </div>
      <div className="notification-line">
        <hr />
      </div>
      {pendingQty === 1
        ? BookData.map((item) => (
            <div className="notification-container">
              <div className="notification-pic">
                <img src={item.user.profilePic.fileUrl} alt="" />
              </div>
              <div className="notification-main">
                <div className="notification-id">
                  <h4>{item.user.username}</h4>
                </div>
                {pendingQty === 1 ? (
                  <div className="notification-id">
                    <p>You just submitted a new request</p>
                    <Link
                      to={`/userSeeAppliedBooksDetails?requestId=${item._id}`}
                    >
                      <p className="notification-see-btn">
                        Go to the request{" "}
                        <BsArrowRightCircleFill className="notification-arrow-btn" />
                      </p>
                    </Link>
                  </div>
                ) : null}
                {approveQty === 1 ? (
                  <div className="notification-id">
                    <p>Your request has been accepted.</p>
                    <Link
                      to={`/userSeeLoanedBooksDetails?requestId=${item._id}`}
                    >
                      <p className="notification-see-btn">
                        Go to the request{" "}
                        <BsArrowRightCircleFill className="notification-arrow-btn" />
                      </p>
                    </Link>
                  </div>
                ) : null}
                {declineQty === 1 ? (
                  <div className="notification-id">
                    <p>Your request has been declined.</p>
                    <Link
                      to={`/userSeeDeclinedBooksDetails?requestId=${item._id}`}
                    >
                      <p className="notification-see-btn">
                        Go to the request{" "}
                        <BsArrowRightCircleFill className="notification-arrow-btn" />
                      </p>
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
export default Notification;
