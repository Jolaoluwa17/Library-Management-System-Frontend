import React, { useState, useEffect } from "react";
import "./members.css";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import MembersCard from "../components/MembersCard";
import config from "../config";
import { VscFilter } from "react-icons/vsc";
import { ThreeDots } from "react-loader-spinner";

export const Members = ({ admin }) => {
  const [pendingData, setPendingData] = useState([]);
  const [pendingDataLoading, setPendingDataLoading] = useState(true);

  useEffect(() => {
    const fetchPendingData = async () => {
      const res = await axios.get(`${config.baseURL}/user`);
      const reversedData = res.data.reverse();
      setPendingData(reversedData);
      setPendingDataLoading(false);
    };
    fetchPendingData();
  }, []);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  console.log(search, filter);
  console.log(pendingData);

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
              onChange={(e) => setFilter(e.target.value)}
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
          {pendingDataLoading ? (
            <div
              style={{
                display: "flex",
                marginLeft: "38%",
                width: "250px",
                justifyContent: "space-between",
                marginTop: "15%",
              }}
            >
              <b style={{ color: "" }}>Loading Members Data </b>{" "}
              <ThreeDots
                height="25"
                width="60"
                radius="9"
                color="#28b498"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </div>
          ) : (
            pendingData
              .filter((item) => {
                const lowerSearch = search.toLowerCase();
                const lowerFilter = filter.toLowerCase();
                return (
                  (lowerSearch === "" ||
                    item.username.toLowerCase().includes(lowerSearch)) &&
                  (lowerFilter === "" ||
                    item.userType.toLowerCase().includes(lowerFilter))
                );
              })
              .map((item) => <MembersCard key={item.id} item={item} />)
          )}
        </div>
      </div>
    </div>
  );
};
