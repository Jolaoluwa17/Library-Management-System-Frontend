import React from 'react'
import { ImBooks } from "react-icons/im";
import { MdAdd } from "react-icons/md";
import { GiBookCover } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai"
import { HiOutlineLogout } from "react-icons/hi"
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import "./sidebar.css";

export const Sidebar = () => {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    return (
        <div className="sidebar">
            <div className="logo">
                <div className="logoImg">
                    <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1669629509/BUCODEL/Babcock_Logo_c46jjo.jpg" alt="Babcock Logo" />
                </div>
                <div className="logoText">
                    <h3>BUCODeL</h3>
                    <h5>Student</h5>
                </div>
            </div>
            <div className="sidebarButton" id='sidebarButton'>
                <div className="classroomButton">
                    <NavLink to="/dashboard">
                        <button className='sidebar-button'>
                            <MdSpaceDashboard className='icon' />
                            Dashboard
                        </button>
                    </NavLink>
                    <NavLink to="/">
                        <button className='sidebar-button'>
                            <ImBooks className='icon' />
                            Total Books
                        </button>
                    </NavLink>
                    <NavLink to="/">
                        <button className='sidebar-button'>
                            <MdAdd className='icon' />
                            Add Books
                        </button>
                    </NavLink>
                    <NavLink to="/">
                        <button className='sidebar-button'>
                            <GiBookCover className='icon' />
                            Issue Books
                        </button>
                    </NavLink>
                    <NavLink to="/">
                        <button className='sidebar-button'>
                            <IoMdContact className='icon' />
                            Members
                        </button>
                    </NavLink>
                </div>
                <div className="settingButton">
                    <NavLink to="/settings">
                        <button className='sidebar-button'>
                            <AiOutlineSetting className='icon' />
                            Settings
                        </button>
                    </NavLink>
                </div>
                <div className="logOutButton">
                    <button className='sidebar-button'>
                        <HiOutlineLogout className='icon' />
                        Log Out
                    </button>

                </div>
            </div>
            {/* <LogOutModal open={open} setOpen={setOpen}/> */}

        </div>
    )
}

export default Sidebar;
