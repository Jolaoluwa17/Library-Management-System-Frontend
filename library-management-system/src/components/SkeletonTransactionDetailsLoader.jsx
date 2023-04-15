import React from "react";
import "./skeletonTransactionDetailsLoader.css";

export const SkeletonTransactionDetailsLoader = () => {
  return (
    <div className="skeleton-trans-details-loader">
      <div className="skeleton-details-picture"></div>
      <div className="skeleton-details-container">
        <div className="skeleton-details-title"></div>
        <div className="skeleton-details-name" style={{ width: "260px" }}></div>
        <div className="skeleton-details-name" style={{ width: "230px" }}></div>
        <div className="skeleton-details-name" style={{ width: "150px" }}></div>
        <div className="skeleton-details-name" style={{ width: "220px" }}></div>
        <div className="skeleton-details-name" style={{ width: "210px" }}></div>
        <div className="skeleton-details-name" style={{ width: "170px" }}></div>
      </div>
      <div className="skeleton-details-container">
        <div className="skeleton-details-title"></div>
        <div className="skeleton-details-name" style={{ width: "100px" }}></div>
        <div className="skeleton-details-name" style={{ width: "160px" }}></div>
        <div className="skeleton-details-name" style={{ width: "150px" }}></div>
        <div className="skeleton-details-name" style={{ width: "220px" }}></div>
      </div>
    </div>
  );
};
export default SkeletonTransactionDetailsLoader;
