import React from "react";
import { useState, useEffect } from "react";
import TotalBookDetailsPopup from "../components/TotalBookDetailsPopup";
import "../admin/totalBooks.css";
import axios from "axios";
import config from "../config";

export const TotalBooksCard = ({ item, bookData, setBookData }) => {
  const { author, bookPic, category, description, publisher, status, title } =
    item;
  const [addNew, setAddNew] = useState(false);
  const [updatedData, setUpdatedData] = useState(item);
  const [isVisible, setIsVisible] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`${config.baseURL}/book/${item._id}`);
      window.location.reload();
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${config.baseURL}/book/${item._id}`, updatedData);
      setBookData(
        bookData.map((book) => (book._id === item._id ? updatedData : book))
      );
      setAddNew(false);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const [categoryData, setCatetegoryData] = useState([]);
  useEffect(() => {
    const fetchCategoryData = async () => {
      const res = await axios.get(`${config.baseURL}/category`);
      setCatetegoryData(res.data);
    };
    fetchCategoryData();
  }, []);

  return (
    <div className="total-book-card">
      <div className="book-cover">
        <div className="book">
          <img src={item.bookPic.fileUrl} alt="" />
          <span>
            <button onClick={() => setAddNew(true)}>View Details</button>
          </span>
        </div>
        <div className="book-title-main">{item.title}</div>
        <TotalBookDetailsPopup trigger={addNew} setTrigger={setAddNew}>
          <div className="user-view-first-section">
            <div className="view-details-container">
              <div className="view-details-container1">
                <div className="book-img-holder">
                  <img src={item.bookPic.fileUrl} alt="book image" />
                </div>
                <div className="book-details">
                  <div className="book-title">
                    <h2 >
                      {item.title}
                    </h2>
                  </div>
                  <div className="complete-details">
                    <div className={isVisible ? "edit book-details-form" : "edit2 book-details-form"}>
                      <h4>Title</h4>
                      <div className={isVisible ? "edit" : "edit2"}>
                        <input
                          type="text"
                          value={updatedData.title} // replace with the field value you want to update
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setUpdatedData((prevItem) => ({
                              ...prevItem,
                              title: newValue,
                            }));
                          }}
                        />
                      </div>
                    </div>
                    <div className="author book-details-form">
                      <h4>Author</h4>
                      <div className={isVisible ? "edit2" : "edit"}>
                        {item.author}
                      </div>
                      <div className={isVisible ? "edit" : "edit2"}>
                        <input
                          type="text"
                          placeholder="Position Title"
                          value={updatedData.author} // replace with the field value you want to update
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setUpdatedData((prevItem) => ({
                              ...prevItem,
                              author: newValue,
                            }));
                          }}
                        />
                      </div>
                    </div>
                    <div className="category book-details-form">
                      <h4>Category</h4>
                      <div className={isVisible ? "edit2" : "edit"}>
                        {item.category.name}
                      </div>
                      <div className={isVisible ? "edit" : "edit2"}>
                        <select
                          name="user-select"
                          id="user-select"
                          className="user-select"
                          value={updatedData.category._id}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setUpdatedData((prevItem) => ({
                              ...prevItem,
                              category: newValue,
                            }));
                          }}
                        >
                          <option value="" style={{ color: "grey" }}>
                            --select category--
                          </option>
                          {categoryData.map((item) => (
                            <option value={item._id} key={item._id}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="publisher book-details-form">
                      <h4>Publisher</h4>
                      <div className={isVisible ? "edit2" : "edit"}>
                        {item.publisher}
                      </div>
                      <div className={isVisible ? "edit" : "edit2"}>
                        <input
                          type="text"
                          placeholder="Position Title"
                          value={updatedData.publisher} // replace with the field value you want to update
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setUpdatedData((prevItem) => ({
                              ...prevItem,
                              publisher: newValue,
                            }));
                          }}
                        />
                      </div>
                    </div>
                    <div className="status book-details-form">
                      <h4>Status</h4>
                      <div className={isVisible ? "edit2" : "edit"}>
                        {item.status}
                      </div>
                      <div className={isVisible ? "edit" : "edit2"}>
                        <select
                          name="user-select"
                          id="user-select"
                          className="user-select"
                          value={updatedData.status}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setUpdatedData((prevItem) => ({
                              ...prevItem,
                              status: newValue,
                            }));
                          }}
                        >
                          <option value="" style={{ color: "grey" }}>
                            --select status--
                          </option>
                          <option value="on-shelf">On-shelf</option>
                          <option value="off-shelf">Off-shelf</option>
                        </select>
                      </div>
                    </div>
                    <div className="description book-details-form">
                      <h4>Description</h4>
                      <div className={isVisible ? "edit2" : "edit"}>
                        {item.description}
                      </div>
                      <div className={isVisible ? "edit" : "edit2"}>
                        <textarea
                          type="text"
                          placeholder="Position Title"
                          value={updatedData.description} // replace with the field value you want to update
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setUpdatedData((prevItem) => ({
                              ...prevItem,
                              description: newValue,
                            }));
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      isVisible ? "edit2 del-book-btn" : "edit del-book-btn"
                    }
                  >
                    <button onClick={handleDelete} className="del-btn">
                      Delete
                    </button>
                    <button
                      className="edit-btn"
                      onClick={() => setIsVisible(true)}
                    >
                      Edit
                    </button>
                  </div>
                  <div
                    className={
                      isVisible
                        ? "edit update-book-btn"
                        : "edit2 update-book-btn"
                    }
                  >
                    <button
                      type="submit"
                      onClick={handleUpdate}
                      className="update-btn"
                    >
                      Update
                    </button>
                    <button
                      type="submit"
                      className="cancel-btn"
                      onClick={() => setIsVisible(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TotalBookDetailsPopup>
      </div>
    </div>
  );
};
export default TotalBooksCard;
