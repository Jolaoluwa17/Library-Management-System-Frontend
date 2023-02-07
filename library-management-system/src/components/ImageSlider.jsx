import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="image-holder">
            <div className="image-holder1">
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673982800/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_yfzk1s.jpg"
                  alt=""
                  className="photo_size"
                />
              </div>
              <div className="preview">
                <div className="image-title">
                  <h3>The Great Gabsty</h3>
                </div>
                <div className="preview-text">
                  The Great Gatsby is a 1925 novel by American writer F. Scott
                  Fitzgerald.
                  <br /> Set in the Jazz Age on Long Island, near New York City,
                  the novel depicts <br />
                  first-person narrator Nick Carraway's interactions with
                  mysterious millionaire Jay Gatsby and Gatsby's obsession to
                  reunite with his former lover, Daisy Buchanan.
                </div>
              </div>
            </div>
          </div>
          <div className="image-holder">
            <div className="image-holder1">
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673982932/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_1_karj0g.jpg"
                  alt=""
                  className="photo_size"
                />
              </div>
              <div className="preview">
                <div className="image-title">
                  <h3>The Great Gabsty</h3>
                </div>
                <div className="preview-text">
                  The Great Gatsby is a 1925 novel by American writer F. Scott
                  Fitzgerald.
                  <br /> Set in the Jazz Age on Long Island, near New York City,
                  the novel depicts <br />
                  first-person narrator Nick Carraway's interactions with
                  mysterious millionaire Jay Gatsby and Gatsby's obsession to
                  reunite with his former lover, Daisy Buchanan.
                </div>
              </div>
            </div>
          </div>
          <div className="image-holder">
            <div className="image-holder1">
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673982941/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_2_p50lhi.jpg"
                  alt=""
                  className="photo_size"
                />
              </div>
              <div className="preview">
                <div className="image-title">
                  <h3>The Great Gabsty</h3>
                </div>
                <div className="preview-text">
                  The Great Gatsby is a 1925 novel by American writer F. Scott
                  Fitzgerald.
                  <br /> Set in the Jazz Age on Long Island, near New York City,
                  the novel depicts <br />
                  first-person narrator Nick Carraway's interactions with
                  mysterious millionaire Jay Gatsby and Gatsby's obsession to
                  reunite with his former lover, Daisy Buchanan.
                </div>
              </div>
            </div>
          </div>
          <div className="image-holder">
            <div className="image-holder1">
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983098/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_4_btf2pg.jpg"
                  alt=""
                  className="photo_size"
                />
              </div>
              <div className="preview">
                <div className="image-title">
                  <h3>The Great Gabsty</h3>
                </div>
                <div className="preview-text">
                  The Great Gatsby is a 1925 novel by American writer F. Scott
                  Fitzgerald.
                  <br /> Set in the Jazz Age on Long Island, near New York City,
                  the novel depicts <br />
                  first-person narrator Nick Carraway's interactions with
                  mysterious millionaire Jay Gatsby and Gatsby's obsession to
                  reunite with his former lover, Daisy Buchanan.
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
