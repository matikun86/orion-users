import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import List from "./components/List";
import Letters from "./components/Letters";
import Map from "./components/Map";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={List}/>
      <Route path="/letters" component={Letters}/>
      <Route path="/map" component={Map}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
