import { useEffect, useState } from "react";
import DealsAndDiscount from "../../DealsAndDiscount/DealsAndDiscount";
import "./RestaurantItems.css";
import Meal from "../Meals/Meal";

function RestaurantItems({ offers, categories }) {
  return (
    <div className="restaurant-items">
      <DealsAndDiscount data={offers} showButton={true} />
      {categories?.map((category) => (
        <div className="restaurant-menu" key={category._id}>
          <p className="menu-category">{category?.category_name}</p>
          <div className="meals">
            {category?.meals.map((meal) => (
              <Meal meal={meal} key={meal._id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RestaurantItems;
