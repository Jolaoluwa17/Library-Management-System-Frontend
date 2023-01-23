import React from "react";
import "./passwordRecovery.css";
import { Link } from "react-router-dom";

export const PasswordRecovery = () => {
  return (
    <div className="Password-Recovery">
      <div className="password-recovery">
        <div className="password-container">
          <div className="password-left-navigation">
            <div className="password-header">
              <h2>Password recovery</h2>
              <p>
                Please fill in the email you have used to create an account
                <br /> and we will send you a reset link
              </p>
            </div>
            <div className="password-content">
                <label htmlFor="Email">E-mail</label>
                <input type="email" id="Email" />
            </div>
            <div className="password-line">
            <hr />
            </div>
            <div className="reset-password-btn">
                <button>Reset my password</button>
            </div>
            <div className="password-login">
                <Link to="/login" style={{ color: "#28B498", textDecoration: "none", cursor: "pointer" }}>Back to login</Link>
            </div>
          </div>
          <div className="password-right-navigation"></div>
        </div>
      </div>
    </div>
  );
};
