import React from "react";
import "./bodySectionTwo.css";
import { FaGift, FaCalculator } from "react-icons/fa";
import { GiBlackBook } from "react-icons/gi";
import { SiGitbook } from "react-icons/si";
import { MdLibraryBooks } from "react-icons/md";
import { Link } from "react-router-dom";

export const BodySectionTwo = ({ aboutRef }) => {
  return (
    <div className="BodySectionTwo" ref={aboutRef}>
      <div className="BodySectionTwo-container">
        <div className="BodySectionTwo-container-header">
          <h1>Welcome To The Library</h1>
          <p className="body-sectiontwo-text">
          Welcome to the thriving heart of knowledge and ideas.
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
            <div className="ebooks-icon" style={{ color: "#ffbf05" }}>
              <FaGift />
            </div>
            <h3>EBOOKS</h3>
            <div className="ebooks-text">
              Bad libraries build collections, <br />
              Good libraries build services and
              <br />
              great libraries build communities <br />
              <div className="read-more-text">
                <Link to="/" style={{ color: "#28B498" }}>
                  Read More
                </Link>
                <hr />
              </div>
            </div>
          </div>
          <div className="ebooks">
            <div className="ebooks-icon" style={{ color: "#fe5461" }}>
              <SiGitbook />
            </div>
            <h3>AUDIOBOOKS</h3>
            <div className="ebooks-text">
              Listening to audio books <br /> is a symphony of words,
              <br /> narrated by the author.
              <br />
              <div className="read-more-text">
                <Link to="/" style={{ color: "#28B498" }}>
                  Read More
                </Link>
                <hr />
              </div>
            </div>
          </div>
          <div className="ebooks">
            <div className="ebooks-icon" style={{ color: "#33d565" }}>
              <MdLibraryBooks />
            </div>
            <h3>MAGAZINE</h3>
            <div className="ebooks-text">
              A magazine is a treasure <br />
              trove of ideas, perspectives, and <br />
              stories waiting to be discovered.
              <br />
              <div className="read-more-text">
                <Link to="/" style={{ color: "#28B498" }}>
                  Read More
                </Link>
                <hr />
              </div>
            </div>
          </div>
          <div className="ebooks">
            <div className="ebooks-icon" style={{ color: "#4e8bfe" }}>
              <FaCalculator />
            </div>
            <div className="ebooks-title">
              <h3>TEENS & KIDS</h3>
              <div className="ebooks-text">
                The library is a playground <br /> for young minds, where books{" "}
                <br /> are the toys.
                <div className="read-more-text">
                  <Link to="/" style={{ color: "#28B498" }}>
                    Read More
                  </Link>
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
