import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Blog from "./pages/Blog";
import Calculator from "./pages/Calculator";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/calculator" exact component={Calculator} />
      </Switch>
    </HashRouter>
  );
}

export default App;
