import React from 'react'
import './adminNav.css'
import {FaBell} from 'react-icons/fa'
const AdminNav = () => {
  return (
    <div className="top-nav">
      <div className='admin-nav-container'>
        <div className="admin-name"> <FaBell className='bell-icon'/> Welcome Olusanya Jolaoluwa</div>
      </div>
    </div>
  )
}

export default AdminNav