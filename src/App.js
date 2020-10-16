import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
      </Switch>
    </HashRouter>
  );
}

export default App;
