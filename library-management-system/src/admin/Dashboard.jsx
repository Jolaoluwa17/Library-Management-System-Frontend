import React from "react";
import "./dashboard.css";
import { ImBooks } from "react-icons/im";
import { IoMdContact } from "react-icons/io";
import { GiBookmarklet } from "react-icons/gi"
import { FaUsers } from "react-icons/fa"
import NewMembers from "../components/NewMembers"
import NewBooks from "../components/NewBooks"

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome to Dashboard</h2>
        <h5>Admin/Dashboard</h5>
      </div>
      <div className="dashboard-cards">
        <div className="total-card">
          <div className="card-icon" style={{color: "#ffbf05"}}>
            <IoMdContact />
          </div>
          <div className="card-content">
            <div className="card-text">Registered Users</div>
            <div className="card-number">105</div>
          </div>
        </div>
        <div className="total-card1">
          <div className="card-icon" style={{color: "#fe5461"}}>
            <ImBooks />
          </div>
          <div className="card-content1">
            <div className="card-text">Total Books</div>
            <div className="card-number">232</div>
          </div>
        </div>
        <div className="total-card1">
          <div className="card-icon" style={{color: "#33d565"}}>
            <GiBookmarklet />
          </div>
          <div className="card-content2">
            <div className="card-text">Issued Books</div>
            <div className="card-number">25</div>
          </div>
        </div>
        <div className="total-card1">
          <div className="card-icon" style={{color: "#4e8bfe"}}>
            <FaUsers />
          </div>
          <div className="card-content">
            <div className="card-text">Total Library Members</div>
            <div className="card-number">5</div>
          </div>
        </div>
      </div>
      <div className="list">
        <div className="list-components">
          <NewMembers />
          <NewBooks />
        </div>
        </div>
      </div>
  );
};
