import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { CgComedyCentral } from "react-icons/cg";
import { IoIosSend } from "react-icons/io";

export const Footer = ({ contactRef }) => {
  const phoneNumber = "8155668282";
  const countryCode = "234";
  const url = `https://wa.me/${countryCode}${phoneNumber}`;
  const username = "jolaoluwa_42";
  return (
    <div className="footer" ref={contactRef}>
      <div className="footer-header">
        <h2>Babcock Library</h2>
      </div>
      <div className="footer-content">
        <div className="about-part">
          <div className="about-title">
            <h3>Library</h3>
          </div>
          <div className="about-part-content">
            <p>
              Become a leading library in the region known for exceptional
              service and extensive resources, <br /> while fostering growth and
              development for staff members and patrons alike
            </p>
          </div>
        </div>
        <div className="about-part">
          <div className="about-title">
            <h3>Our Services</h3>
          </div>
          <div className="about-part-content">
            <ul>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Research
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Education
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Enrichment
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Empowerment
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  community
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-part">
          <div className="about-title">
            <h3>Links</h3>
          </div>
          <div className="about-part-content">
            <ul>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/admin-login" style={{ color: "white" }}>
                  Admin
                </Link>
              </li>
              <li>
                <Link to="/login" style={{ color: "white" }}>
                  Login
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
                <Link
                  to={`https://www.instagram.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <AiFillInstagram />
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  <GrFacebookOption />
                </Link>
              </li>
              <li>
                <Link
                  to={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <IoLogoWhatsapp />
                </Link>
              </li>
            </ul>
            <div className="send-us-msg">
              <input type="text" placeholder="Send us a message" />
              <IoIosSend className="send-icon" />
            </div>
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
