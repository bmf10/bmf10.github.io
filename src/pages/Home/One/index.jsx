import React from "react";

const One = () => {
  const sayHello = () => {
    let hours = new Date().getHours();
    if (hours < 10 && hours >= 5) {
      return "Good Morning!";
    } else if (hours <= 15 && hours >= 10) {
      return "Good Afternoon!";
    } else if (hours <= 18 && hours > 15) {
      return "Good Evening!";
    } else {
      return "Good Night!";
    }
  };

  return (
    <div className="section">
      <h1>Hello, </h1>
      <h2>{sayHello()}</h2>
    </div>
  );
};

export default One;
