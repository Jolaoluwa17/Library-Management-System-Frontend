import React from "react";
import UserSidebar from "../User/UserSidebar"
import "./user.css";
import { Outlet } from "react-router-dom";

export const User = ( ) => {
  return (
    <div className="User">
      <div className="sidebar-container">
          <UserSidebar />
      </div>
      <Outlet />
    </div>
  );
};