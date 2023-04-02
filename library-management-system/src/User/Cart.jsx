import React, { useState } from "react";
import "./cart.css";
import UserHeader from "../components/UserHeader";
// import CartCard from "../components/CartCard";
import { Link } from "react-router-dom";
import RequestPopup from "../components/RequestPopup";
import axios from "axios";
import config from "../config";

export const Cart = ({ user, cart, setCart }) => {
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };
  const [addNew, setAddNew] = useState(false);

  //For the date picker
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const currentDate = new Date().toISOString().slice(0, 10);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    const maxDate = new Date(
      new Date(e.target.value).getTime() + 14 * 24 * 60 * 60 * 1000
    )
      .toISOString()
      .slice(0, 10);
    setEndDate("");
    document.getElementById("datepicker1").setAttribute("min", currentDate);
    document.getElementById("datepicker2").setAttribute("min", e.target.value);
    document.getElementById("datepicker2").setAttribute("max", maxDate);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.baseURL}/request`, {
        user: user._id,
        books: cart,
        loanDate: startDate,
        returnDate: endDate,
      });
      alert("Successfully submitted");
      window.location.reload();
      console.log(response);
    } catch (err) {
      console.log(err);
      alert("Failed to submit");
    }
  };

  return (
    <div className="cart">
      <UserHeader user={user} />

      <div className="cart-main-container">
        <div className="cart-content-container">
          {cart.length === 0 && (
            <div className="cart-content-container1">
              <div className="cart-img">
                <img
                  src="https://res.cloudinary.com/dneawlwcp/image/upload/v1675916988/Final%20Year%20Project%20Pictures/icons8-shopping-cart-96_nuwk9v.png"
                  alt="cart_image"
                />
              </div>
              <div className="cart-header">
                <h4>Your cart is empty</h4>
                <h5>Browse our category and find the best books for you</h5>
              </div>
              <div className="library-btn">
                <Link to="/browseLibrary">
                  <button>GO TO LIBRARY</button>
                </Link>
              </div>
            </div>
          )}
          <article>
            {cart.map((item) => (
              <div className="cart-card" key={item._id}>
                <div className="cart-card-container">
                  <div className="cart-book-details-main">
                    <div className="cart-book-img">
                      <img src={item.bookPic.fileUrl} alt="" />
                    </div>
                    <div className="cart-book-details">
                      <div className="cart-details-main1">
                        <b>Title: </b>
                        {item.title}
                      </div>
                      <div className="cart-details-main1">
                        <b>Author: </b>
                        {item.author}
                      </div>
                      <div className="cart-details-main1">
                        <b>Category: </b>
                        {item.category.name}
                      </div>
                      <div className="cart-details-main1">
                        <b>Status: </b>
                        {item.status}
                      </div>
                      <div className="cart-details-main1">
                        <b>No. of Book: </b>
                        {item.copies}
                      </div>
                    </div>
                  </div>
                  <div className="cart-remove-btn">
                    <button onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </article>
        </div>
      </div>
      <div className="checkout-btn">
        <button onClick={() => setAddNew(true)}>Check Out</button>
      </div>
      <RequestPopup trigger={addNew} setTrigger={setAddNew}>
        <div className="cart-form">
          <div className="cart-form-header">
            <h3>Submittion Form</h3>
            <p>Please fill the form to submit request</p>
          </div>
          <div className="cart-form-details">
            <div className="form-item">
              <label htmlFor="">
                <b>Id</b>
              </label>
              <br />
              <input type="text" value={user._id} disabled />
            </div>
            <div className="form-item">
              <label htmlFor="">
                {" "}
                <b> Book's Wanted</b>
              </label>
              <div className="cart-book-list">
                {cart.map((item) => (
                  <input type="text" value={item.name} key={item._id} disabled />
                ))}
              </div>
            </div>
            <div className="form-item">
              <label htmlFor="">
                <b>Loaned Date</b>
              </label>
              <br />
              <input
                type="date"
                id="datepicker1"
                name="datepicker1"
                onChange={handleStartDateChange}
                min={currentDate}
                // onChange = {(e) => setLoanDate(e.target.value)}
              />
            </div>
            <div className="form-item">
              <label htmlFor="">
                <b>Return Date</b>
              </label>
              <br />
              <input
                type="date"
                id="datepicker2"
                name="datepicker2"
                onChange={handleEndDateChange}
                value={endDate}
                // onChange = {(e) => setReturnDate(e.target.value)}
              />
            </div>
          </div>
          <div className="cart-details-submit-btn">
            <button onClick={handleSubmit}>Confirm</button>
          </div>
        </div>
      </RequestPopup>
    </div>
  );
};
