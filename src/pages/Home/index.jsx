import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./App.css";

const Home = () => {
  const navigate = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, My website is being repaired.</p>
        <button type="button" onClick={() => navigate.push("/blog")}>
          Blog
        </button>
      </header>
    </div>
  );
};

export default Home;
