import React from 'react'
import { BiSave } from "react-icons/bi"

export const UserSettings = () => {
  return (
    <div className="user-settings">
        <div className="settings-header">
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
      </div>

    </div>
  )
}
