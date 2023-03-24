import React from "react";
import { BiBrain, BiChurch } from "react-icons/bi";
import { GrCloudSoftware } from "react-icons/gr";
import { GiMaterialsScience, GiPaintBucket, GiBookmark } from "react-icons/gi";
import { MdHistoryEdu, MdComputer } from "react-icons/md";
import { TbLanguage } from "react-icons/tb";
import { BsCloudDownload } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../User/library.css";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export const CategorySidebar = () => {
  const [categoryData, setCatetegoryData] = useState([]);
  useEffect(() => {
    const fetchCategoryData = async () => {
      const res = await axios.get(`${config.baseURL}/category`);
      setCatetegoryData(res.data);
    };
    fetchCategoryData();
  }, []);


  return (
    <div className="category-sidebar">
      <div className="first-section-library">
        {categoryData.map((item) => (
          <Link to={`/test?name=${item.name}`} style={{ color: "black" }}>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <MdComputer />
              </div>
              <p key={item._id} className="category-value">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CategorySidebar;
