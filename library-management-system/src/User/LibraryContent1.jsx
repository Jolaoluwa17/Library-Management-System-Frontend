import React from "react";
import "./library.css";
import Autoplay from "../components/ImageSlider";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import SkeletonLoader from "../components/SkeletonLoader";

export const LibraryContent1 = () => {
  const [bookData, setBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookData = async () => {
      const res = await axios.get(`${config.baseURL}/book`);
      const reversedData = res.data.reverse();
      const limitedData = reversedData.slice(0, 4);
      setBookData(limitedData);
      setIsLoading(false);
    };
    fetchBookData();
  }, [bookData._id]);

  const [randomBookData, setRandomBookData] = useState([]);
  const [randomLoading, setRandomLoading] = useState(true);

  useEffect(() => {
    const fetchBookData = async () => {
      const res = await axios.get(`${config.baseURL}/book`);
      const books = res.data;
      const randomBooks = [];
      while (randomBooks.length < 4 && books.length > 0) {
        const index = Math.floor(Math.random() * books.length);
        randomBooks.push(books.splice(index, 1)[0]);
      }
      setRandomBookData(randomBooks);
      setRandomLoading(false);
    };
    fetchBookData();
  }, []);

  return (
    <div className="library-content-1">
      <div className="library-content">
        <div className="library-content-sidebar">
          <div className="book-slider">
            <Autoplay
              randomBookData={randomBookData}
              randomLoading={randomLoading}
            />
          </div>
          <div className="ads">
            <div className="first-part">
              <b>
                "To be yourself in a world that is constantly trying to make you
                something else is the greatest accomplishment." <br />~ Ralph
                Waldo Emerson
              </b>
            </div>
            <div className="first-part">
              <b>
                "The most valuable of all talents is that of never using two
                words when one will do." <br />~ Thomas Jefferson
              </b>
            </div>
            <div className="first-part">
              <b>
                "You don't write because you want to say something, you write
                because you have something to say." <br />~ F. Scott Fitzgerald
              </b>
            </div>
            <div className="first-part">
              <b>
                "If you don't have time to read, you don't have the time (or the
                tools) to write. Simple as that" <br />~ Stephen King
              </b>
            </div>
          </div>
        </div>
        <div className="top-picks">
          <div className="top-picks-title">
            <h2>Latest Books</h2>
          </div>
          <div className="top-picks-book">
            {isLoading ? (
              <div className="top-picks-book1">
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
              </div>
            ) : (
              bookData.map((item) => (
                <div className="individual-books" key={item._id}>
                  <div className="book-img">
                    <img
                      src={item.bookPic.fileUrl}
                      alt={`${item.title} Book Picture`}
                    />
                  </div>
                  <div className="book-title">{item.title}</div>
                </div>
              ))
            )}
          </div>
          <div className="all-books-icon">
            <Link to="/browselibrary">
              <button>All Books</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LibraryContent1;
