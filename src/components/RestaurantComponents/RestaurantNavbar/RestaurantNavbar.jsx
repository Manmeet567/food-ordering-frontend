import { useState } from "react";
import "./RestaurantNavbar.css";

function RestaurantNavbar() {
  const [activeItem, setActiveItem] = useState("Offers");
  const handleClick = (item) => {
    setActiveItem(item);
  };

  const menuItems = [
    "Offers",
    "Burgers",
    "Fries",
    "Snacks",
    "Salads",
    "Cold drinks",
    "Happy Meal®",
    "Desserts",
    "Hot drinks",
    "Sauces",
    "Orbit®",
  ];

  return (
    <nav className="restaurant-navbar">
      <div className="rn-container">
        {menuItems.map((item, index) => (
          <p
            key={index}
            className={`menu-item ${
              activeItem === item ? "rn-active-nav-item" : ""
            }`}
            onClick={() => handleClick(item)}
          >
            {item}
          </p>
        ))}
      </div>
    </nav>
  );
}

export default RestaurantNavbar;
