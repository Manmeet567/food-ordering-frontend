import React, { useEffect } from "react";
import "./Meal.css";
import plus from "../../../assets/Plus.png";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../redux/slices/cartSlice";
import { toast } from "react-toastify";

function Meals({ meal }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    console.log(items);
  }, [items]);

  const handleAddMeal = () => {
    dispatch(addItem(meal));
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
