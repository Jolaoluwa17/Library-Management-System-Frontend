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
import { BiEdit } from "react-icons/bi";
import UpdateCategoryPopup from "../components/UpdateCategoryPopup";
import { UpdateCategory } from "../components/UpdateCategory";
import { useState } from "react";

export const CategoryTableCard = ({ item }) => {
  const [editCategory, setEditCategory] = useState(false);
  const handleDelete = async () => {
    try {
      await axios.delete(`${config.baseURL}/category/${item._id}`);
      window.location.reload();
    } catch (err) {}
  };
  return (
    <div className="category-table-card">
      <div className="category-container">
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead></TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">
                  <div className="category-edit-btn">
                    <BiEdit
                      onClick={() => setEditCategory(true)}
                      className="edit"
                      style={{ color: "#ffbf05" }}
                    />
                  </div>
                </TableCell>
                <TableCell align="center">
                  <div className="category-del-btn">
                    <MdDelete onClick={handleDelete} className="del" />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <UpdateCategoryPopup
          trigger={editCategory}
          setTrigger={setEditCategory}
          item={item._id}
        >
          <UpdateCategory item={item} />
        </UpdateCategoryPopup>
      </div>
    </div>
  );
};
export default CategoryTableCard;
