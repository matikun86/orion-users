import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Contacts from "./components/Contacts";
import Letters from "./components/Letters";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Contacts}/>
      <Route path="/letters" component={Letters}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
