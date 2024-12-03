import React from "react";
import "./DealsAndDiscount.css";
import plus from "../../assets/Plus.png";

function DealsAndDiscount({ data, showButton }) {
  return (
    <div className="deals-and-discount">
      <div className="dad-container">
        {data?.map((item) => (
          <div className="dadc-card" key={item._id}>
            <img src={item.deal_img || item.img} alt="deal" />
            <div className="dadcc-discount">
              <p>-{item.deal_discount || item.offer_discount}%</p>
            </div>
            <div className={item.offer ? "dadcc-offer" : "dadcc-deal"}>
              <p>
                {item.offer_restaurant ? item.offer_restaurant : "Restaurant"}
              </p>
              <p>{item.deal_restaurant ? item.deal_restaurant : item.offer}</p>
            </div>
            {item.offer && (
              <div className="dadcc-btn">
                <button>
                  <img className="dadccb-img" src={plus} alt="plus" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DealsAndDiscount;
