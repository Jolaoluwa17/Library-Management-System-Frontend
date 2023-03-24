import React from "react";
import "./browseLibrary.css";
import { BookCard } from "./BookCard";
// import List from "../Data/data";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import UserHeader from "../components/UserHeader";
import config from "../config";

export const BrowseLibrary = ({ user, handleClick, cartFull, setCartFull }) => {
  const [pendingData, setPendingData] = useState([]);

  useEffect(() => {
    const fetchPendingData = async () => {
      const res = await axios.get(`${config.baseURL}/book`);
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
          .map((item) => (
            <BookCard item={item} handleClick = {handleClick} cartFull = {cartFull} setCartFull={setCartFull} />
          ))}
      </div>
    </div>
  );
};
export default BrowseLibrary;
