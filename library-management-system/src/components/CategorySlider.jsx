import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./categorySlider.css"

// export const CategorySlider = () => {
//   return (
//     <div>CategorySlider</div>
//   )
// }

export default class CategorySlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      cssEase: "linear",
      controls: "none"
    };
    return (
      <div className="sliders">
        <Slider {...settings}>
          <div>
            <div className="center_desc-holder">
              <img
                src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983098/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_4_btf2pg.jpg"
                alt=""
                className="photo_size"
              />
              <h3 className="mt-3">The Great Gatsby</h3>
            </div>
          </div>
          <div>
            <div className="center_desc-holder">
              <img
                src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983279/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_8_upwkxy.jpg"
                alt=""
                className="photo_size"
              />
              <h3 className="mt-3">The Great Gatsby</h3>
            </div>
          </div>
          <div>
            <div className="center_desc-holder">
              <img
                src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983275/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_7_oqriob.jpg"
                alt=""
                className="photo_size"
              />
              <h3 className="mt-3">The Great Gatsby</h3>
            </div>
          </div>
          <div>
            <div className="center_desc-holder">
              <img
                src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983183/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_6_qtnn8x.jpg"
                alt=""
                className="photo_size"
              />
              <h3 className="mt-3">The Great Gatsby</h3>
            </div>
          </div>
          <div>
            <div className="center_desc-holder">
              <img
                src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983594/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_10_iv1ewz.jpg"
                alt=""
                className="photo_size"
              />
              <h3 className="mt-3">The Great Gatsby</h3>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
