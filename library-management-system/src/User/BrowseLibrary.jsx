import React from "react";
import "./browseLibrary.css";
import { BookCard } from "./BookCard";
// import List from "../Data/data";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import UserHeader from "../components/UserHeader";
import config from "../config";
import SkeletonBookLoader from "../components/SkeletonBookLoader";

export const BrowseLibrary = ({ user, handleClick, test, cart }) => {
  const [pendingData, setPendingData] = useState([]);
  const [pendingDataLoading, setPendingDataLoading] = useState(true);

  useEffect(() => {
    const fetchPendingData = async () => {
      const res = await axios.get(`${config.baseURL}/book`);
      setPendingData(res.data);
      setPendingDataLoading(false);
    };
    fetchPendingData();
  }, []);

  // const [search, setSearch] = useState("");
  return (
    <div className="browse-library">
      <UserHeader user={user} />
      <div className="browse-library-content">
        {pendingDataLoading ? (
          <div className="new">
            <SkeletonBookLoader />
            <SkeletonBookLoader />
            <SkeletonBookLoader />
            <SkeletonBookLoader />
            <SkeletonBookLoader />
            <SkeletonBookLoader />
            <SkeletonBookLoader />
            <SkeletonBookLoader />
          </div>
        ) : (
          pendingData.map((item) => (
            <BookCard
              key={item._id}
              item={item}
              handleClick={handleClick}
              user={user}
              test={test}
              cart={cart}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default BrowseLibrary;
