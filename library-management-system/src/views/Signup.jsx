import "./Signup.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import config from "../config";
import axios from "axios";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [matricNo, setMatricNo] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`${config.baseURL}/auth/register`, {
        username,
        email,
        password,
        userType,
        matricNo, 
        phoneNo
      });
      res.data && window.location.replace("/");
    } catch (err) {
      setError(true);
    }
  };

  const [userType, setUser] = useState("");
  const [studentInputVisible, setStudentInputVisible] = useState(false);

  const handleOnChange = (e) => {
    setUser(e.target.value);
  };
  useEffect(() => {
    userType === "student"
      ? setStudentInputVisible(true)
      : setStudentInputVisible(false);
  }, [userType]);

  setTimeout(function () {
    setError(false);
  }, 5000);

  return (
    <div className="signup-page">
      <div className="signup">
        <div className="signup-container">
          <div className="signup-left-navigation">
            <div className="signup-header">
              <h1>GET STARTED</h1>
              <p>
                Already got an account{" "}
                <Link to="/login" className="link">
                  log in
                </Link>
              </p>
            </div>
            <form action="" className="signup-form" onSubmit={handleSubmit}>
              <div className="signup-form-content">
                <div className="signup-form-item">
                  <input
                    type="text"
                    id="fullname"
                    placeholder="Full Name"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="user-option">
                  <div className="user-select-options">
                    <select
                      name="user-select"
                      id="user-select"
                      className="user-select"
                      value={userType}
                      onChange={handleOnChange}
                    >
                      <option value="selectuser" style={{ color: "grey" }}>
                        --User--
                      </option>
                      <option value="student">Student</option>
                      <option value="non-student">Non-Student</option>
                    </select>
                  </div>
                </div>
                <div className="signup-form-item">
                  {studentInputVisible && (
                    <div className="student-input">
                      <input
                        type="text"
                        id="matric-no"
                        placeholder="Matric No."
                        onChange={(e) => setMatricNo(e.target.value)}
                      />
                    </div>
                  )}
                </div>
                <div className="signup-form-item">
                  <input type="text" id="phone-no" placeholder="Phone No." onChange={(e) => setPhoneNo(e.target.value)}/>
                </div>
                <div className="signup-form-item">
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="signup-form-item">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="signup-form-checkbox">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox">
                    {" "}
                    I agree to{" "}
                    <Link to="/" className="link">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/" className="link">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                <div type="submit" className="signup-btn">
                  <button>Register</button>
                </div>
              </div>
            </form>
            {error && (
              <span style={{ color: "red", marginTop: "10px", marginLeft: "6%" }}>
                Something Wrong! <br />
                This may be due to not filling all avaliable fields
              </span>
            )}
          </div>
          <div className="signup-right-navigation"></div>
        </div>
      </div>
    </div>
  );
};
