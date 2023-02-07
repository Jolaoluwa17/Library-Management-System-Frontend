import React from "react";
import "./totalBooks.css";
import { IoSearch } from "react-icons/io5";

export const TotalBooks = () => {
  return (
    <div className="TotalBooks">
      <div className="totalBooks-header">
        <div className="header">
          <h2>Welcome to the Book Library</h2>
          <h5>Admin/Book Library</h5>
        </div>
        <div className="search-bar">
          <input type="search" />
          <div>
            <IoSearch className="search-btn" />
          </div>
        </div>
      </div>
      <div className="total-books-content">
        <div className="book-cover">
          <div className="book">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673982800/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_yfzk1s.jpg"
              alt=""
            />
            <span>
              <button>View Details</button>
            </span>
          </div>
          <div className="book-title">Moby Dick</div>
        </div>
        <div className="book-cover">
          <div className="book">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673982932/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_1_karj0g.jpg"
              alt=""
            />
            <span>
              <button>View Details</button>
            </span>
          </div>
          <div className="book-title">Moby Dick</div>
        </div>
        <div className="book-cover">
          <div className="book">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673982941/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_2_p50lhi.jpg"
              alt=""
            />
            <span>
              <button>View Details</button>
            </span>
          </div>
          <div className="book-title">Moby Dick</div>
        </div>
        <div className="book-cover">
          <div className="book">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983098/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_4_btf2pg.jpg"
              alt=""
            />
            <span>
              <button>View Details</button>
            </span>
          </div>
          <div className="book-title">Moby Dick</div>
        </div>
        <div className="book-cover">
          <div className="book">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983470/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_9_z9dxts.jpg"
              alt=""
            />
            <span>
              <button>View Details</button>
            </span>
          </div>
          <div className="book-title">Moby Dick</div>
        </div>
        <div className="book-cover">
          <div className="book">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983594/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_10_iv1ewz.jpg"
              alt=""
            />
            <span>
              <button>View Details</button>
            </span>
          </div>
          <div className="book-title">Moby Dick</div>
        </div>
        <div className="book-cover">
          <div className="book">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983279/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_8_upwkxy.jpg"
              alt=""
            />
            <span>
              <button>View Details</button>
            </span>
          </div>
          <div className="book-title">Moby Dick</div>
        </div>
        <div className="book-cover">
          <div className="book">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983183/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_6_qtnn8x.jpg"
              alt=""
            />
            <span>
              <button>View Details</button>
            </span>
          </div>
          <div className="book-title">Moby Dick</div>
        </div>
        <div className="book-cover">
          <div className="book">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983275/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_7_oqriob.jpg"
              alt=""
            />
            <span>
              <button>View Details</button>
            </span>
          </div>
          <div className="book-title">Moby Dick</div>
        </div>
        <div className="book-cover">
          <div className="book">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983279/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_8_upwkxy.jpg"
              alt=""
            />
            <span>
              <button>View Details</button>
            </span>
          </div>
          <div className="book-title">Moby Dick</div>
        </div>
      </div>
    </div>
  );
};
