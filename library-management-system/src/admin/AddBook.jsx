import React from "react";
import "./addBook.css";
import { useState, useEffect } from "react";
import config from "../config";
import axios from "axios";
import { RotatingSquare } from "react-loader-spinner";

export const AddBook = ({ admin }) => {
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
  const [availableCopies, setAvailableCopies] = useState("");
  const [totalCopies, setTotalCopies] = useState("");
  const [error, setError] = useState(false);
  const [file, setFile] = useState(null);
  const [verificationError, setVerificationError] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setPreview(fileReader.result);
      };
      fileReader.readAsDataURL(selectedFile);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreview(null);
  };

  const handleButtonClick = () => {
    document.querySelector('input[type="file"]').click();
  };

  
  const [submitBookLoading, setSubmitBookLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setSubmitBookLoading(true);
    setVerificationError(false);
    if (availableCopies !== totalCopies) {
      setVerificationError("Copies do not match. Please Try Again");
    } else {
      try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("author", author);
        formData.append("year", year);
        formData.append("category", category);
        formData.append("availableCopies", availableCopies);
        formData.append("totalCopies", totalCopies);
        formData.append("publisher", publisher);
        formData.append("description", description);
        formData.append("bookPic", file);
        const res = await axios.post(`${config.baseURL}/book`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setSubmitBookLoading(false);
        alert("Book Successfully Submitted");
        res.data && window.location.reload();
      } catch (err) {
        setError(true);
        setSubmitBookLoading(false);
      }
    }
  };

  return (
    <div className="AddBook">
      <div className="add-book-header">
        <h2>Welcome to Book</h2>
        <h5>{`${admin.admin.username}/Add Books`}</h5>
      </div>
      <div className="add-book-content">
        <div className="book-info">
          <div className="book-info-title">
            <h2>Book Information</h2>
            <p>Please input the information of the specific book.</p>
          </div>
          <div className="add-book-content">
            <div className="form">
              <div className="form-item">
                <label htmlFor="bookImg" className="label-width">
                  Book Image
                </label>
                <br />
                {!file ? (
                  <>
                    <input
                      type="file"
                      accept=".jpg,.png,.jpeg"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                    <button
                      className="addFile"
                      onClick={handleButtonClick}
                      style={{
                        padding: "7px",
                        paddingLeft: "12px",
                        paddingRight: "12px",
                        marginTop: "1%",
                      }}
                    >
                      Add Image
                    </button>
                  </>
                ) : (
                  <>
                    <p>Selected file: {file.name}</p>
                    <button
                      className="remove-file Create"
                      onClick={handleRemoveFile}
                      style={{
                        padding: "7px",
                        paddingLeft: "12px",
                        paddingRight: "12px",
                        marginTop: "1%",
                        backgroundColor: "red",
                      }}
                    >
                      Remove File
                    </button>
                    {error && <p className="error">{error}</p>}
                  </>
                )}
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
                  className="category-select"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">--Select a category--</option>
                  {categoryData.map((item) => (
                    <option value={item._id} key={item._id}>
                      {item.name}
                    </option>
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
              <div className="form-item">
                <label htmlFor="copies" className="label-width">
                  Avaliable Copies
                </label>
                <br />
                <input
                  type="number"
                  min="1"
                  id="copies"
                  placeholder="5"
                  onChange={(e) => setAvailableCopies(e.target.value)}
                />
              </div>
              <div className="form-item">
                <label htmlFor="inventory-copies" className="label-width">
                  Inventory Copies
                </label>
                <br />
                <input
                  type="number"
                  min="1"
                  id="inventory-copies"
                  placeholder="5"
                  onChange={(e) => setTotalCopies(e.target.value)}
                />
                <div className="" style={{ color: "red" }}>
                  {verificationError}
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
                    resize: "none",
                  }}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="preview-book-image">
              <div className="preview-header">
                <h3>Preview Image</h3>
              </div>
              <div className="preview-image">
                {preview && <img src={preview} alt="Preview" />}
              </div>
            </div>
          </div>
          <div className="add-book-submit">
            {submitBookLoading ? (
              <RotatingSquare
                type="TailSpin"
                color="#28b498"
                height={30}
                width={80}
                wrapperStyle={{}}
              />
            ) : (
              <button
                onClick={handleSubmit}
                disabled={
                  title === "" ||
                  author === "" ||
                  year === "" ||
                  category === "" ||
                  publisher === "" ||
                  description === "" ||
                  availableCopies === "" ||
                  totalCopies === "" ||
                  file === null
                }
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
