import React from 'react'
import "./header.css";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header-container">
      <div className="nav-bar">
      <div className="babcock-img">
      <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1669629509/BUCODEL/Babcock_Logo_c46jjo.jpg" alt="Babcock Logo" />
      </div>
      <div className='nav-content'>
        <ul>
          <li><Link to="" style={{ color: "rgb(0, 0, 0, 0.5)" }}>HOME</Link></li>
          <li><Link to= "" style={{ color: "rgb(0, 0, 0, 0.5)" }}>CONTACT US</Link></li>
          <li><Link to= "" style={{ color: "rgb(0, 0, 0, 0.5)" }}>ABOUT US</Link></li>
          <li><Link to= "" style={{ color: "rgb(0, 0, 0, 0.5)" }}>ADMIN</Link></li>
        </ul>
      </div>
      <div className="login-btn-container">
      <button LinkTo="/login">Login</button>
      </div>
      </div>
      <div className="header-line">
      <hr />
      </div>
    </div>
  )
}
export default Header;
