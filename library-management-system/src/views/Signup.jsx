import './Signup.css'
import React from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
//    function visible() {const dropDown = document.getElementById("user-select");
//     const matricInput = document.getElementById("matric-no");
//     if (dropDown.value === "Student"){
//         matricInput.style.display = "block";
//     }
//     else if(dropDown.value !== "Student") {
//         matricInput.style.display = "none";
//     }
// }
  return (
    <div className='signup-page'>
        <div className="signup">
            <div className="signup-container">
                <div className="signup-left-navigation">
                    <div className="signup-header">
                        <h1>GET STARTED</h1>
                        <p>Already got an account <Link to="/" className='link'>log in</Link></p>
                    </div>
                    <form action="" className='signup-form'>
                        <div className="signup-form-content">
                            <div className="signup-form-item">
                                <input type="text" id='fullname' placeholder='Full Name' />
                                </div>
                                <div className="user-option">
                                    {/* <label htmlFor="radio_student"><b>Student</b> </label>
                                        <input type="radio" id='radio_student' name='user' />
                                    <label htmlFor="radio_nonStudent"> <b>Non-Student</b> </label>
                                        <input type="radio" id='radio_nonStudent' name='user'/> */}
                                    {/* <label htmlFor="user-select">User</label> */}
                                    <div className="user-select-options">
                                    <select name="user-select" id="user-select" className='user-select'>
                                        <option value="" style={{ color: "grey" }}>--User--</option>
                                        <option value="student">Student</option>
                                        <option value="non-student">Non-Student</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="signup-form-item">
                                <input type="text" id='matric-no' placeholder='Matric No.' />
                                </div>
                                <div className="signup-form-item">
                                <input type="text" id='phone-no' placeholder='Phone No.' />
                                </div>
                                <div className="signup-form-item">
                                <input type="email" id='email' placeholder='Email' />
                                </div>
                                <div className="signup-form-item">
                                <input type="password" id='password' placeholder='Password' />
                                </div>
                                
                                <div className="signup-form-checkbox">
                                <input type="checkbox" id='checkbox' />
                                <label htmlFor="checkbox"> I agree to <Link to="/" className='link'>Terms of Service</Link> and <Link to="/" className='link'>Privacy Policy</Link></label>
                            </div>
                            <div className="signup-btn">
                                <button>Register</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="signup-right-navigation">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

