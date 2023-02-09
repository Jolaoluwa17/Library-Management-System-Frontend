import React from 'react'
import {  BiBrain, BiChurch } from "react-icons/bi";
import { GrCloudSoftware } from "react-icons/gr";
import { GiMaterialsScience, GiPaintBucket, GiBookmark } from "react-icons/gi";
import { MdHistoryEdu, MdComputer } from "react-icons/md";
import { TbLanguage } from "react-icons/tb";
import { BsCloudDownload } from "react-icons/bs";
// import { Link } from 'react-router-dom';

export const CategorySidebar = () => {
  return (
    <div className="category-sidebar">
        <div className="first-section-library">
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <MdComputer />
              </div>
              Computer Science
            </div>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <BiBrain />
              </div>
              Philosophy & Psychology
            </div>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <BiChurch />
              </div>
              Religion
            </div>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <GrCloudSoftware />
              </div>
              Social Sciences
            </div>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <TbLanguage />
              </div>
              Language
            </div>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <GiMaterialsScience />
              </div>
              Science
            </div>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <BsCloudDownload />
              </div>
              Technology & Applied Science
            </div>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <GiPaintBucket />
              </div>
              Arts and Recreation
            </div>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <GiBookmark />
              </div>
              Literature
            </div>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <MdHistoryEdu />
              </div>
              History & Geography
            </div>
          </div>
    </div>
  )
};
export default CategorySidebar;
