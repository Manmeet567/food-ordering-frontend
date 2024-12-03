import React from "react";
import "./Meal.css";
import plus from '../../../assets/Plus.png';

function Meals({ meal }) {
  return (
    <div className="meal">
      <div className="meal-text-content">
        <p>{meal?.meal_name}</p>
        <p>{meal?.meal_desc}</p>
        <p>₹{meal?.meal_price}</p>
      </div>
      <div className="meal-img">
        <img src={meal?.meal_img} alt="meal-img" />
        <div className="add-meal-btn" title="Add Meal">
          <img src={plus} alt="plus" />
        </div>
      </div>
    </div>
  );
}

export default Meals;
