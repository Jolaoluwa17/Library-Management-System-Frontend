import React from 'react'
import "./popup.css"
import {MdOutlineCancel} from "react-icons/md"

function PPPopup(props) {
  return (props.trigger) ? (
    <div className='popup2'>
        <div className='popup2-inner'>
             <button className='close-btn' onClick={() => props.setTrigger(false) }><MdOutlineCancel/></button>
             {props.children}
        </div>
        </div>
  ) : "";
}

export default PPPopup;