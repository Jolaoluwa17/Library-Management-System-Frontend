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
      {/* <div className="settings-header">
        <h2>Welcome to Control Panel</h2>
        <h5>User/Control Panel</h5>
      </div>
      <div className="settings-content">
        <div className="profile-picture-container">
          <div className="profile-picture"></div>
          <div className="change-pic-btn">
            <button>Change profile picture</button>
          </div>
        </div>
        <div className="admin-info">
          <div className="admin-info-title">
            <h2>Personal Information</h2>
          </div>
          <form action="#">
            <div className="form">
            <div className="form-item">
              <label htmlFor="firstName" className="label-width">
                First Name
              </label>
              <br />
              <input type="text" id="firstName" placeholder="John" />
            </div>
            <div className="form-item">
              <label htmlFor="lastName" className="label-width">
                Last Name
              </label>
              <br />
              <input type="text" id="lastName" placeholder="Doe" />
            </div>
            <div className="form-item">
              <label htmlFor="email" className="label-width">
                Email
              </label>
              <br />
              <input type="text" id="email" placeholder="jdoe@gmail.com" />
            </div>
            <div className="form-item">
              <label htmlFor="phone-no">Phone No.</label>
              <br />
              <div className="phone-number">
                    <input
                      type="text"
                      placeholder="+234"
                      disabled
                      style={{ width: "55px", marginRight: "2%" }}
                    />
                    <input
                      type="text"
                      id="phone-no"
                      placeholder="8155668282"
                      style={{ width: "400px" }}
                    />
                  </div>
            </div>
            <div className="form-item">
              <label htmlFor="address">Address</label>
              <br />
              <input
                type="text"
                id="address"
                placeholder="No. 24 Lanre Awolokun, Gbagada Phase II"
              />
            </div>
            <div className="form-item">
              <label htmlFor="city">City</label>
              <br />
              <input type="text" id="city" placeholder="Ikeja" />
            </div>
            <div className="form-item">
              <label htmlFor="state">State</label>
              <br />
              <input type="text" id="state" placeholder="Lagos" />
            </div>
            </div>
          </form>
          <div className="admin-info-title">
            <h2>Password Change</h2>
          </div>
          <form action="#">
            <div className="form">
            <div className="form-item">
              <label htmlFor="username">Username</label>
              <br />
              <input type="text" id="username" placeholder="John_17" />
            </div>
            <div className="form-item">
              <label htmlFor="old-password">Old Password</label>
              <br />
              <input type="password" id="old-password" placeholder="" />
            </div>
            <div className="form-item">
              <label htmlFor="new-password">New Password</label>
              <br />
              <input type="password" id="new-password" placeholder="" />
            </div>
            </div>
          </form>
          <div className="save-btn">
            <button><BiSave />Save</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};
