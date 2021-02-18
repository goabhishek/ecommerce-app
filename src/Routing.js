import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./Cart/Cart";
import HomePage from "./Home/HomePage";
import NotFound from "./NotFound/NotFound";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routing;
