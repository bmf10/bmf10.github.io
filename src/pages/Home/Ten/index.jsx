import React from "react";
import { useHistory } from "react-router-dom";

const Ten = () => {
  const navigate = useHistory();
  return (
    <div className="section">
      <h1>See you later</h1>
      <h2>bye bye!</h2>
      <button className="btn-action" onClick={() => navigate.push("blog")}>
        Blog
      </button>
      <button
        className="btn-action"
        onClick={() => navigate.push("calculator")}
      >
        Calculator
      </button>
    </div>
  );
};

export default Ten;
