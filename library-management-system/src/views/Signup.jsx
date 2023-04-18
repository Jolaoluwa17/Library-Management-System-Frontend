import "./Signup.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import config from "../config";
import axios from "axios";
import TOSPopup from "../components/TOSPopup";
import PPPopup from "../components/PPPopup";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [matricNo, setMatricNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      let postData = {
        username,
        email,
        password,
        userType,
        phoneNo,
      };
      if (userType === "student") {
        postData.matricNo = matricNo;
      }
      const res = await axios.post(`${config.baseURL}/auth/register`, postData);
      res.data && window.location.replace("/");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  const [userType, setUser] = useState("");
  const [studentInputVisible, setStudentInputVisible] = useState(false);

  const handleOnChange = (e) => {
    setUser(e.target.value);
  };
  useEffect(() => {
    userType === "student"
      ? setStudentInputVisible(true)
      : setStudentInputVisible(false);
  }, [userType]);

  setTimeout(function () {
    setError(false);
  }, 5000);

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const [isTOS, setIsTOS] = useState(false);
  const [isPP, setIsPP] = useState(false);

  return (
    <div className="signup-page">
      <div className="signup">
        <div className="signup-container">
          <div className="signup-left-navigation">
            <div className="signup-header">
              <h1>GET STARTED</h1>
              <p>
                Already got an account{" "}
                <Link to="/login" className="link">
                  log in
                </Link>
              </p>
            </div>
            <form action="" className="signup-form" onSubmit={handleSubmit}>
              <div className="signup-form-content">
                <div className="signup-form-item">
                  <input
                    type="text"
                    id="fullname"
                    placeholder="Full Name"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="user-option">
                  <div className="user-select-options">
                    <select
                      name="user-select"
                      id="user-select"
                      className="user-select"
                      value={userType}
                      onChange={handleOnChange}
                    >
                      <option value="selectuser" style={{ color: "grey" }}>
                        --User--
                      </option>
                      <option value="student">Student</option>
                      <option value="non-student">Non-Student</option>
                    </select>
                  </div>
                </div>
                <div className="signup-form-item">
                  {studentInputVisible && (
                    <div className="student-input">
                      <input
                        type="text"
                        id="matric-no"
                        placeholder="Matric No."
                        onChange={(e) => setMatricNo(e.target.value)}
                      />
                    </div>
                  )}
                </div>
                <div className="signup-form-item">
                  <input
                    type="text"
                    id="phone-no"
                    placeholder="Phone No."
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                </div>
                <div className="signup-form-item">
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="signup-form-item">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="signup-form-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox"
                    checked={isCheckboxChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label>
                    {" "}
                    I agree to{" "}
                    <span className="link" onClick={() => setIsTOS(true)}>
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span
                      to="/"
                      className="link"
                      onClick={() => setIsPP(true)}
                    >
                      Privacy Policy
                    </span>
                  </label>
                </div>
                <div type="submit" className="signup-btn">
                  <button
                    disabled={
                      username === "" ||
                      password === "" ||
                      email === "" ||
                      userType === "" ||
                      phoneNo === "" ||
                      !isCheckboxChecked ||
                      (userType === "student" && matricNo === "")
                    }
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
            {error && (
              <span
                style={{ color: "red", marginTop: "10px", marginLeft: "6%" }}
              >
                Something Wrong! <br />
                This may be due to not filling all avaliable fields
              </span>
            )}
          </div>
          <div className="signup-right-navigation"></div>
        </div>
      </div>
      <TOSPopup trigger={isTOS} setTrigger={setIsTOS}>
        <div className="terms-of-service">
          <h3>TERMS OF SERVICE</h3>
          <p>
            Welcome to our Library Management System! By using our platform, you
            agree to the following terms of service: <br />
            1. Your use of the Library Management System is subject to these
            Terms of Service and our Privacy Policy. <br />
            2. You may only use the Library Management System for lawful
            purposes and in compliance with all applicable laws and regulations.{" "}
            <br />
            3. You must create an account to use certain features of the Library
            Management System. You agree to provide accurate and complete
            information when creating your account and to update your account
            information as necessary to ensure that it remains accurate and
            complete. <br />
            4. You are responsible for maintaining the confidentiality of your
            account login credentials and for all activities that occur under
            your account. You agree to notify us immediately if you become aware
            of any unauthorized use of your account. <br />
            5. The Library Management System allows you to borrow and return
            library items, reserve library items, and manage your library
            account. You agree to use the Library Management System in
            accordance with its intended purposes.
            <br />
            6. We reserve the right to modify, suspend, or discontinue the
            Library Management System at any time without notice to you. We may
            also modify these Terms of Service from time to time without notice
            to you. <br />
            7. You acknowledge and agree that we own all right, title, and
            interest in and to the Library Management System, including all
            intellectual property rights. <br />
            8. We do not guarantee the accuracy, completeness, or timeliness of
            the Library Management System or any information available through
            the Library Management System. We are not responsible for any errors
            or omissions in the Library Management System or any information
            available through the Library Management System. <br />
            9. You agree to indemnify, defend, and hold us harmless from and
            against any and all claims, damages, liabilities, costs, and
            expenses arising out of or related to your use of the Library
            Management System or any breach of these Terms of Service. <br />
            10. These Terms of Service and your use of the Library Management
            System are governed by the laws of [Insert Governing Law and
            Jurisdiction]. Any dispute arising out of or relating to these Terms
            of Service or your use of the Library Management System shall be
            resolved exclusively in the courts located in [Insert Jurisdiction].{" "}
            <br />
            If you have any questions or concerns about these Terms of Service,
            please contact us at [Insert Contact Information].
          </p>
        </div>
      </TOSPopup>
      <PPPopup trigger={isPP} setTrigger={setIsPP}>
        <div className="PP">
          <h3>PRIVACY POLICY</h3>
          <p>
            Welcome to our Library Management System! This Privacy Policy
            explains how we collect, use, and disclose information about you
            when you use our platform. <br />
            1. <b>Information We Collect</b> <br />
            We may collect personal information about you when you use the
            Library Management System, including your name, contact information,
            and library account information. <br />
            2. <b>How We Use Your Information</b> <br />
            We may use your personal information to provide you with library
            services, to communicate with you about your account and library
            items, and to improve the Library Management System. We may also use
            your personal information for other purposes that are consistent
            with the purposes for which we collected it or with your consent.{" "}
            <br />
            3. <b>Sharing Your Information</b> <br />
            We may share your personal information with third-party service
            providers that help us operate the Library Management System. We may
            also share your personal information as required by law, in response
            to legal process, or to protect our rights, property, or safety or
            the rights, property, or safety of others. <br />
            4. <b>Cookies and Similar Technologies</b> <br />
            We may use cookies and similar technologies to collect information
            about your use of the Library Management System and to improve the
            performance of the Library Management System. You can control the
            use of cookies at the individual browser level. <br />
            5. <b>Security</b> <br />
            We take reasonable measures to protect the personal information we
            collect from unauthorized access, disclosure, or destruction. <br />
            6. <b>Your Rights</b> <br />
            You have the right to access, correct, or delete your personal
            information that we collect and maintain. You may also have the
            right to restrict or object to the processing of your personal
            information. Changes to this Privacy Policy We may modify this
            Privacy Policy from time to time. If we make material changes to
            this Privacy Policy, we will notify you by email or by posting a
            notice on the Library Management System. <br />
            7. <b>Contact Us</b> <br />
            If you have any questions or concerns about this Privacy Policy or
            our privacy practices, please contact us at
            olusanyajolaoluwa@gmail.com.
            <br />
            By using our Library Management System, you consent to the terms of
            this Privacy Policy.
          </p>
        </div>
      </PPPopup>
    </div>
  );
};
