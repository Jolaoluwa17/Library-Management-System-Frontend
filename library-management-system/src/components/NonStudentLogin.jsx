import React from "react";
import "../views/Login.css";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineLockClosed } from "react-icons/hi";
import { useContext, useRef } from "react";
import { nonStudentContext } from "../components/Context/Context";
import axios from "axios";
import config from "../config";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import { RotatingSquare } from "react-loader-spinner";

const NonStudentLogin = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(nonStudentContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${config.baseURL}/auth/non-student/login`, {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/library");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      if (err.response.status === 500) {
        setErrorMessage("Network Error");
      } else {
        setErrorMessage("Incorrect Email or Password");
      }
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
    <div className="user-login">
      <div className="user-login-form">
        <div className="login-header">
          <h1>SIGN IN</h1>
          <div className="left-line">
            <hr />
          </div>
          <div className="right-line">
            <hr />
          </div>
          <p>Log into an existing account</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-content">
            <div className="form-item">
              <i className="login-user-icon">
                <FaRegUserCircle />
              </i>
              <input type="email" placeholder="Email" ref={userRef} />
            </div>
            <div className="form-item">
              <i className="login-user-icon">
                <HiOutlineLockClosed />
              </i>
              <input
                type={passwordType}
                placeholder="Password"
                ref={passwordRef}
                onChange={handlePasswordChange}
                value={passwordInput}
              />
              <i onClick={togglePassword} className="login-show-password-btn">
                {passwordType === "text" ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </i>
            </div>

            <div className="sign-in-btn">
              {/* Conditionally render error message */}
              {errorMessage && (
                <div
                  className="error-message"
                  style={{
                    color: "red",
                    marginLeft: "21%",
                    marginTop: "-3%",
                    marginBottom: "2%",
                  }}
                >
                  <BiError style={{ paddingTop: "0.5%", fontSize: "20px" }} />{" "}
                  {errorMessage}
                </div>
              )}
              {isFetching ? (
                <RotatingSquare
                  type="TailSpin"
                  color="#28b498"
                  height={30}
                  width={700}
                />
              ) : (
                <button type="submit" disabled={isFetching}>
                  Sign in
                </button>
              )}
            </div>
            <p className="signup_link">
              Not registered yet?
              <Link
                to="/signup"
                style={{ color: "#28B498" }}
                className="signup_link_text"
              >
                Create an account
              </Link>
            </p>
            <p className="signup_link">
              Do not Remember password?
              <Link
                to="/PasswordRecovery"
                style={{ color: "#28B498" }}
                className="signup_link_text"
              >
                Reset Password
              </Link>{" "}
              or
              <Link
                to="/"
                style={{ color: "#28B498" }}
                className="signup_link_text"
              >
                Go Home
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NonStudentLogin;
