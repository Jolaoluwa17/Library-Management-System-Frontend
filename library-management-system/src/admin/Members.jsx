import React, { useState, useEffect } from "react";
import "./members.css";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import MembersCard from "../components/MembersCard";
import config from "../config";
import { VscFilter } from "react-icons/vsc";

export const Members = ({ admin }) => {
  const [pendingData, setPendingData] = useState([]);

  useEffect(() => {
    const fetchPendingData = async () => {
      const res = await axios.get(`${config.baseURL}/user`);
      const reversedData = res.data.reverse();
      setPendingData(reversedData);
    };
    fetchPendingData();
  }, []);

  const [search, setSearch] = useState("");

  return (
    <div className="members">
      <div className="members-header">
        <h2>Welcome to Members List</h2>
        <h5>{admin.admin.username}/Members</h5>
      </div>

      <div className="cont">
        <div className="members-first-header">
          <span className="members-search">
            <div className="members-search-icon">
              <BsSearch />
            </div>
            <div className="members-search-input">
              <input
                type="text"
                placeholder="Search member"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </span>
          <span className="members-dropdown-filter">
            <VscFilter style={{ paddingTop: "0px", fontSize: "30px" }} />
            <select
              name="user-type"
              id="user-type"
              className="user-type"
              onChange={(e) => setSearch(e.target.value)}
            >
              <option value="" style={{ color: "grey" }}>
                Filter
              </option>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
              <option value="non-student">Non-Student</option>
            </select>
          </span>
        </div>
        <div className="members-table-header"></div>
        <div className="table-container-alpha">
          {pendingData
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.username.toLowerCase().includes(search) ||
                    item.userType.toLowerCase().includes(search);
            })
            .map((item) => (
              <MembersCard key={item.id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};
