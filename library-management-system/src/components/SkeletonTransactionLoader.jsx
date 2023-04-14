import React from "react";
import "./skeletonTransactionLoader.css";

export const SkeletonTransactionLoader = () => {
  return (
    <div className="skeleton-tran-loader">
      <div className="skeleton-transaction-container">
        <div className="skeleton-trans-profile"></div>
        <div className="skeleton-trans-details">
            <div className="trans-details"></div>
            <div className="trans-details" style={{width: "330px"}}></div>
            <div className="trans-details" style={{width: "100px"}}></div>
            <div className="trans-details" style={{width: "200px"}}></div>
            <div className="trans-details" style={{width: "250px"}}></div>
            <div className="trans-details" style={{width: "230px"}}></div>
        </div>
        <div className="skeleton-see-details"></div>
      </div>
    </div>
  );
};
export default SkeletonTransactionLoader;
