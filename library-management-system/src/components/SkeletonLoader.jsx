import React from "react";
import "./skeletonLoader.css"; // import CSS file for styling

const SkeletonLoader = () => {
  return (
    <div>
      <div className="skeleton"></div>
      <div className="skeleton-title"></div>
    </div>
  );
};

export default SkeletonLoader;
