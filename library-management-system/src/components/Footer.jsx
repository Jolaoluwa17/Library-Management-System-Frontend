import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { CgComedyCentral } from "react-icons/cg"

export const Footer = ({ contactRef }) => {
  return (
    <div className="footer" ref={contactRef}>
      <div className="footer-header">
        <h2>Babcock Library</h2>
      </div>
      <div className="footer-content">
        <div className="about-part">
          <div className="about-title">
            <h3>About</h3>
          </div>
          <div className="about-part-content">
            <ul>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Submit Issues
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Slack
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Github Repo
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-part">
          <div className="about-title">
            <h3>Getting Started</h3>
          </div>
          <div className="about-part-content">
            <ul>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Introduction
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Usage
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Global
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Element
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Themes
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-part">
          <div className="about-title">
            <h3>Resources</h3>
          </div>
          <div className="about-part-content">
            <ul>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Form Validation
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  API
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Visibility
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Accessibility
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Community
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Market Place
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-part">
          <div className="social-about-title">
            <h3>Social Media</h3>
          </div>
          <div className="social-media-content">
            <p>
              Follow us on social media to find out what is happening
              <br /> and to keep up on latest updates
            </p>
            <ul>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  <AiFillInstagram />
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  <GrFacebookOption />
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  <IoLogoWhatsapp />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-footer">
        <div className="footer-footer-line">
          <hr />
        </div>
        <div className="footer-footer-content">
          <CgComedyCentral /> 2022 Babcock Library. All rights reserved
        </div>
      </div>
    </div>
  );
};
export default Footer;
