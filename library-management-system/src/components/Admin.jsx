import React from "react";
import Sidebar from "../components/Sidebar"
import "./Admin.css";
import { Outlet } from "react-router-dom";

export const Admin = ( ) => {
  return (
    <div className="Admin">
      <div className="sidebar-container">
          <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};
