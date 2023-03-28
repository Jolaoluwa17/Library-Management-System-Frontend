import React from "react";
import "./addAdmin.css";
import { useState } from "react";
import config from "../config";
import axios from "axios";

export const AddAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [dob, setDob] = useState("");
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${config.baseURL}/auth/register`,
        {
          userType: "admin",
          address,
          dob,
          password,
          email,
          sex,
          phoneNo,
          username
        }
      );
      alert("Admin created successfully");
      window.location.reload()
      console.log(response);
    } catch (err) {
      console.log(err);
      alert("Failed to add Admin");
      setError(err.response.data.message);
    }
  };


  return (
    <div className="add-admin">
      <div className="add-admin-header">
        <h2>Welcome to Admin</h2>
        <h5>Admin/Add Admin</h5>
      </div>
      <div className="add-admin-content">
        <div className="admin-info-title">
          <h2>Admin Information</h2>
          <p>Please input the information of the specific book.</p>
        </div>
        <form action="#" onSubmit={handleSubmit}>
          <div className="form">
            <div className="form-item">
              <label htmlFor="">Full Name</label> <br />
              <input
                type="text"
                id="fullname"
                placeholder="Olusanya Jolaoluwa"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-item">
              <label htmlFor="">Email</label> <br />
              <input
                value={email}
                type="email"
                id="email"
                placeholder="johndoe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-item">
              <label htmlFor="">Password</label> <br />
              <input
                value={password}
                type="password"
                id="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-item">
              <label htmlFor="">Phone No</label> <br />
              <input
                type="text"
                id="phoneno"
                placeholder="08155668282"
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <div className="form-item">
              <label htmlFor="">Date of Birth</label> <br />
              <input
                type="date"
                id="dob"
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className="form-item">
              <label htmlFor="">Address</label> <br />
              <input
                type="text"
                id="address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-item">
              <label htmlFor="">Sex</label> <br />
              <select
                name="sex"
                id="sex"
                className="sex"
                onChange={(e) => setSex(e.target.value)}
              >
                <option>--Please confirm the admin sex--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="admin-submit-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="error-message">
          {error && (
            <span style={{ color: "red", marginTop: "10px" }}>
              SOMETHING WENT WRONG !!! <br />
              This may be due to not filling all avaliable fields
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
