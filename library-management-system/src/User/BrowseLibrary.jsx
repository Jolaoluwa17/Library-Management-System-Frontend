import React from "react";
import "./browseLibrary.css";
import { BookCard } from "./BookCard";
// import List from "../Data/data";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import UserHeader from "../components/UserHeader";
import config from "../config";
import { TailSpin, LineWave } from "react-loader-spinner";

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
          <TailSpin
            type="TailSpin"
            color="#28b498"
            height={100}
            radius="3"
            width={1100}
            colors={["#28b498"]}
            wrapperStyle={{ marginTop: "15%" }}
            wrapperClass=""
          />
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
