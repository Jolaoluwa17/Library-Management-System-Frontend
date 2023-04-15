import React from "react";
import { useState, useEffect } from "react";
import config from "../config";
import axios from "axios";

export const BookId = ({ item }) => {
  const [books, setBooks] = useState([]);
  const requestId = item._id;
  const handleReturn = async () => {
    try {
      const res = await axios.patch(
        `${config.baseURL}/loan/${requestId}/return`,
        {
          books,
        }
      );
      window.location.replace("/adminTransactions");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCentralCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      const bookIds = item.books.map((book) => book._id);
      setBooks(bookIds);
    } else {
      setBooks([]);
    }
  };
  return (
    <div className="book-id">
      <div className="book-id-main">
        <div className="book-id-content">
          <div className="select-all">
            select all{" "}
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCentralCheckboxChange}
            />
          </div>
          {item.books &&
            item.books.map((book) => (
              <span key={book._id}>
                <li>{book.title}</li>
                <input
                  type="checkbox"
                  checked={isChecked || books.includes(book._id)}
                  value={book._id}
                  onChange={(e) => {
                    const bookId = e.target.value;
                    if (e.target.checked) {
                      setBooks((books) => [...books, bookId]);
                    } else {
                      setBooks((books) => books.filter((id) => id !== bookId));
                    }
                  }}
                />
              </span>
            ))}
        </div>
        <div className="details-returned-btn">
        <button onClick={handleReturn}>Return</button>
      </div>
      </div>
      
    </div>
  );
};

export default BookId;
