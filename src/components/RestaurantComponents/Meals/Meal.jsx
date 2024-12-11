import React, { useEffect } from "react";
import "./Meal.css";
import plus from "../../../assets/Plus.png";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/slices/cartSlice";
import { toast } from "react-toastify";
import { setShowCart } from "../../../redux/slices/cartSlice";


function Meals({ meal }) {
  const dispatch = useDispatch();

  const handleAddMeal = () => {
    dispatch(addItem(meal));
    dispatch(setShowCart(true));
    toast.success("Item added to cart");
  };

  return (
    <div className="meal">
      <div className="meal-text-content">
        <p>{meal?.meal_name}</p>
        <p>{meal?.meal_desc}</p>
        <p>₹{meal?.meal_price}</p>
      </div>
      <div className="meal-img">
        <img src={meal?.meal_img} alt="meal-img" />
        <div className="add-meal-btn" title="Add Meal" onClick={handleAddMeal}>
          <img src={plus} alt="plus" />
        </div>
      </div>
    </div>
  );
}

export default Meals;
