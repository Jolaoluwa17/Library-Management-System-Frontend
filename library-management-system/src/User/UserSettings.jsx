import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./userSettings.css";
import config from "../config";
import { MdReportGmailerrorred } from "react-icons/md";

export const UserSettings = ({ user }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [userData, setUserData] = useState({
    _id: "",
    username: "",
    email: "",
    userType: "",
    matricNo: "",
    address: "",
    dob: "",
    sex: "",
  });

  const [profileError, setProfileError] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleSubmitProfilePic = async (evnt) => {
    evnt.preventDefault();
    setProfileError(false);
    try {
      const formData = new FormData();
      formData.append("profilePic", profilePic);

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      const res = await axios.post(
        `${config.baseURL}/user/${user._id}/profilepic`,
        formData,
        config
      );
      setProfilePic(null);
      alert("Profile pic uploaded successfully");
      console.log(res);
      window.location.reload();
    } catch (err) {
      setProfileError(true);
      alert("Failed to upload Profile pic");
    }
  };

  useEffect(() => {
    const getUserDetails = async () => {
      const res = await axios.get(`${config.baseURL}/user/${user._id}`);
      setUserData(res.data);
    };
    getUserDetails();
  }, [user._id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };
console.log(user);
  const handleUpdate = (event) => {
    event.preventDefault();
    //update user data in API using axios.put
    axios
      .put(`${config.baseURL}/user/${user._id}`, userData)
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
          id: user._id,
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
    userData.address === null ||
    userData.dob === null ||
    userData.sex === null
      ? setCompleteRegistration(true)
      : setCompleteRegistration(false);
  }, []);

  console.log(userData.dob);
  console.log(userData.sex);

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
        <form>
          <div className="personal-information">
            <div className="user-form-item">
              <label htmlFor="id">Id</label>
              <div className="id">
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={userData._id}
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
                  value={userData.username}
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
                value={userData.email}
                onChange={handleChange}
                disabled
              />
            </div>
            <div className="user-form-item">
              <label htmlFor="userType">User Type</label>
              <input
                type="text"
                id="userType"
                name="userType"
                value={userData.userType}
                disabled
              />
            </div>
            <div className="user-form-item">
              <label htmlFor="matricNo">Matric No</label>
              <input
                type="text"
                id="matricNo"
                name="matricNo"
                value={userData.matricNo}
                disabled
              />
            </div>
            <div className="user-form-item">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={userData.address}
                onChange={handleChange}
              />
            </div>
            <div className="user-form-item">
              <label htmlFor="DOB">Date of Birth</label>
              <input
                type="date"
                id="DOB"
                name="dob"
                value={userData.dob}
                onChange={handleChange}
              />
            </div>
            <div className="user-form-item">
              <label htmlFor="sex">Sex</label>
              <select
                name="sex"
                id="sex"
                value={userData.sex}
                onChange={handleChange}
              >
                <option value="selectuser">--Sex--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleUpdate}
            className="update-btn-user"
          >
            Update
          </button>
          <div className="user-settings-line2">
            <hr />
          </div>
        </form>

        <div className="upload-profile-pic">
          <div className="upload-profile-picture-header">
            <h4>Profile Picture</h4>
            <p>Please add a profile picture for identification.</p>
          </div>
          <form action="">
            <div className="user-form-item">
              <label>Profile Picture</label>
              <input
                type="file"
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.gif"
              />
              <p>{profileError}</p>
            </div>
            <button onSubmit={handleSubmitProfilePic}>Add Profile Picture</button>
          </form>
          <div className="user-settings-line3">
            <hr />
          </div>
        </div>

        <div className="user-change-password">
          <div className="change-password-header">
            <h4>Change Password</h4>
            <p>
              Please input your previous password before you can change to a new
              password
            </p>
          </div>
          <form>
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
