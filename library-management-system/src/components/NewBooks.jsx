import React from "react";
import "./newMembers.css";
// import { AiFillEye } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

export const NewBooks = ({ item }) => {
  const { title, author, status } = item;
  return (
    <div className="new-books">
      <TableBody>
        <TableRow>
          <TableCell>
            {" "}
            <div className="new-members-name-card">
              <FaBook className="books-icon" />
              <h3>{title}</h3>
            </div>
          </TableCell>
          <TableCell align="center">{author}</TableCell>
        </TableRow>
      </TableBody>
    </div>
  );
};

export default NewBooks;
