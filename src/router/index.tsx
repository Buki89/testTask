import React from "react";
import Location from "../components/Location";
import RealEstate from "../components/RealEstate";
import ContactForm from "../components/ContactForm";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path='/' exact={true} />
      <Route path='/location' component={Location} />
      <Route path='/realEstate' component={RealEstate} />
      <Route path='/contactForm' component={ContactForm} />
    </Switch>
  </Router>
);

export default AppRouter;
