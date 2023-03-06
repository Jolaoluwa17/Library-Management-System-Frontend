import './Login.css'
import React from 'react'
import { useState } from 'react'
import NonStudentLogin from '../components/NonStudentLogin'
import StudentLogin from '../components/StudentLogin'

export const Login = () => {
  const [active1, setActive1] = useState("StudentLogin");
  const [active2, setActive2] = useState();
  return (
    <div className='login-page'>
    <div className="Login">
      <div className="container">
        <div className="left-navigation">
          <div className="login-option">
          <div className="user-login" onClick={() => setActive1("StudentLogin")}>
            <span className={active1 === "StudentLogin" ? "student-btn" : "student-btn1"}>Students</span>
  
          </div>
          <div className="admin-login" onClick={() => setActive1("NonStudentLogin")}>
            <span className={active1 === "NonStudentLogin" ? "non-student-btn" : "non-student-btn1"}>Non-students</span>
          </div>
          </div>
          <div className="user-login-form1">
          {active1 === "StudentLogin" && (
            <StudentLogin
              active1={active1}
              setActive1={setActive1}
              active2={active2}
              setActive2={setActive2}
            />
          )}
          {active1 === "NonStudentLogin" && <NonStudentLogin />}
        </div>
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

