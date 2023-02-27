import React from "react";
// import { BiSave } from "react-icons/bi";
import "./userSettings.css";

export const UserSettings = () => {
  return (
    <div className="user-settings">
      <div className="user-settings-header">
        <h2>Account</h2>
        <h4>Profile</h4>
        <p>
          This information will be accessed by the admin so please be notified.
        </p>
      </div>
      <div className="user-settings-content">
        <form action="#">
          <div className="name">
            <div className="user-form-item">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" />
            </div>
            <div className="user-form-item">
              <label htmlFor="lastName"> Last Name</label>
              <input type="text" id="lastName" />
            </div>
            <div className="user-form-item">
              <label htmlFor="userName">Username</label>
              <input type="text" id="userName" />
            </div>
          </div>
          <div className="profile-picture">
            <div className="user-form-item">
              <label htmlFor="photo">Photo</label>
              <div className="photo-content">
                <div className="picture-display"></div>
                <div className="change-btn">
                  <button>Change</button>
                </div>
                <div className="remove-btn">
                  <button>Remove</button>
                </div>
              </div>
            </div>
          </div>
          <div className="user-settings-line">
            <hr />
          </div>
        </form>
        <div className="user-personal-info">
          <div className="user-personal-info-header">
            <h4>Personal Information</h4>
            <p>
              This information can be accessed by the admin so please be
              notified
            </p>
          </div>
        </div>
        <form action="#">
          <div className="personal-information">
            <div className="user-form-item">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" />
            </div>
            <div className="user-form-item">
              <label htmlFor="phoneNo">Phone Number</label>
              <div className="phone-number">
                <input
                  type="text"
                  id="phoneNo"
                  placeholder="+234"
                  style={{ width: "65px", marginRight: "2%" }}
                  disabled
                />
                <input type="text" id="phoneNo" />
              </div>
            </div>
            <div className="user-form-item">
              <label htmlFor="address">Address</label>
              <input type="address" id="address" />
            </div>
            <div className="user-form-item">
              <label htmlFor="state">State</label>
              <input type="text" id="state" />
            </div>
          </div>
          <div className="user-settings-line2">
            <hr />
          </div>
        </form>
        <div className="user-change-password">
          <div className="change-password-header">
            <h4>Change Password</h4>
            <p>
              Please input your previous password before you can change to a new
              password
            </p>
          </div>
          <form action="#">
            <div className="change-password">
              <div className="user-form-item">
                <label htmlFor="previous-password">Previous Password</label>
                <input type="text" id="previous-password" />
              </div>
              <div className="user-form-item">
                <label htmlFor="new-password">New Password</label>
                <input type="text" id="new-password" />
              </div>
            </div>
          </form>
          <div className="account-creation">
            <p>This account was created on January 5th, 2017.</p>
          </div>
          <div className="user-settings-line3">
            <hr />
          </div>
        </div>
        <div className="end-btn">
          <div className="user-settings-cancel-btn">
            <button>Cancel</button>
          </div>
          <div className="user-settings-save-btn">
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
