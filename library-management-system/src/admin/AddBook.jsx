import React from "react";
import "./addBook.css";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export const AddBook = () => {
  const [categoryData, setCatetegoryData] = useState([]);

  useEffect(() => {
    const fetchCategoryData = async () => {
      const res = await axios.get(`${config.baseURL}/category`);
      setCatetegoryData(res.data);
    };
    fetchCategoryData();
  }, []);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [publisher, setPublisher] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.prevent.Default();
    setError(false);
    try {
      const res = await axios.post(`${config.baseURL}/book`, {
        title,
        author,
        year,
        category,
        publisher,
        description,
        status,
      });
      res.data && window.location.reload();
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="AddBook">
      <div className="add-book-header">
        <h2>Welcome to Book</h2>
        <h5>Admin/Add Book</h5>
      </div>
      <div className="add-book-content">
        <div className="book-info">
          <div className="book-info-title">
            <h2>Book Information</h2>
            <p>Please input the information of the specific book.</p>
          </div>
          <form action="#" onSubmit={handleSubmit}>
            <div className="form">
              <div className="form-item">
                <label htmlFor="bookImg" className="label-width">
                  Book Image
                </label>
                <br />
                <input type="file" id="bookImg" />
              </div>
              <div className="form-item">
                <label htmlFor="bookName" className="label-width">
                  Book Title
                </label>
                <br />
                <input
                  type="text"
                  id="bookName"
                  placeholder="The Great Gatsby"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-item">
                <label htmlFor="authorName" className="label-width">
                  Author's Name
                </label>
                <br />
                <input
                  type="text"
                  id="authorName"
                  placeholder="F. Scott Fitzgerald"
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="form-item">
                <label htmlFor="year" className="label-width">
                  Year of Publication
                </label>
                <br />
                <input
                  type="text"
                  id="year"
                  placeholder="1925"
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div className="form-item">
                <label htmlFor="category" className="label-width">
                  Category
                </label>
                <br />
                <select
                  name="category-select"
                  id="category-select"
                  className="category-select"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="selectuser">--Select a category--</option>
                  {categoryData.map((item) => (
                    <option value={item.name}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-item">
                <label htmlFor="publisher" className="label-width">
                  Publisher
                </label>
                <br />
                <input
                  type="text"
                  id="publisher"
                  placeholder="Charles Scribner's Sons"
                  onChange={(e) => setPublisher(e.target.value)}
                />
              </div>
            </div>
            <div className="form-item">
              <label htmlFor="description" className="label-width">
                Description
              </label>
              <br />
              <textarea
                type="text"
                id="description"
                placeholder="The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan"
                style={{
                  width: "750px",
                  height: "150px",
                  fontSize: "14px",
                  padding: "10px",
                  borderWidth: "thin",
                  borderRadius: "5px",
                  // borderColor: "#eeeeee",
                }}
                onChange ={(e) => setDescription(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
      <button>Submit</button>
    </div>
  );
};
