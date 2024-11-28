import React from "react";
import "./PopularCategories.css";

function PopularCategories({ data }) {
  return (
    <div className="popular-categories">
      <div className="pc-container">
        {data?.map((item) => (
          <div className="pc-card" key={item._id}>
            <img src={item.img} alt="pc-img" />
            <div className="pc-text-content">
              <p>{item.popular_item}</p>
              <p>{item.popular_restaurants_count} Restaurants</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCategories;
