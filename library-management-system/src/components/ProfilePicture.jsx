import React from 'react'
import "./profilePicture.css"
import { useEffect, useState } from 'react';
import config from '../config';
import axios from 'axios';
import { FaRegUserCircle } from "react-icons/fa"

export const ProfilePicture = ({user}) => {
    const [userData, setUserData] = useState({
        profilePic: "",
      });
      
    useEffect(() => {
        const getUserDetails = async () => {
          const res = await axios.get(`${config.baseURL}/user/${user._id}`);
          setUserData(res.data);
        };
        getUserDetails();
      }, [user._id]);
      const image = userData.profilePic.fileUrl;
    
  return (
    <div className="profile-picture">{userData.profilePic != null ?
        <div className="profile-picture-container">
            <img src={image} alt="" />
        </div> : <FaRegUserCircle />}
    </div>
  )
}
export default ProfilePicture;
