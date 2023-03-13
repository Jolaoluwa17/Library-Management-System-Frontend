import React from "react";
import "../admin/members.css";
import { IoMdContact } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

export const MembersCard = ({ item }) => {
  const { email, username, userType } = item;
  return (
    <div className="members-card">
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead></TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                {" "}
                <div className="new-members-name-card">
                  <IoMdContact className="members-icon" />
                  <p>{username}</p>
                </div>
              </TableCell>
              <TableCell align="center">{email}</TableCell>
              <TableCell align="center">{userType}</TableCell>
              <TableCell align="center">
                <Link
                  to={`/membersViewDetails?username=${item.username}&email=${item.email}&userType=${item.userType}&matricNo=${item.matricNo}`}
                >
                  <BsThreeDots className="view-icon" />
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default MembersCard;
