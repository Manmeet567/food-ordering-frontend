import React from "react";
import "./Opportunities.css";

function Opportunities({ opdata }) {
  return (
    <div className="opportunities">
      <div className="op-container">
        {opdata?.map((item) => (
          <div className="op-card" key={item._id}>
            <img src={item.img} alt="img" />
            <div className="op-tagline">
                <p>{item.tagline}</p>
            </div>
            <div className="op-text-content">
                <p>{item.opportunity}</p>
                <p>{item.title}</p>
                <button>Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Opportunities;
