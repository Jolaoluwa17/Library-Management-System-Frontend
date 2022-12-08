import './Login.css'
import React from 'react'

export const Login = () => {
  return (
    <div className='login-page'>
    <div className="Login">
      <div className="container">
        <div className="left-navigation">
          <div className="login-header">
            <h1>SIGN IN</h1>
            <div className="left-line">
          <hr />
        </div>
        <div className="right-line">
          <hr />
        </div>
            <p>Log into existing account</p>
          </div>
          <form action="#" className='login-form'>
            <div className="login-form-content">
              <div className="form-item">
                <input type="text" id='email' placeholder='Email' />
              </div>
              <div className="form-item">
                <input type="password" id='password' placeholder='Password' />
              </div>
              <div className='sign-in-btn'>
              <button>Sign in</button>
              </div>
            </div>
          </form>
        </div>
        <div className="right-navigation">
          <div className='right-navigation-header'>
            <h1>WELCOME BACK</h1>
          </div>
          <div className='content'>
            <p>Library Management System is used to <br/>
               manage, monitor and control the resources <br/>
               and various transactions that go on in the <br/>
               library.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

