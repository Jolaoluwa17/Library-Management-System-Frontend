import React from 'react'
import "./cartCard.css"

export const CartCard = () => {
  return (
    <div className="cart-card">
        <div className="cart-card-container">
            <div className="cart-book-details-main">
            <div className="cart-book-img">
            <img
                  src="https://res.cloudinary.com/dneawlwcp/image/upload/v1673983055/Final%20Year%20Project%20Pictures/_get_premium_download_high_resolution_imagedesigned_with_EDIT.org_3_ywju0f.jpg"
                  alt=""
                />
            </div>
            <div className="cart-book-details">
                <div className="cart-details-main1">
                    <b>Name of Book: </b>Moby Dick
                </div>
                <div className="cart-details-main1">
                <b>Name of Authour: </b>Olusanya Jolaoluwa Oluwapelumi
                </div>
                <div className="cart-details-main1">
                    <b>Status: </b>On-Shelf
                </div>
                <div className="cart-details-main1">
                    <b>No. of Book: </b>5
                </div>
            </div>
            </div>
            <div className="cart-remove-btn">
                <button>Remove</button>
            </div>
        </div>
    </div>
  )
}
export default CartCard;
