import React from "react";
import "./adminLogin.css";

export const AdminLogin = () => {
  return (
    <div className="admin-login1">
      <div className="admin-container">
        <div className="admin-login-header">
          <h1>SIGN IN</h1>
        </div>
        <div className="login-content">
        <form action="#">
          <div className="form-content">
            <div className="admin-form-item">
              <input type="text" id="email" placeholder="Email" />
            </div>
            <div className="admin-form-item">
              <input type="password" id="password" placeholder="Password" />
            </div>
            <div className="admin-sign-in-btn">
              <button>Sign in</button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};
