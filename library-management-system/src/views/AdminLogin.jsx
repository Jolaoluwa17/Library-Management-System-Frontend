import React from "react";
import "./adminLogin.css";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { adminContext } from "../components/Context/Context";
import axios from "axios";
import config from "../config";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const AdminLogin = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(adminContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${config.baseURL}/auth/admin/login`, {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/dashboard");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };


  // To view password
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="admin-login1">
      <div className="admin-container">
        <div className="admin-login-header">
          <h1>Sign in</h1>
          <h5>
            Welcome to Admin sign in.
            <br />
            Please provide the right credentials to sign in
          </h5>
        </div>
        <div className="login-content">
          <form action="#" onSubmit={handleSubmit}>
            <div className="form-content">
              <div className="admin-form-item">
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  ref={userRef}
                />
              </div>
              <div className="admin-form-item">
                <input
                  type={passwordType}
                  id="password"
                  placeholder="Password"
                  ref={passwordRef}
                  onChange={handlePasswordChange}
                  value={passwordInput}
                />
                <i onClick={togglePassword} className="show-password-btn">
                  {passwordType === "text" ? (
                    <AiFillEyeInvisible />
                  ) : (
                    <AiFillEye />
                  )}
                </i>
              </div>
              <div className="admin-sign-in-btn">
                <button disabled={isFetching}>Sign in</button>
              </div>
            </div>
          </form>
        </div>
        <Link to="/">
          <p>go back home ?</p>
        </Link>
      </div>
    </div>
  );
};
