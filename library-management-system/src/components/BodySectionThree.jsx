import React from "react";
import "./bodySectionThree.css";
import { GiBlackBook } from "react-icons/gi";
import Arts from "./Arts";
import Biographies from "./Biographies";
import Business from "./Business";
import Computer from "./Computer";
import { useState } from "react";

export const BodySectionThree = () => {
    const [navBar1, setNavBar1] = useState("Arts");
    const [navBar2, setNavBar2] = useState();
  return (
    <div className="BodySectionThree" id="ourbooks">
      <div className="bodySectionThree-container">
        <div className="bodySectionThree-Container-header">
          <h1>Our Top Categories</h1>
          <p className="body-sectionthree-text">
            Here are some of the Top Categories of the Books Avaliable
          </p>
          <div className="body-book">
            <hr />
            <p className="boby-book-icon">
              <GiBlackBook />
            </p>
            <hr />
          </div>
        </div>
        <div className="bodySectionThree-nav-bar">
            <ul>
                <li onClick={() => setNavBar1("Arts")}>Arts and Photography</li>
                <li onClick={() => setNavBar1("Biographies")}>Biographies</li>
                <li onClick={() => setNavBar1("Business")}>Business</li>
                <li onClick={() => setNavBar1("Computer")}>Computer & Internet</li>
            </ul>
        </div>
        <div className="bodySectionThree-nav-content">
        {navBar1 === "Arts" && (
            <Arts
              active1={navBar1}
              setActive1={setNavBar1}
              active2={navBar2}
              setActive2={setNavBar2}
            />
          )}
          {navBar1 === "Biographies" && <Biographies />}
          {navBar1 === "Business" && <Business />}
          {navBar1 === "Computer" && <Computer />}
        </div>
      </div>
    </div>
  );
};
export default BodySectionThree;
