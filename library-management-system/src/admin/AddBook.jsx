import React from "react";
import "./addBook.css";
import QRCode from "qrcode";
import { useState } from "react";

export const AddBook = () => {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQr(url);
      }
    );
  };

  return (
    <div className="AddBook">
      <div className="add-book-header">
        <h2>Welcome to Book</h2>
        <h5>Admin/Add Book</h5>
      </div>
      <div className="add-book-content">
        <div className="book-info">
          <div className="book-info-title">
            <h2>Book Information</h2>
            <p>Please input the information of the specific book.</p>
          </div>
          <form action="#">
            <div className="form">
              <div className="form-item">
                <label htmlFor="uniqueId" className="label-width">
                  Unique Id
                </label>
                <br />
                <input
                  type="text"
                  id="uniqueId"
                  placeholder="11011"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
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
            </div>
            <div className="form-item">
              <label htmlFor="description" className="label-width">
                Description
              </label>
              <br />
              <textarea
                type="text"
                id="description"
                placeholder="The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan"
                style={{
                  width: "750px",
                  height: "150px",
                  fontSize: "14px",
                  padding: "10px",
                  borderWidth: "thin",
                  borderRadius: "5px",
                  // borderColor: "#eeeeee",
                }}
              />
            </div>
          </form>
        </div>
        <div className="qr-pic-container">
          <div className="qr-pic">
          {qr && (
              <>
                <img src={qr} alt=""/>
                <a href={qr} download="qrcode.png">
                  Download
                </a>
              </>
            )}
          </div>
          <div className="generate-btn">
            <button onClick={GenerateQRCode}>Generate QR Code</button>
           
          </div>
        </div>
      </div>
      <button>Submit</button>
    </div>
  );
};
