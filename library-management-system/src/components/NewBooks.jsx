import React from "react";
import "./newMembers.css";
// import { AiFillEye } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export const NewBooks = () => {
  return (
    <div className="cont">
      <div className="table-container">
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
            <h3 className="table-container-title">New Books</h3>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="center" style={{fontSize: "12px"}}>ID</TableCell>
                <TableCell align="center" style={{fontSize: "12px"}}>Issue Date</TableCell>
                <TableCell align="center" style={{fontSize: "12px"}}>Expiry Date</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  {" "}
                  <div className="new-members-name-card">
                    <FaBook className="books-icon" />
                    <h3>Book Name 1</h3>
                  </div>
                </TableCell>
                <TableCell align="center">#B12</TableCell>
                <TableCell align="center">2023-07-10</TableCell>
                <TableCell align="center">2023-07-10</TableCell>
                <TableCell align="center">
                  <BsThreeDots className="view-icon"/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  {" "}
                  <div className="new-members-name-card">
                    <FaBook className="books-icon" />
                    <h3>Book Name 1</h3>
                  </div>
                </TableCell>
                <TableCell align="center">#B12</TableCell>
                <TableCell align="center">2023-07-10</TableCell>
                <TableCell align="center">2023-07-10</TableCell>
                <TableCell align="center">
                  <BsThreeDots className="view-icon"/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  {" "}
                  <div className="new-members-name-card">
                    <FaBook className="books-icon" />
                    <h3>Book Name 1</h3>
                  </div>
                </TableCell>
                <TableCell align="center">#B12</TableCell>
                <TableCell align="center">2023-07-10</TableCell>
                <TableCell align="center">2023-07-10</TableCell>
                <TableCell align="center">
                  <BsThreeDots className="view-icon"/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  {" "}
                  <div className="new-members-name-card">
                    <FaBook className="books-icon" />
                    <h3>Book Name 1</h3>
                  </div>
                </TableCell>
                <TableCell align="center">#B12</TableCell>
                <TableCell align="center">2023-07-10</TableCell>
                <TableCell align="center">2023-07-10</TableCell>
                <TableCell align="center">
                  <BsThreeDots className="view-icon"/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  {" "}
                  <div className="new-members-name-card">
                    <FaBook className="books-icon" />
                    <h3>Book Name 1</h3>
                  </div>
                </TableCell>
                <TableCell align="center">#B12</TableCell>
                <TableCell align="center">2023-07-10</TableCell>
                <TableCell align="center">2023-07-10</TableCell>
                <TableCell align="center">
                  <BsThreeDots className="view-icon"/>
                </TableCell>
              </TableRow>
              <div className="list-all-books"><button className="list-all-btn">List All</button></div>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default NewBooks;
