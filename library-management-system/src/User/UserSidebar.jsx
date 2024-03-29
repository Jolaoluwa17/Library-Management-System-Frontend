import React from "react";
import { IoCardSharp } from "react-icons/io5";
import { AiOutlineSetting, AiOutlineHistory } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { HiLibrary } from "react-icons/hi";
import { useContext } from "react";
import {
  studentContext,
  nonStudentContext,
} from "../components/Context/Context";
import UserLogOutModal from "../admin/modal/UserLogOutModal";

export const UserSidebar = ({ student, nonStudent }) => {
  const studentDispatch = useContext(studentContext).dispatch;
const nonStudentDispatch = useContext(nonStudentContext).dispatch;
const dispatch = student ? studentDispatch : nonStudentDispatch;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="user-logoImg">
          <img
            src="https://res.cloudinary.com/manlikeemma/image/upload/v1669629509/BUCODEL/Babcock_Logo_c46jjo.jpg"
            alt="Babcock Logo"
          />
        </div>
        <div className="logoText">
          <h3>Welcome</h3>
          <h5>Back</h5>
        </div>
      </div>
      <div className="sidebarButton" id="sidebarButton">
        <div className="classroomButton">
          <NavLink to="/Library">
            <button className="sidebar-button">
              <HiLibrary className="icon" />
              Library
            </button>
          </NavLink>
          <NavLink to="/transactions">
            <button className="sidebar-button">
              <AiOutlineHistory className="icon" />
              Transactions
            </button>
          </NavLink>
          <NavLink to="/libraryCard">
            <button className="sidebar-button">
              <IoCardSharp className="icon" />
              Library Card
            </button>
          </NavLink>
          <NavLink to="/cart">
            <button className="sidebar-button">
              <FaShoppingCart className="icon" />
              Cart
            </button>
          </NavLink>
        </div>
        <div className="user-settingButton">
          <NavLink to="/userSettings">
            <button className="sidebar-button">
              <AiOutlineSetting className="icon" />
              Settings
            </button>
          </NavLink>
        </div>
        <div className="logOutButton">
          <button className="sidebar-button" onClick={handleOpen}>
            <HiOutlineLogout className="icon" />
            Log Out
          </button>
        </div>
      </div>
      <UserLogOutModal open={open} setOpen={setOpen} dispatch={dispatch}/>
    </div>
  );
};

export default UserSidebar;
