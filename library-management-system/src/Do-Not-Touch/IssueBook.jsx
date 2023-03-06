import React from "react";
import "./issueBook.css";
import { useState } from "react";

export const IssueBook = () => {
  const [serviceList, setServiceList] = useState([{ service: "" }]);

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  return (
    <div className="issue-book">
      <div className="issue-book-header">
        <h2>Welcome to Issue Book Section</h2>
        <h5>Admin/Issue Book</h5>
      </div>
      <div className="issue-book-content">
        <div className="issue-book-info">
          <div className="book-information">
            <div className="issue-book-title">
              <h2>Book Information</h2>
              <p>Please input the information of the specific book</p>
            </div>
            <form action="#">
              <div className="form">
                <div className="form-item">
                  <div className="form-field">
                    <label htmlFor="service">Name of Book(s)</label>
                    {serviceList.map((singleService, index) => (
                      <div key={index} className="services">
                        <div className="first-division">
                          <input
                            name="service"
                            type="text"
                            id="service"
                            required
                          />
                          {serviceList.length - 1 === index &&
                            serviceList.length < 5 && (
                              <button
                                type="button"
                                onClick={handleServiceAdd}
                                className="book-add-btn"
                              >
                                <span>Add New Book</span>
                              </button>
                            )}
                        </div>

                        <div className="second-division">
                          {serviceList.length !== 1 && (
                            <button
                              type="button"
                              onClick={() => handleServiceRemove(index)}
                              className="book-remove-btn"
                            >
                              <span>Remove</span>
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="form-item">
                  <label htmlFor="issue-date" className="label-width">
                    Issue Date
                  </label>
                  <br />
                  <input type="date" id="issue-date" />
                </div>
                <div className="form-item">
                  <label htmlFor="return-date" className="label-width">
                    Return Date
                  </label>
                  <br />
                  <input type="date" id="return-date" />
                </div>
                <div className="form-item">
                  <label htmlFor="duration" className="label-width">
                    Duration
                  </label>
                  <br />
                  <input type="number" id="duration" placeholder="- -" />
                </div>
              </div>
            </form>
          </div>
          <div className="personal-information">
            <div className="issue-book-title">
              <h2>Personal Information</h2>
              <p>Please input the member's personal information</p>
            </div>
            <form action="#">
              <div className="form">
                <div className="form-item">
                  <label htmlFor="name" className="label-width">
                    Name
                  </label>
                  <br />
                  <input type="text" id="name" placeholder="John Doe" />
                </div>
                <div className="form-item">
                  <label htmlFor="name" className="label-width">
                    Status
                  </label>
                  <br />
                  <input type="text" id="name" placeholder="student" />
                </div>
                <div className="form-item">
                  <label htmlFor="phone-no" className="label-width">
                    Phone No.
                  </label>
                  <br />
                  <div className="phone-number">
                    <input
                      type="text"
                      placeholder="+234"
                      disabled
                      style={{ width: "50px", marginRight: "2%" }}
                    />
                    <input
                      type="text"
                      id="phone-no"
                      placeholder="8155668282"
                      style={{ width: "245px" }}
                    />
                  </div>
                </div>
                <div className="form-item">
                  <label htmlFor="email" className="label-width">
                    Email
                  </label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    placeholder="johndoe@gmail.com"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="qr-pic-container">
          <div className="qr-pic"></div>
          <div className="scan-btn">
            <button>Scan QR Code</button>
          </div>
        </div>
      </div>
      <button>Confirm</button>
    </div>
  );
};
