import React from 'react'
import '../views/Login.css'
import { Link } from 'react-router-dom'

const Adminlogin = () => {
  return (
    <div>
        <div className="admin-login-form">
          <div className="login-header" >
            <h1>SIGN IN</h1>
            <div className="left-line">
          <hr />
        </div>
        <div className="right-line">
          <hr />
        </div>
            <p>Log into an existing student account</p>
          </div>
          <form action="#" className='login-form'>
            <div className="login-form-content">
              <div className="form-item">
                <input type="text" id='email' placeholder='Matric No' />
              </div>
              <div className="form-item">
                <input type="password" id='password' placeholder='Password' />
              </div>
              <div className='sign-in-btn'>
              <button>Sign in</button>
              </div>
              <p className="signup_link">
          Not registered yet?
          <Link to="/signup" style={{ color: "#28B498" }} className ="signup_link_text">
             Create an account
          </Link>
        </p>
        <p className="signup_link">
          Do not Remember password?
          <Link to="/PasswordRecovery" style={{ color: "#28B498" }} className ="signup_link_text">
             Reset Password
          </Link>
        </p>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Adminlogin;
