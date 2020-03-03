import React from "react";
import Location from "./Location";
import RealEstate from "./RealEstate";
import ContactForm from "./ContactForm";
import { Switch, Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <Switch>
      <Route path='/' exact={true}></Route>
      <Route path='/location'>
        <Location />
      </Route>
      <Route path='/realEstate'>
        <RealEstate />
      </Route>
      <Route path='contactForm'>
        <ContactForm />
      </Route>
    </Switch>
  );
};

export default Dashboard;
