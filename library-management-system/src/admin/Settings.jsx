import React from "react";
// css file is UserSettings
import config from "../config";
import axios from "axios";
import { useState, useEffect } from "react";
import { MdReportGmailerrorred } from "react-icons/md";

export const Settings = ({ admin }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [adminData, setAdminData] = useState({
    _id: "",
    username: "",
    email: "",
    userType: "",
    address: "",
    dateOfBirth: "",
    sex: "",
  });
  const admin1 = admin.admin;
  useEffect(() => {
    const getUserDetails = async () => {
      const res = await axios.get(`${config.baseURL}/user/${admin1._id}`);
      setAdminData(res.data);
    };
    getUserDetails();
  }, [admin1._id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdminData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    //update user data in API using axios.put
    axios
      .put(`${config.baseURL}/user/${admin._id}`, adminData)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (newPassword !== confirmNewPassword) {
      setError("Passwords do not match. Please Try Again");
      console.log(error);
    } else {
      try {
        const res = await axios.post(`${config.baseURL}/user/change-password`, {
          id: admin.admin._id,
          oldPassword,
          newPassword,
        });
        res.data && window.location.reload();
      } catch (err) {
        setError(err);
        console.log(err, error);
      }
    }
  };

  setTimeout(function () {
    setError(false);
  }, 3000);

  const [completeRegistration, setCompleteRegistration] = useState("");

  useEffect(() => {
    adminData.address === "" ||
    adminData.dateOfBirth === "" ||
    adminData.sex === ""
      ? setCompleteRegistration(true)
      : setCompleteRegistration(false);
  }, []);

  return (
    <div className="user-settings">
      <div className="user-settings-header">
        <h2>Account</h2>
        <h4>Profile</h4>
        <p>
          This information will be accessed by the admin so please be notified.
        </p>
        {completeRegistration && (
          <div className="error-message">
            <div className="error-notification">
              <MdReportGmailerrorred style={{ color: "red" }} />
            </div>
            <p style={{ color: "red" }}>
              {" "}
              Please complete your registration in other to use virtual library
              card
            </p>
          </div>
        )}
      </div>
      <div className="user-settings-content">
        <form action="#">
          <div className="personal-information">
            <div className="user-form-item">
              <label htmlFor="id">Id</label>
              <div className="id">
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={adminData._id}
                  disabled
                />
              </div>
            </div>
            <div className="user-form-item">
              <label htmlFor="phoneNo">Full Name</label>
              <div className="fullname">
                <input
                  type="text"
                  id="fullname"
                  name="username"
                  value={adminData.username}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="user-form-item">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={adminData.email}
                onChange={handleChange}
              />
            </div>
            <div className="user-form-item">
              <label htmlFor="userType">User Type</label>
              <input
                type="text"
                id="userType"
                name="userType"
                value={adminData.userType}
                disabled
              />
            </div>
            <div className="user-form-item">
              <label htmlFor="phoneNo">Phone No</label>
              <input
                type="text"
                id="phoneNo"
                name="phoneNo"
                value={adminData.phoneNo}
              />
            </div>
            <div className="user-form-item">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={adminData.address}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" onClick={handleUpdate} className="update-btn">
            Update
          </button>
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
                <input
                  type="password"
                  id="previous-password"
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              <div className="user-form-item">
                <label htmlFor="new-password">New Password</label>
                <input
                  type="password"
                  id="new-password"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="user-form-item">
                <label htmlFor="confirm-new-password">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirm-new-password"
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="password-do-not-match" style={{ color: "red" }}>
              {error}
            </div>
            <button onClick={handleSubmit}>Confirm Password</button>
          </form>
          <div className="user-settings-line3">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
