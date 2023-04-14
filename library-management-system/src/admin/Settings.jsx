import React from "react";
// css file is UserSettings
import config from "../config";
import axios from "axios";
import { useState, useEffect } from "react";
import { MdReportGmailerrorred } from "react-icons/md";
import CategoryTableCard from "../components/CategoryTableCard";
import AddCategoryPopup from "../components/AddCategoryPopup";
import UpdateCategoryPopup from "../components/UpdateCategoryPopup";
import { UpdateCategory } from "../components/UpdateCategory";
import { RotatingSquare } from "react-loader-spinner";

export const Settings = ({ admin }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [addNew, setAddNew] = useState(false);
  const [adminData, setAdminData] = useState({
    username: "",
    email: "",
    userType: "",
    address: "",
    dob: "",
    sex: "",
    phoneNo: "",
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

  const [userUpdateLoading, setUserUpdateLoading] = useState(false);
  const handleUpdate = (event) => {
    event.preventDefault();
    setUserUpdateLoading(true);
    //update user data in API using axios.put
    axios
      .put(`${config.baseURL}/user/${admin1._id}`, adminData)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setUserUpdateLoading(false); // Hide the loader
      });
  };

  const [error, setError] = useState("");
  const [changePasswordLoading, setChangePasswordLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setChangePasswordLoading(true);
    setError(false);
    if (newPassword !== confirmNewPassword) {
      setError("Passwords do not match. Please Try Again");
    } else {
      try {
        const res = await axios.post(`${config.baseURL}/user/change-password`, {
          id: admin.admin._id,
          oldPassword,
          newPassword,
        });
        res.data && alert("Change Password Successfully");
        window.location.reload();
        setChangePasswordLoading(false);
      } catch (err) {
        setError(err);
        console.log(err);
      }
    }
  };

  setTimeout(function () {
    setError(false);
  }, 3000);

  const [name, setCategory] = useState("");
  const [categoryLoading, setCategoryLoading] = useState(false);
  const handleSubmitCategory = async (e) => {
    e.preventDefault();
    setCategoryLoading(true);
    setCategory(false);
    try {
      const res = await axios.post(`${config.baseURL}/category`, {
        name,
      });
      res.data && alert("New Category Uploaded");
      window.location.reload();
      setCategoryLoading(false);
    } catch (err) {
      setError(true);
      alert("An error occurred");
      setCategoryLoading(false);
    }
  };

  const [categoryData, setCatetegoryData] = useState([]);

  useEffect(() => {
    const fetchCategoryData = async () => {
      const res = await axios.get(`${config.baseURL}/category`);
      setCatetegoryData(res.data);
    };
    fetchCategoryData();
  }, []);

  return (
    <div className="user-settings">
      <div className="user-settings-header">
        <h2>Account</h2>
        <h4>Profile</h4>
        <p>
          This information will be accessed by the admin so please be notified.
        </p>
        {adminData.address === null ||
          adminData.dateOfBirth === null ||
          (adminData.sex === null && (
            <div className="error-message">
              <div className="error-notification">
                <MdReportGmailerrorred style={{ color: "red" }} />
              </div>
              <p style={{ color: "red" }}>
                {" "}
                Please complete your registration.
              </p>
            </div>
          ))}
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
                disabled
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
                onChange={handleChange}
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
            <div className="user-form-item">
              <label htmlFor="DOB">Date of Birth</label>
              <input
                type="date"
                id="DOB"
                name="dob"
                value={adminData.dob}
                onChange={handleChange}
              />
            </div>
            <div className="user-form-item">
              <label htmlFor="sex">Sex</label>
              <select
                name="sex"
                id="sex"
                value={adminData.sex}
                onChange={handleChange}
              >
                <option value="selectuser">--Sex--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          {userUpdateLoading === true ? (
            <RotatingSquare
              type="TailSpin"
              color="#28b498"
              height={30}
              width={80}
              wrapperStyle={{ marginTop: "20%" }}
            />
          ) : (
            <button
              type="submit"
              onClick={handleUpdate}
              className="update-btn-admin"
            >
              Update
            </button>
          )}
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
            {changePasswordLoading ? (
              <RotatingSquare
                type="TailSpin"
                color="#28b498"
                height={30}
                width={100}
                wrapperStyle={{ marginTop: "5%" }}
              />
            ) : (
              <button
                onClick={handleSubmit}
                disabled={
                  oldPassword === "" ||
                  newPassword === "" ||
                  confirmNewPassword === ""
                    ? true
                    : false
                }
              >
                Confirm Password
              </button>
            )}
          </form>
          <div className="user-settings-line3">
            <hr />
          </div>
        </div>
        <div className="add-new-category">
          <div className="add-new-category-header">
            <h4>Add New Category</h4>
            <p>Please input a new book category to be added</p>
          </div>
          <div className="add-new-category-content">
            <AddCategoryPopup trigger={addNew} setTrigger={setAddNew}>
              <form action="">
                <div className="user-form-item">
                  <label htmlFor="category">New Category</label>
                  <input
                    type="text"
                    id="category"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div className="submit-catgory">
                  {categoryLoading ? (
                    <RotatingSquare
                      type="TailSpin"
                      color="#28b498"
                      height={30}
                      width={100}
                      wrapperStyle={{ marginTop: "5%" }}
                    />
                  ) : (
                    <button
                      onClick={handleSubmitCategory}
                      disabled={name === "" ? true : false}
                    >
                      Add Category
                    </button>
                  )}
                </div>
              </form>
            </AddCategoryPopup>

            <div className="category-table">
              <div className="category-table-one">
                <div className="category-table-title">
                  <div className="category-name-container">category name</div>
                  <div className="add-new-category-btn">
                    <button onClick={() => setAddNew(true)}>Add</button>
                  </div>
                </div>
                <div className="category-data">
                  {categoryData.map((item) => (
                    <CategoryTableCard key={item._id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
