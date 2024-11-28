import React from "react";
import "./InfoBar.css";

function InfoBar() {
  const infoData = [
    {
      number: "546",
      about: "Registered Riders",
    },
    {
      number: "789,900",
      about: "Orders Delivered",
    },
    {
      number: "690",
      about: "Restaurants Partnered",
    },
    {
      number: "17,457",
      about: "Food items",
    },
  ];

  return (
    <div className="info-bar">
      <div className="info-bar-container">
        {infoData.map((item) => (
          <div className="ib-info" key={item.number}>
            <p>{item.number}+</p>
            <p>{item.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoBar;
