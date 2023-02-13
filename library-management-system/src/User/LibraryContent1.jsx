import React from 'react'
import "./library.css";
// import { IoSearch } from "react-icons/io5";
import Autoplay from "../components/ImageSlider";
import { Link } from 'react-router-dom';

export const LibraryContent1 = () => {
  return (
    <div className="library-content-1">
        <div className="library-content">
        <div className="library-content-sidebar">
          <div className="book-slider">
            <Autoplay />
          </div>
          <div className="ads">
            <div className="first-part">
              <b>
                "To be yourself in a world that is constantly trying to make you
                something else is the greatest accomplishment." <br />~ Ralph
                Waldo Emerson
              </b>
            </div>
            <div className="first-part">
              <b>
                "To be yourself in a world that is constantly trying to make you
                something else is the greatest accomplishment." <br />~ Ralph
                Waldo Emerson
              </b>
            </div>
            <div className="first-part">
              <b>
                "To be yourself in a world that is constantly trying to make you
                something else is the greatest accomplishment." <br />~ Ralph
                Waldo Emerson
              </b>
            </div>
            <div className="first-part">
              <b>
                "To be yourself in a world that is constantly trying to make you
                something else is the greatest accomplishment." <br />~ Ralph
                Waldo Emerson
              </b>
            </div>
          </div>
        </div>
        <div className="top-picks">
          <div className="top-picks-title">
            <h2>Top Picks</h2>
          </div>
          <div className="top-picks-book">
            <div className="individual-books">
              <div className="book-img">
                <img
                  src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983055/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_3_ywju0f.jpg"
                  alt=""
                />
              </div>
              <div className="book-title">The Great Gabsty</div>
            </div>
            <div className="individual-books">
              <div className="book-img">
                <img
                  src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983055/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_3_ywju0f.jpg"
                  alt=""
                />
              </div>
              <div className="book-title">The Great Gabsty</div>
            </div>
            <div className="individual-books">
              <div className="book-img">
                <img
                  src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983055/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_3_ywju0f.jpg"
                  alt=""
                />
              </div>
              <div className="book-title">The Great Gabsty</div>
            </div>
            <div className="individual-books">
              <div className="book-img">
                <img
                  src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983055/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_3_ywju0f.jpg"
                  alt=""
                />
              </div>
              <div className="book-title">The Great Gabsty</div>
            </div>
          </div>
          <div className="all-books-icon">
            <Link to="/browselibrary"><button >All Books</button></Link>
          </div>
        </div>
      </div>

    </div>
  )
}
export default LibraryContent1;
