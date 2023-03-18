import React from "react";
import "./browseLibrary.css";
import { BookCard } from "./BookCard";
// import List from "../Data/data";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
// import config from "../config";
import UserHeader from "../components/UserHeader";

export const BrowseLibrary = ({ user, handleClick }) => {
  const [pendingData, setPendingData] = useState([]);

  useEffect(() => {
    const fetchPendingData = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setPendingData(res.data);
    };
    fetchPendingData();
  }, []);

  // const [search, setSearch] = useState("");
  return (
    <div className="browse-library">
      <UserHeader  user={user}/>
      <div className="browse-library-content">
        {pendingData
          // .filter((item) => {
          //   return search.toLowerCase() === ""
          //     ? item
          //     : item.authour.toLowerCase().includes(search);
          // })
          .map((item) => (
            <BookCard key={item.id} item={item} handleClick = {handleClick} />
          ))}
      </div>
    </div>
  );
};
export default BrowseLibrary;
