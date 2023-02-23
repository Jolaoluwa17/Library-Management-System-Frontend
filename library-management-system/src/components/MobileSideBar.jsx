import React from "react";
import { IoCardSharp } from "react-icons/io5";
import { AiOutlineSetting, AiOutlineHistory } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { HiLibrary } from "react-icons/hi";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
/*The css file is sidebar.css */

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    // <div className="mobile-side-bar-overall-container" style={{ width: isOpen ? "300px" : "0%", height: isOpen ? "300px" : "0%", backgroundColor: "red" }}>
    <div className="mobile-sidebar" style={{ width: isOpen ? "200px" : "0px" }}>
      <div
        className="open-sidebar-icon"
        style={{ marginLeft: isOpen ? "170px" : "15px", marginTop: "10px" }}
      >
        <GiHamburgerMenu onClick={toggle} />
      </div>
      <div className="logo">
        <div
          className="user-logoImg"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <img
            src="https://res.cloudinary.com/manlikeemma/image/upload/v1669629509/BUCODEL/Babcock_Logo_c46jjo.jpg"
            alt="Babcock Logo"
          />
        </div>
        <div
          className="logoText"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <h3>Welcome</h3>
          <h5>Back</h5>
        </div>
      </div>
      <div className="sidebarButton" id="sidebarButton">
        <div className="classroomButton">
          <NavLink to="/Library">
            <div
              className="sidebar-button"
              style={{ width: isOpen ? "200px" : "0px" }}
            >
              <HiLibrary className="icon" />
              <div
                className="library-text"
                style={{ display: isOpen ? "block" : "none" }}
              >
                Library
              </div>
            </div>
          </NavLink>
          <NavLink to="/transactions">
            <div
              className="sidebar-button"
              style={{ width: isOpen ? "200px" : "0px" }}
            >
              <AiOutlineHistory className="icon" />
              <div
                className="library-text"
                style={{ display: isOpen ? "block" : "none" }}
              >
                Transaction
              </div>
            </div>
          </NavLink>
          <NavLink to="/">
            <div
              className="sidebar-button"
              style={{ width: isOpen ? "200px" : "0px" }}
            >
              <IoCardSharp className="icon" />
              <div
                className="library-text"
                style={{ display: isOpen ? "block" : "none" }}
              >
                Library Card
              </div>
            </div>
          </NavLink>
          <NavLink to="/cart">
            <div
              className="sidebar-button"
              style={{ width: isOpen ? "200px" : "0px" }}
            >
              <FaShoppingCart className="icon" />
              <div
                className="library-text"
                style={{ display: isOpen ? "block" : "none" }}
              >
                Cart
              </div>
            </div>
          </NavLink>
        </div>
        <div
          className="user-settingButton"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <NavLink to="/userSettings">
            <button className="sidebar-button">
              <AiOutlineSetting className="icon" />
              Settings
            </button>
          </NavLink>
        </div>
        <div
          className="logOutButton"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <button className="sidebar-button">
            <HiOutlineLogout className="icon" />
            Log Out
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default MobileSidebar;
