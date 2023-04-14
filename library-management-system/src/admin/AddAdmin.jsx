import React from "react";
import "./addAdmin.css";
import { useState } from "react";
import config from "../config";
import axios from "axios";
import { RotatingSquare } from "react-loader-spinner";

export const AddAdmin = ({ admin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [wrongPassword, setWrongPassword] = useState("");

  const [submitAdminLoading, setSubmitAdminLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setWrongPassword(false);
    setSubmitAdminLoading(true);
    if (password !== confirmPassword) {
      setWrongPassword("Passwords do not match. Please Try Again");
    } else {
      try {
        const response = await axios.post(`${config.baseURL}/auth/register`, {
          userType: "admin",
          password,
          email,
          username,
        });
        alert("Admin created successfully");
        window.location.reload();
        setSubmitAdminLoading(false);
        console.log(response);
      } catch (err) {
        console.log(err);
        alert("Failed to add Admin");
        window.location.reload();
        setSubmitAdminLoading(false);
        setError(err.response.data.message);
      }
    }
  };

  return (
    <div className="add-admin">
      <div className="add-admin-header">
        <h2>Welcome to Admin</h2>
        <h5>{admin.admin.username}/Add Admin</h5>
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
                placeholder="Olusanya Jolaoluwa"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-item">
              <label htmlFor="">Email</label> <br />
              <input
                value={email}
                type="email"
                placeholder="johndoe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-item">
              <label htmlFor="">Password</label> <br />
              <input
                value={password}
                type="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-item">
              <label htmlFor="">Confirm Password</label> <br />
              <input
                value={confirmPassword}
                type="password"
                placeholder="********"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="password-do-not-match" style={{ color: "red" }}>
            {wrongPassword}
          </div>
          <div className="admin-submit-btn">
            {submitAdminLoading ? (
              <RotatingSquare
                type="TailSpin"
                color="#28b498"
                height={30}
                width={80}
                wrapperStyle={{}}
              />
            ) : (
              <button type="submit" disabled={username === "" || password === "" || confirmPassword === "" || email === ""}>Submit</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
