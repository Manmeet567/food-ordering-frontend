import React from "react";
import "./RestaurantBanner.css";
import { useLocation } from "react-router-dom";
import restaurantBanner from "../../../assets/restaurant-banner.png";
import orderCompleted from "../../../assets/completed.png";
import motocross from "../../../assets/Motocross.png";
import ReactStars from "react-stars";
import clock from "../../../assets/Clock.png";

function RestaurantBanner() {
  const location = useLocation();
  const { restaurantName } = location.state || {};
  return (
    <div className="restaurant-banner">
      <div className="rb-main-container">
        <div className="rb-container">
          <img className="rb-banner-img" src={restaurantBanner} alt="banner" />
          <div className="rb-text-content">
            <p>I'm lovin' it!</p>
            <h1>{restaurantName}</h1>
            <div className="rb-btn-grp">
              <button>
                <img src={orderCompleted} alt="asd" />
                <span>Minimum Order: 12 GBP</span>
              </button>
              <button>
                <img src={motocross} alt="moto" />
                <span>Delivery in 20-25 Minutes</span>
              </button>
            </div>
          </div>
          <div className="rb-img">
            <img src={restaurantBanner} alt="rb-img" />
            <div className="rb-rating">
              <p>3.5</p>
              <ReactStars
                count={5}
                value={3.5}
                size={18}
                color2={"#ffd700"}
                edit={false}
                className="rb-stars"
              />
              <p>1320 reviews</p>
            </div>
          </div>
        </div>
        <div className="rb-timing">
          <p>
            <img src={clock} alt="clock" /> Open until 3:00 AM
          </p>
        </div>
      </div>
    </div>
  );
}

export default RestaurantBanner;
