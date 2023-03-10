import React from "react";
import "./library.css";
// import { IoSearch } from "react-icons/io5";
import LibraryContent1 from "./LibraryContent1";
import UserHeader from "../components/UserHeader";

export const Library = ({student , nonStudent}) => {
  // console.log(student);
  return (
    <div className="library">
      <UserHeader student={student} nonStudent={nonStudent} />
      <div className="views-content">
        <LibraryContent1 />
      </div>
    </div>
  );
};
