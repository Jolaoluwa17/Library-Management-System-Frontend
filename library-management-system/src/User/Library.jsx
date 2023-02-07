import React from "react";
import "./library.css";
import { IoSearch } from "react-icons/io5";
import { BiHelpCircle } from "react-icons/bi";
import LibraryContent1 from "./LibraryContent1";


export const Library = () => {
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
      </div>
      <div className="views-content">
      <LibraryContent1 />
      </div>
    </div>
  );
};
