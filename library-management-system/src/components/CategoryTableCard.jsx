import React from "react";
import "../User/userSettings.css";
import config from "../config";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { MdDelete } from "react-icons/md";

export const CategoryTableCard = ({ item }) => {
  // const { id, name } = item;
  // console.log(item);

  const handleDelete = async () => {
    try {
      await axios.delete(`${config.baseURL}/category/${item._id}`);
      window.location.reload();
    } catch (err) {}
  };
  return (
    <div className="category-table-card">
      <div className="category-container">
        {/* <div className="category-name">{item.name}</div>
        <div className="category-del-btn">
          <button onClick={handleDelete}>Delete</button>
        </div> */}
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              {/*  */}
              {/* <TableRow>
                <TableCell align="center" style={{ fontSize: "12px" }}>
                  ID
                </TableCell>
                <TableCell align="center" style={{ fontSize: "12px" }}>
                  Total Books Issued
                </TableCell>
              </TableRow> */}
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">
                  <div className="category-del-btn">
                    <MdDelete onClick={handleDelete} />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default CategoryTableCard;
