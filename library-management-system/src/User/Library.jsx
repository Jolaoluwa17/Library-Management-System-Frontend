import React from "react";
import "./library.css";
import { IoSearch } from "react-icons/io5";
import { BiHelpCircle } from "react-icons/bi";
import LibraryContent1 from "./LibraryContent1";
import { GiHamburgerMenu } from "react-icons/gi";
import CategorySidebar from "../components/CategorySidebar";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";

export const Library = () => {
  const [isCategorySidebar, setIsCategorySidebar] = useState("false")
  return (
    <div className="library">
      <div className="library-header">
        <div className="library-header-title">
          <h2>Welcome to Babcock Library</h2>
          <h5>Olusanya Jolaoluwa/Babcock Library</h5>
        </div>
        <div className="library-search-bar">
          <div className="search-input">
            <div>
              <IoSearch className="library-search-icon" />
            </div>
            <input type="search" placeholder="Search by name and category" />
          </div>
          <button>Search</button>
        </div>
        <div className="help">
          <div className="help-icon">
            <BiHelpCircle />
          </div>
          <h4>Help</h4>
        </div>
        <div className="help">
          <div className="help-icon">
            <GiHamburgerMenu onClick={() => setIsCategorySidebar(false)} className ={isCategorySidebar ? "hamburger-icon" : "hamburger-icon1"}/>
            <MdOutlineCancel onClick={() => setIsCategorySidebar(true)} className ={isCategorySidebar ? "linecancel-icon" : "linecancel-icon1"}/>
          </div>
        </div>
        <div className={isCategorySidebar ? "category-side-bar" : "category-side-bar1"}>
          <CategorySidebar />
        </div>
      </div>
      <div className="views-content">
      <LibraryContent1 />
      </div>
    </div>
  );
};
