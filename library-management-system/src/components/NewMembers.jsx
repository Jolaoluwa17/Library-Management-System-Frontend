import React from "react";
import "./newMembers.css";
// import { AiFillEye } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

export const NewMembers = ({ item }) => {
  const { email, username, userType } = item;
  return (
    <div>
      <TableBody>
        <TableRow>
          <TableCell>
            {" "}
            <div className="new-members-name-card">
              <IoMdContact className="members-icon" />
              <h3>{username}</h3>
            </div>
          </TableCell>
          <TableCell align="center">{email}</TableCell>
        </TableRow>
      </TableBody>
    </div>
  );
};

export default NewMembers;
