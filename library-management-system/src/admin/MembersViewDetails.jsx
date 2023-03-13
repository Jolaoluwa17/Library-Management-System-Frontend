import React from "react";
import "./membersViewDetails.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const MembersViewDetails = () => {
  const navigate = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const UN = urlParams.get("username");
  const EM = urlParams.get("email");
  const UT = urlParams.get("userType");
  const MN = urlParams.get("matricNo");

  const [matricVisible, setMatricVisible] = useState(false);

  useEffect(() => {
    UT === "student" ? setMatricVisible(true) : setMatricVisible(false);
  }, [MN]);

  return (
    <div className="members-view-details">
      <div className="members-details-header">
        <h2>Welcome to Transactions</h2>
        <h5>Admin/Transaction</h5>
      </div>
      <div className="members-view-container">
        <div className="members-view-header">
          <div className="previous-btn" onClick={() => navigate(-1)}>
            <IoArrowBackOutline />
          </div>
          <h3>Details Panel</h3>
        </div>
        <div className="personal-information-header">
          <h3>Personal Information</h3>
        </div>
        <div className="members-panel-content">
          <div className="members-item">
            <b>Full Name</b>
            <br /> {UN}
          </div>
          <div className="members-item">
            <b>Email</b>
            <br /> {EM}
          </div>
          <div className="members-item">
            <b>User Level</b>
            <br /> {UT}
          </div>
          {matricVisible && (
            <div className="members-item">
              <b>Matric No</b>
              <br /> {MN}
            </div>
          )}
          <div className="members-item">
            <b>Phone No</b>
            <br /> {UT}
          </div>
          <div className="members-item">
            <b>Address</b>
            <br /> {UT}
          </div>
          <div className="members-item">
            <b>Date of Birth</b>
            <br /> {UT}
          </div>
        </div>
      </div>
    </div>
  );
};
