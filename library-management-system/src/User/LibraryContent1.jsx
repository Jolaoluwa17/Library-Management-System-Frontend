import React from 'react'
import "./library.css";
// import { IoSearch } from "react-icons/io5";
import {  BiBrain, BiChurch } from "react-icons/bi";
import { GrCloudSoftware } from "react-icons/gr";
import { GiMaterialsScience, GiPaintBucket, GiBookmark } from "react-icons/gi";
import { MdHistoryEdu, MdComputer } from "react-icons/md";
import { TbLanguage } from "react-icons/tb";
import Autoplay from "../components/ImageSlider";
import { BsCloudDownload } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const LibraryContent1 = () => {
  return (
    <div className="library-content-1">
        <div className="library-content">
        <div className="library-content-sidebar">
          <div className="first-section-library">
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <MdComputer />
              </div>
              Computer Science
            </div>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <BiBrain />
              </div>
              Philosophy & Psychology
            </div>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <BiChurch />
              </div>
              Religion
            </div>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <GrCloudSoftware />
              </div>
              Social Sciences
            </div>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <TbLanguage />
              </div>
              Language
            </div>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <GiMaterialsScience />
              </div>
              Science
            </div>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <BsCloudDownload />
              </div>
              Technology & Applied Science
            </div>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <GiPaintBucket />
              </div>
              Arts and Recreation
            </div>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <GiBookmark />
              </div>
              Literature
            </div>
            <div className="sidebar-content">
              <div className="sidebar-content-icon">
                <MdHistoryEdu />
              </div>
              History & Geography
            </div>
          </div>
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
            <div className="second-part">
              <b>
                "Keep away from people who try to belittle your ambitions. Small
                people always do that, but the really great make you feel that
                you, too, can become great."
                <br />~ Mark Twain
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
