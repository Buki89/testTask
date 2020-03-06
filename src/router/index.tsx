import React from "react";
import LocationPage from "../components/LocationPage";
import PropertyPage from "../components/PropertyPage";
import ContactPage from "../components/ContactPage";
import FinalPage from "../components/FinalPage";
import HomePage from "../components/HomePage";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path='/' component={HomePage} exact={true} />
      <Route path='/locationpage' component={LocationPage} />
      <Route path='/propertypage' component={PropertyPage} />
      <Route path='/contactpage' component={ContactPage} />
      <Route path='/finalpage' component={FinalPage} />
    </Switch>
  </Router>
);

export default AppRouter;
