import img from "./img.svg";
import React from "react";

const Default = () => {
  return (
    <div className="section">
      <img className="img" src={img} alt="default" />
      <h2>Default Page</h2>
    </div>
  );
};

export default Default;
