import './Signup.css'
import React from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
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
                                <label htmlFor="checkbox">I agree to <Link to="/" className='link'>Terms of Service</Link> and <Link to="/" className='link'>Privacy Policy</Link></label>
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

