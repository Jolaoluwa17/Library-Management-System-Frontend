import React from "react";
import "./skeletonImageSlider.css";

export const SkeletonImageSlider = () => {
  return (
    <div className="skeleton-image-slider">
      <div className="skeleton-image"></div>
      <div className="skeleton-slider-content">
        <div className="skeleton-slider-title">
            <div className="skeleton-slider-title2"></div>
        </div>
        <div className="skeleton-text-main">
          <div className="skeleton-slider-text" style={{width: "90%"}}></div>
          <div className="skeleton-slider-text" style={{width: "80%"}}></div>
          <div className="skeleton-slider-text" style={{width: "100%"}}></div>
          <div className="skeleton-slider-text" style={{width: "95%"}}></div>
          <div className="skeleton-slider-text" style={{width: "92%"}}></div>
          <div className="skeleton-slider-text" style={{width: "100%"}}></div>
          <div className="skeleton-slider-text" style={{width: "76%"}}></div>
          <div className="skeleton-slider-text" style={{width: "90%"}}></div>
          <div className="skeleton-slider-text" style={{width: "100%"}}></div>
          <div className="skeleton-slider-text" style={{width: "87%"}}></div>
          <div className="skeleton-slider-text" style={{width: "100%"}}></div>
          <div className="skeleton-slider-text" style={{width: "97%"}}></div>
          <div className="skeleton-slider-text" style={{width: "80%"}}></div>
          <div className="skeleton-slider-text" style={{width: "92%"}}></div>
          <div className="skeleton-slider-text" style={{width: "95%"}}></div>
          <div className="skeleton-slider-text" style={{width: "80%"}}></div>
          <div className="skeleton-slider-text" style={{width: "100%"}}></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonImageSlider;
