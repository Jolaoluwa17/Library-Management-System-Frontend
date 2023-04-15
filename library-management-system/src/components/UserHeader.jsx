import React from "react";
import { IoSearch } from "react-icons/io5";
import { BiHelpCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import CategorySidebar from "../components/CategorySidebar";
import Notification from "./Notification";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import MobileSidebar from "../components/MobileSideBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import "../User/library.css";
import config from "../config";
import { IoMdNotifications, IoMdNotificationsOff } from "react-icons/io";

export const UserHeader = ({ user }) => {
  const [isCategorySidebar, setIsCategorySidebar] = useState("false");
  const [isNotification, setIsNotification] = useState(true);
  const [pendingData, setPendingData] = useState([]);

  useEffect(() => {
    const fetchPendingData = async () => {
      const res = await axios.get(`${config.baseURL}/book`);
      setPendingData(res.data);
    };
    fetchPendingData();
  }, []);

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = pendingData.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };


  return (
    <div className="user-header">
      <div className="library-header">
        <div className="mobile-sidebar-container">
          <MobileSidebar />
        </div>
        <div className="library-header-title">
          <h2>Welcome to Babcock Library</h2>
          <h5>{`${user.username} / Babcock Library`}</h5>
        </div>
        <div className="library-search-bar">
          <div className="search-input-full">
            <div className="search-input">
              <div>
                <IoSearch className="library-search-icon" />
              </div>
              <input
                type="search"
                value={wordEntered}
                onChange={handleFilter}
                placeholder="Search by name and category"
              />
            </div>
          </div>
          {filteredData.length !== 0 && (
            <div className="dataResult">
              {filteredData.slice(0, 15).map((value, key) => {
                return (
                  <Link to={`/test?title=${value.title}`}>
                    <p>{value.title} </p>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        <div className="help">
          <div className="help-icon">
            <BiHelpCircle />
          </div>
          <h4>Help</h4>
        </div>
        <div className="help">
          <div className="help-icon">
            <IoMdNotifications
              onClick={() => setIsNotification(false)}
              className={
                isNotification  ? "notification-btn" : "notification-btn1"
              }
            />
            <IoMdNotificationsOff
              onClick={() => setIsNotification(true)}
              className={
                isNotification
                  ? "notification-cancel-btn"
                  : "notification-cancel-btn1"
              }
            />
          </div>
        </div>
        <div className="help">
          <div className="help-icon">
            <GiHamburgerMenu
              onClick={() => setIsCategorySidebar(false)}
              className={
                isCategorySidebar ? "hamburger-icon" : "hamburger-icon1"
              }
            />
            <MdOutlineCancel
              onClick={() => setIsCategorySidebar(true)}
              className={
                isCategorySidebar ? "linecancel-icon" : "linecancel-icon1"
              }
            />
          </div>
        </div>
        <div
          className={
            isCategorySidebar ? "category-side-bar" : "category-side-bar1"
          }
        >
          <CategorySidebar />
        </div>
        <div
          className={isNotification ? "notification-bar" : "notification-bar1"}
        >
          <Notification user={user} />
        </div>
      </div>
    </div>
  );
};
export default UserHeader;
