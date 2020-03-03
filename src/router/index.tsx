import React from "react";
import LocationPage from "../components/LocationPage";
import PropertyPage from "../components/PropertyPage";
import ContactPage from "../components/ContactPage";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path='/' exact={true} />
      <Route path='/location' component={LocationPage} />
      <Route path='/PropertyPage' component={PropertyPage} />
      <Route path='/ContactPage' component={ContactPage} />
    </Switch>
  </Router>
);

export default AppRouter;
