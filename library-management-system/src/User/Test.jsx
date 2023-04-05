import React from "react";
import "./browseLibrary.css";
import { BookCard } from "./BookCard";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import config from "../config";

export const Test = ({ user, handleClick, cartFull }) => {
  const [pendingData, setPendingData] = useState([]);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const AU = urlParams.get("title");
  const AN = urlParams.get("name");

  useEffect(() => {
    const fetchPendingData = async () => {
      const res = await axios.get(`${config.baseURL}/book`);
      setPendingData(res.data);
    };
    fetchPendingData();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="search-result-library">
      <div className="search-result-header">
        <div className="browse-previous-btn" onClick={() => navigate(-1)}>
          <IoArrowBackOutline />
        </div>
        <div className="search-result-header-title">
          <h2>Welcome to Babcock Library</h2>
          <h5>{`${user.username} / Babcock Library`}</h5>
        </div>
      </div>
      <div className="browse-library-content">
        {pendingData
          .filter((item) => {
            return item.title.includes(AU) || item.category.name.includes(AN);
          })
          .map((item) => (
            <BookCard key={item._id} item={item} handleClick={handleClick} cartFull={cartFull} user={user}/>
          ))}
      </div>
    </div>
  );
};
