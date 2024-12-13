import React from "react";
import Tagbar from "../Tagbar/Tagbar";
import "./MainCheckout.css";
import { useSelector } from "react-redux";
import mapPin from "../../../assets/MapPin.png";
import { Link } from "react-router-dom";
import right from "../../../assets/right.png";

function MainCheckout() {
  const { items, totalAmount } = useSelector((state) => state.cart);

  return (
    <div className="main-checkout">
      <div className="mc-container">
        <Tagbar tag="Your Order Details" />
        <div className="mc-details">
          <div className="mc-cart-items">
            <div className="mci-items">
              {items?.length == 0 && <div>No items in cart.</div>}
              {items?.map((item) => (
                <div className="mcii-item" key={item?._id}>
                  <div className="mcii-detail">
                    <img src={item?.meal_img} alt="img" />
                    <div className="mcii-info">
                      <p>{item?.meal_name}</p>
                      <p>
                        {item?.item_count}x{" "}
                        {item?.item_count > 1 ? "items" : "item"}
                      </p>
                    </div>
                  </div>
                  <div className="mcii-price">
                    <p>₹{item?.meal_price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mci-notes">
              <label>Notes</label>
              <input type="text" placeholder="Add order notes" />
            </div>
          </div>

          <div className="mc-delivery-address">
            <Link to="/your-address" className="mcda-address">
              <div className="mcda-first">
                <div className="mcda-map-img">
                  <img src={mapPin} alt="pin" />
                </div>
                <div className="mcdaf-info">
                  <p>Delivery Address</p>
                  <p>45, Green Street, Sector 12...</p>
                </div>
              </div>
              <div className="mcda-second">
                <img src={right} alt="right" />
              </div>
            </Link>

            <div className="mcda-tax">
              <div className="mcdat">
                <span>Items</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="mcdat">
                <span>Sales Tax</span>
                <span>₹{totalAmount ? "10" : "0"}</span>
              </div>
            </div>
            <div className="mcda-total">
              <span>
                Subtotal ({items?.length} {items?.length > 1 ? "items" : "item"}
                )
              </span>
              <span>₹{totalAmount ? totalAmount + 10 : totalAmount}</span>
            </div>

            <Link to="/payment-page">
              <div className="mcda-btn">Choose Payment Method</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCheckout;
