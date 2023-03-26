import React, { useEffect, useState } from "react";
import "./totalBooks.css";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import config from "../config";
import TotalBooksCard from "../components/TotalBooksCard";

export const TotalBooks = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const fetchBookData = async () => {
      const res = await axios.get(`${config.baseURL}/book`);
      setBookData(res.data);
    };
    fetchBookData();
  }, [bookData._id]);
  const [search, setSearch] = useState("");

  

  return (
    <div className="TotalBooks">
      <div className="totalBooks-header">
        <div className="header">
          <h2>Welcome to the Book Library</h2>
          <h5>Admin/Book Library</h5>
        </div>
        <div className="search-bar">
        <div className="search-btn-main">
            <IoSearch className="search-btn" />
          </div>
          <input type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search by name and category" />
          
        </div>
      </div>
      <div className="total-books-content">
        {bookData
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(search) || item.category.name.toLowerCase().includes(search);
          })
          .map((item) => (
            <TotalBooksCard key={item._id} item={item} bookData={bookData} setBookData={setBookData} />
          ))}
      </div>
    </div>
  );
};
