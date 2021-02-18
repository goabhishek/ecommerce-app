import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Phone from "./Home/Phone";
import NotFound from "./NotFound/NotFound";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/phones/:id" component={Phone} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routing;
