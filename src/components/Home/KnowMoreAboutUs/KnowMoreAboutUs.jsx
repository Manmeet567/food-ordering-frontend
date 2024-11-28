import React from "react";
import "./KnowMoreAboutUs.css";
import order from "../../../assets/order.png";
import orderFood from "../../../assets/order-food.png";
import food from "../../../assets/food.png";

function KnowMoreAboutUs() {
  const briefData = [
    {
      title: "Place an Order!",
      img: orderFood,
      desc: "Place order through our website or Mobile app",
    },
    {
      title: "Track Progress",
      img: food,
      desc: "Your can track your order status with delivery time",
    },
    {
      title: "Get your Order!",
      img: order,
      desc: "Receive your order at a lighting fast speed!",
    },
  ];

  return (
    <div className="kmau">
      <div className="kmau-container">
        <div className="kmauc-nav">
          <p>Know more about us!</p>
          <div className="kmauc-nav-items">
            <p className="kmauc-nav-active">Frequent Questions</p>
            <p>Who we are?</p>
            <p>Partner Program</p>
            <p>Help & Support</p>
          </div>
        </div>
        <div className="kmauc-content">
          <div className="kmauc-options">
            <p className="kmauc-options-active">How does Order.UK work?</p>
            <p>What payment methods are accepted?</p>
            <p>Can I track my order in real-time?</p>
            <p>Are there any special discounts or promotions available?</p>
            <p>Is Order.UK available in my area?</p>
          </div>
          <div className="kmauc-brief">
            <div className="kmaucb-cards">
              {briefData.map((item) => (
                <div className="kmaucb-card" key={item.title}>
                  <p>{item.title}</p>
                  <img src={item.img} alt="img" />
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <p>Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KnowMoreAboutUs;
