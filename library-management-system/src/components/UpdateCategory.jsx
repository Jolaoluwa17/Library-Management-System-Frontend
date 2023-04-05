import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export const UpdateCategory = ({ item }) => {
  const [updateCategory, setUpdateCategory] = useState({
    name: "",
  });

  const handleChangeCategory = (event) => {
    const { name, value } = event.target;
    setUpdateCategory((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdateCategory = (event) => {
    event.preventDefault();
    //update user data in API using axios.put
    axios
      .put(`${config.baseURL}/category/${item._id}`, updateCategory)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };


  useEffect(() => {
    const fetchCategoryData = async () => {
      const res = await axios.get(`${config.baseURL}/category/${item._id}`);
      setUpdateCategory(res.data);
    };
    fetchCategoryData();
  }, [item._id]);

  return (
    <div className="update-category">
      <form action="">
        <div className="user-form-item">
          <label htmlFor="category">Edit Category</label>
          <input
            type="text"
            id="category"
            name="name"
            value={updateCategory.name}
            onChange={handleChangeCategory}
          />
        </div>
        <div className="submit-catgory">
          <button onClick={handleUpdateCategory}>Submit</button>
        </div>
      </form>
    </div>
  );
};
