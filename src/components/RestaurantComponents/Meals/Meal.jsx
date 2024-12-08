import React, { useEffect } from "react";
import "./Meal.css";
import plus from "../../../assets/Plus.png";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../redux/slices/cartSlice";
import { saveCartData } from "../../../redux/slices/cartSlice";
import { toast } from "react-toastify";
import { debounce } from "lodash";

function Meals({ meal }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    console.log(items);
  }, [items]);

  const debouncedSaveCart = debounce(() => {
    const itemInCart = items.find((item) => item._id === meal._id);
    dispatch(saveCartData({
      userId: user._id,
      itemId: meal._id,
      item_name: meal.meal_name,
      item_price: meal.meal_price,
      item_img: meal.meal_img,
      item_count: itemInCart ? itemInCart.item_count : 1
    }));
  }, 500);

  const handleAddMeal = () => {
    dispatch(addItem(meal)); // Add item locally to cart state
    toast.success("Item added to cart");
    debouncedSaveCart(); // Save cart after debounce delay
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
