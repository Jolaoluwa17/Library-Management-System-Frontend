import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export default class SimpleSlider extends Component {
  render() {
    const { randomBookData } = this.props; // Destructure the consume prop
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };

    return (
      <div className="image-holder">
        <Slider {...settings}>
          {randomBookData.map((item) => (
            <div className="image-holder1">
              <div className="image">
                <img src={item.bookPic.fileUrl} alt="" className="photo_size" />
              </div>
              <div className="preview">
                <div className="image-title">
                  <h3>{item.title}</h3>
                </div>
                <div
                  className="preview-text"
                  style={{ height: "265px", overflowY: "scroll" }}
                >
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
