import React from 'react'
import "./skeletonBookLoader.css"

export const SkeletonBookLoader = () => {
  return (
    <div className="skeleton-book-loader">
        <div className="skeleton-book"></div>
        <div className="skeleton-book-text"></div>
    </div>
  )
}
export default SkeletonBookLoader;