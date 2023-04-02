import React from "react";
import "./dashboard.css";
import { ImBooks } from "react-icons/im";
import { IoMdContact } from "react-icons/io";
import { GiBookmarklet } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import NewMembers from "../components/NewMembers";
import NewBooks from "../components/NewBooks";
import { useState, useEffect } from "react";
import config from "../config";
import axios from "axios";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { Link } from "react-router-dom";

export const Dashboard = ({ admin }) => {
  const [pendingData, setPendingData] = useState([]);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchPendingData = async () => {
      const res = await axios.get(`${config.baseURL}/user`);
      const userCount = res.data.length;
      const reversedData = res.data.reverse();
      const limitedData = reversedData.slice(0, 5);
      const originalData = limitedData.reverse();
      setUserCount(userCount);
      setPendingData(originalData);
    };
    fetchPendingData();
  }, []);

  const [bookData, setBookData] = useState([]);
  const [bookCount, setBookCount] = useState(0);

  useEffect(() => {
    const fetchBookData = async () => {
      const res = await axios.get(`${config.baseURL}/book`);
      const bookCount = res.data.length;
      const reversedData = res.data.reverse();
      const limitedData = reversedData.slice(0, 5);
      const originalData = limitedData.reverse();
      setBookCount(bookCount);
      setBookData(originalData);
    };
    fetchBookData();
  }, [bookData._id]);

  // to get pending data
  const [pendingBookData, setPendingBookData] = useState([]);
  const [pendingBookDataCount, setPendingBookDataCount] = useState(0)
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/request`);
      const filteredData = res.data.filter((item) => item.status === "pending");
      const pendingRequest = filteredData.length;
      setPendingBookData(filteredData);
      setPendingBookDataCount(pendingRequest)
    };
    fetchbookData();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome to Dashboard</h2>
        <h5>{`${admin.admin.username}/Dashboard`}</h5>
      </div>
      <div className="dashboard-cards">
        <div className="total-card">
          <div className="card-icon" style={{ color: "#ffbf05" }}>
            <IoMdContact />
          </div>
          <div className="card-content">
            <div className="card-text">Registered Users</div>
            <div className="card-number">{userCount}</div>
          </div>
        </div>
        <div className="total-card1">
          <div className="card-icon" style={{ color: "#fe5461" }}>
            <ImBooks />
          </div>
          <div className="card-content1">
            <div className="card-text">Total Books</div>
            <div className="card-number">{bookCount}</div>
          </div>
        </div>
        <div className="total-card1">
          <div className="card-icon" style={{ color: "#33d565" }}>
            <GiBookmarklet />
          </div>
          <div className="card-content2">
            <div className="card-text">Issued Books</div>
            <div className="card-number">25</div>
          </div>
        </div>
        <div className="total-card1">
          <div className="card-icon" style={{ color: "#4e8bfe" }}>
            <FaUsers />
          </div>
          <div className="card-content">
            <div className="card-text">No of Pending Request</div>
            <div className="card-number">{pendingBookDataCount}</div>
          </div>
        </div>
      </div>
      <div className="list">
        <div className="list-components">
          <div className="table-container">
            <div className="cont">
              <div className="cont-header-container">
                <h3>New Members</h3>
                <div className="const-header-main">
                  <p>Name</p>
                  <p>Email</p>
                </div>
              </div>
              <hr />
              <div className="table-container-main">
                <TableContainer>
                  <Table aria-label="simple table">
                    <TableHead></TableHead>
                    {pendingData.map((item) => (
                      <NewMembers key={item._id} item={item} />
                    ))}
                  </Table>
                </TableContainer>
              </div>
              <Link to="/members">
                <div className="list-all-books">
                  <button className="list-all-btn">List All</button>
                </div>
              </Link>
            </div>
          </div>
          <div className="table-container">
            <div className="cont">
              <div className="cont-header-container">
                <h3>New Members</h3>
                <div className="const-header-main">
                  <p>Book Name</p>
                  <p>Author</p>
                </div>
              </div>
              <hr />
              <div className="table-container-main">
                <TableContainer>
                  <Table aria-label="simple table">
                    <TableHead></TableHead>
                    {bookData.map((item) => (
                      <NewBooks key={item._id} item={item} />
                    ))}
                  </Table>
                </TableContainer>
              </div>
              <Link to="/totalbooks">
                <div className="list-all-books">
                  <button className="list-all-btn">List All</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
