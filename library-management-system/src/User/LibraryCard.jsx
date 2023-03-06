import React from "react";
import "./libraryCard.css";
import {
  BsViewList,
  BsViewStacked,
  // BsToggleOff,
  // BsToggleOn,
} from "react-icons/bs";
import { useState } from "react";

export const LibraryCard = () => {
  const [isSingle, setIsSingle] = useState("false");
  // const [isColorSwitch, setIsColorSwitch] = useState("false");
  return (
    <div className="library-card-container">
      <div className="library-card-header">
        <h2>Welcome to your Virtual Library Card</h2>
        <h5>Olusanya Jolaoluwa/Virtual Library Card</h5>
        <div className="change-view">
          <div className="single-view" onClick={() => setIsSingle(true)}>
            {" "}
            <BsViewList /> Single View
          </div>
          <div className="double-view" onClick={() => setIsSingle(false)}>
            {" "}
            <BsViewStacked /> Double view{" "}
          </div>
          {/* <div className="toggle-btn">
            <div className="toggle-off" onClick={() => setIsColorSwitch(true)}>
              <BsToggleOff /> Color switch off
            </div>
            <div className="toggle-on" onClick={() => setIsColorSwitch(false)}>
              <BsToggleOn /> Color switch on
            </div>
          </div> */}
        </div>
      </div>
      <div className="library-card">
        <div
          className={
            isSingle ? "library-card-content" : "library-card-content2"
          }
        >
          <div className={isSingle ? "card" : "card2"}>
            <div
              className={
                isSingle ? "virtual-card-front" : "virtual-card-front2"
              }
            >
              <div className="card-front-header">
                <div className="name-of-library">LAZ-OTTI MEMORIAL LIBRARY</div>
                <div className="school-logo">
                  <img
                    src="https://res.cloudinary.com/manlikeemma/image/upload/v1669629509/BUCODEL/Babcock_Logo_c46jjo.jpg"
                    alt="Babcock Logo"
                  />
                </div>
              </div>
              <div className="card-front-content">
                <div className="card-holder-image">
                  <img
                    src="https://res.cloudinary.com/dneawlwcp/image/upload/v1677403380/Final%20Year%20Project%20Pictures/joseph-gonzalez-iFgRcqHznqg-unsplash_bafg0u.jpg"
                    alt="profile"
                  />
                </div>
                <div className="card-holder-info">
                  <div className="card-holder card-holder-name">
                    <b>Id: </b>#111011
                  </div>
                  <div className="card-holder library-id">
                    <b>Name: </b>Olusanya Jolaoluwa Oluwapelumi
                  </div>
                  <div className="card-holder address-card-holder">
                    <b>Address: </b>24 Lanre Awolokun Street Gbagada phase 2
                  </div>
                  <div className="card-holder dob-card-holder">
                    <b>D.O.B: </b>17th July 2003
                  </div>
                  <div className="card-holder sex-card-holder">
                    <b>Sex: </b>Male
                  </div>
                </div>
              </div>
            </div>
            <div
              className={isSingle ? "virtual-card-back" : "virtual-card-back2"}
            >
              <div className="virtual-card-back-content">
                <div className="card-qr-code-container">
                  <div className="card-holder-qr-code">
                    <img
                      src="https://res.cloudinary.com/dneawlwcp/image/upload/v1677520723/Final%20Year%20Project%20Pictures/istockphoto-828088276-612x612_zxecyd.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="conditions">
                  <div className="conditions-header">
                    <h3>Conditions</h3>
                  </div>
                  <div className="conditions-content">
                    <ul>
                      <li>
                        Present this card each time library materials are
                        borrowed
                      </li>
                      <li>
                        I agree to be responsible for all materials borrowed on
                        this card and comply with library rules and policies
                      </li>
                    </ul>
                    <div className="card-policy">
                      The card holder accepts and agrees to follow all policies
                      and procedures of the laz otti memorial library.
                      <div className="library-address-card">
                        121103, Ilishan-Remo Ogun State, Babcock University
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
