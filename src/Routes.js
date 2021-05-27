import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {Home as HomeView, Contact as ContactView, About as AboutView} from './views';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeView />
      </Route>
      <Route exact path="/about">
        <AboutView />
      </Route>
      <Route exact path="/contact">
        <ContactView />
      </Route>
    </Switch>
  );
};

export default Routes; 