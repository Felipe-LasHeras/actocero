import React from "react";
import "./App.css";

const LeftContent = ({ imageUrl, text, titulo }) => {
  return (
    <div
      className="Left"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div>
        <h1>{titulo}</h1>
      </div>
      <div className="Leftimg">
        <img
          src={imageUrl}
          alt="imagen"
          style={{ borderRadius: "30%", display: "flex" }}
        />
      </div>
      <div className="LeftText" style={{ marginLeft: "20px" }}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default LeftContent;
