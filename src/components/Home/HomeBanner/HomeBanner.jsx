import React from "react";
import "./HomeBanner.css";
import girl from "../../../assets/banner-girl.png";
import homegirl from "../../../assets/home-girl.png";
import comment1 from "../../../assets/home-cmnt-1.png";
import comment2 from "../../../assets/home-cmnt-2.png";
import comment3 from "../../../assets/home-cmnt-3.png";

function HomeBanner() {
  return (
    <div className="home-banner">
      <div className="hb-container">
        <img className="banner-girl" src={girl} alt="banner-girl" />
        <div className="hb-text-content">
          <p>Order Restaurant food, takeaway and groceries.</p>
          <h1>Feast Your Senses,</h1>
          <h1>Fast and Fresh</h1>
          <div className="hbtc-input-box">
            <label>Enter a postcode to see what we deliver</label>
            <div className="hbtc-input">
              <input type="text" placeholder="e.g. EC4R 3TE" />
              <button>Search</button>
            </div>
          </div>
        </div>
        <img className="home-girl" src={homegirl} alt="homegirl" />
        <div className="orange-div"></div>
        <img className="comment1" src={comment1} alt="cmnt" />
        <img className="comment2" src={comment2} alt="cmnt" />
        <img className="comment3" src={comment3} alt="cmnt" />
      </div>
    </div>
  );
}

export default HomeBanner;
