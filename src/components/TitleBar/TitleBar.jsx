import React from "react";
import './TitleBar.css';

function TitleBar({ title, children }) {
  return (
    <div className="title-bar">
      <div className="tb-container">
        <div className="tb-title">
          <p>{title}</p>
        </div>
        <div className="tb-extra">{children}</div>
      </div>
    </div>
  );
}

export default TitleBar;
