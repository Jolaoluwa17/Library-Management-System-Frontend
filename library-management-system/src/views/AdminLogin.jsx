import React from "react";
import "./adminLogin.css";
import { useContext, useRef } from "react";
import { adminContext } from "../components/Context/Context";
import axios from "axios";
import config from "../config";

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
  return (
    <div className="admin-login1">
      <div className="admin-container">
        <div className="admin-login-header">
          <h1>SIGN IN</h1>
        </div>
        <div className="login-content">
        <form action="#" onSubmit={handleSubmit}>
          <div className="form-content">
            <div className="admin-form-item">
              <input type="text" id="email" placeholder="Email" ref={userRef}/>
            </div>
            <div className="admin-form-item">
              <input type="password" id="password" placeholder="Password" ref={passwordRef} />
            </div>
            <div className="admin-sign-in-btn">
              <button disabled={isFetching}>Sign in</button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};
