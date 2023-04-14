import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import { SkeletonImageSlider } from "./SkeletonImageSlider";

export default class SimpleSlider extends Component {
  render() {
    const { randomBookData, randomLoading } = this.props; // Destructure the consume prop
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
          {randomLoading ? (
            <SkeletonImageSlider />
          ) : (
            randomBookData.map((item) => (
              <div className="image-holder1" key={item._id}>
                <div className="image">
                  <img
                    src={item.bookPic.fileUrl}
                    alt=""
                    className="photo_size"
                  />
                </div>
                <div className="preview">
                  <div
                    className="image-title"
                    style={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      maxWidth: "100%",
                      padding: "2px",
                    }}
                  >
                    <h3
                      style={{
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        maxWidth: "97%",
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <div
                    className="preview-text"
                    style={{ height: "310px", overflowY: "scroll" }}
                  >
                    {item.description}
                  </div>
                </div>
              </div>
            ))
          )}
        </Slider>
      </div>
    );
  }
}
