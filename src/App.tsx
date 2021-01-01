import React, { FC, Suspense } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./containers/Home";
import "./i18n";

const App: FC = () => {
  return (
    <Suspense fallback={null}>
      <HashRouter>
        <Route exact path="/" component={Home} />
      </HashRouter>
    </Suspense>
  );
};
export default App;
