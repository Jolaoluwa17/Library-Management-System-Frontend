import React from "react";
import "./bodySectionTwo.css";
import { FaGift, FaCalculator } from "react-icons/fa";
import { GiBlackBook } from "react-icons/gi";
import { SiGitbook } from "react-icons/si";
import { MdLibraryBooks } from "react-icons/md";
import { Link } from "react-router-dom";

export const BodySectionTwo = () => {
  return (
    <div className="BodySectionTwo">
      <div className="BodySectionTwo-container">
        <div className="BodySectionTwo-container-header">
          <h1>Welcome To The Library</h1>
          <p className="body-sectiontwo-text">
            Welcome to the most popular library today
          </p>
          <div className="body-book">
            <hr />
            <p className="boby-book-icon">
              <GiBlackBook />
            </p>
            <hr />
          </div>
        </div>
        <div className="bodysectiontwo-content">
          <div className="ebooks">
            <div className="ebooks-icon" style={{color: "#ffbf05"}}>
              <FaGift />
            </div>
            <h3>EBOOKS</h3>
            <div className="ebooks-text">
              Bad libraries build collections, <br />
              Good libraries build services and
              <br />
              great libraries build communities <br />
              <div className="read-more-text">
                <Link to="/" style={{ color: "#28B498" }}>Read More</Link>
                <hr />
              </div>
            </div>
          </div>
          <div className="ebooks">
            <div className="ebooks-icon" style={{color: "#fe5461"}}>
              <SiGitbook />
            </div>
            <h3>AUDIOBOOKS</h3>
            <div className="ebooks-text">
              Bad libraries build collections, <br />
              Good libraries build services and
              <br />
              great libraries build communities <br />
              <div className="read-more-text">
                <Link to="/" style={{ color: "#28B498" }}>Read More</Link>
                <hr />
              </div>
            </div>
          </div>
          <div className="ebooks">
            <div className="ebooks-icon" style={{color: "#33d565"}}>
              <MdLibraryBooks />
            </div>
            <h3>MAGAZINE</h3>
            <div className="ebooks-text">
              Bad libraries build collections, <br />
              Good libraries build services and
              <br />
              great libraries build communities <br />
              <div className="read-more-text">
                <Link to="/" style={{ color: "#28B498" }}>Read More</Link>
                <hr />
              </div>
            </div>
          </div>
          <div className="ebooks">
            <div className="ebooks-icon" style={{color: "#4e8bfe"}}>
              <FaCalculator />
            </div>
            <div className="ebooks-title">
              <h3>TEENS & KIDS</h3>
              <div className="ebooks-text">
                Bad libraries build collections, <br />
                Good libraries build services and
                <br />
                great libraries build communities <br />
                <div className="read-more-text">
                <Link to="/" style={{ color: "#28B498" }}>Read More</Link>
                <hr />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BodySectionTwo;
