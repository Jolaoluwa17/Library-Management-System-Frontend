import React from "react";
import "./issueBook.css";


export const IssueBook = () => {
  

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
                  <label htmlFor="uniqueId" className="label-width">
                    Unique Id
                  </label>
                  <br />
                  <input type="text" id="uniqueId" placeholder="11011" />
                </div>
                <div className="form-item">
                  <label htmlFor="bookName" className="label-width">
                    Book Title
                  </label>
                  <br />
                  <input
                    type="text"
                    id="bookName"
                    placeholder="The Great Gatsby"
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="authorName" className="label-width">
                    Author's Name
                  </label>
                  <br />
                  <input
                    type="text"
                    id="authorName"
                    placeholder="F. Scott Fitzgerald"
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="year" className="label-width">
                    Year of Publication
                  </label>
                  <br />
                  <input type="text" id="year" placeholder="1925" />
                </div>
                <div className="form-item">
                  <label htmlFor="category" className="label-width">
                    Category
                  </label>
                  <br />
                  <input type="text" id="category" placeholder="Tragedy" />
                </div>
                <div className="form-item">
                  <label htmlFor="publisher" className="label-width">
                    Publisher
                  </label>
                  <br />
                  <input
                    type="text"
                    id="publisher"
                    placeholder="Charles Scribner's Sons"
                  />
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
                      style={{ width: "55px", marginRight: "2%" }}
                    />
                    <input
                      type="text"
                      id="phone-no"
                      placeholder="8155668282"
                      style={{ width: "400px" }}
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
