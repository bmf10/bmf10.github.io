import React, { FC } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./containers/Home";

const App: FC = () => {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
    </HashRouter>
  );
};
export default App;
