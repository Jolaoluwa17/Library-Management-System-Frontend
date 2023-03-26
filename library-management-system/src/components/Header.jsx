import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";

export const Header = ({ scrollToSectionContact, scrollToSectionAbout }) => {
  const [isMobile, setIsMobile] = useState("false");

  return (
    <div className="header-container">
      <div className="nav-bar">
        <div className={isMobile ? "babcock-img" : "babcock-img1"}>
          <img
            src="https://res.cloudinary.com/manlikeemma/image/upload/v1669629509/BUCODEL/Babcock_Logo_c46jjo.jpg"
            alt="Babcock Logo"
          />
        </div>
        <div className={isMobile ? "nav-content" : "nav-content-mobile"}>
          <ul>
            <li>
              <div className="close-icon" onClick={() => setIsMobile(true)}>
                <MdOutlineCancel />
              </div>
              <button>HOME</button>
            </li>
            <li>
              <button onClick={scrollToSectionAbout}>ABOUT US</button>
            </li>
            <li>
                <button onClick={scrollToSectionContact}>CONTACT US</button>
            </li>
            <li>
              <Link to="/admin-login" style={{ color: "rgb(0, 0, 0, 0.5)" }}>
                {" "}
                <button>ADMIN</button>
              </Link>
            </li>
            <li className="mobile-login-button">
              <Link to="/login">
                <button>Login</button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="login-btn-container">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="burger-icon" onClick={() => setIsMobile(false)}>
          <GiHamburgerMenu />
        </div>
      </div>
      <div className="header-line">
        <hr />
      </div>
    </div>
  );
};
export default Header;
