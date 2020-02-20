import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Test from './Test';
import SearchPage from './SearchPage';
import FoodPage from './FoodPage';
import LandingPage from './LandingPage';
import DietPage from './DietPage';
import Header from '../components/Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/Search" component={SearchPage} />
      <Route exact path="/Search/:id" component={FoodPage} />
      <Route exact path="/Diet" component={DietPage} />
      <Route exact path="/Test" component={Test} />
      <Route default component={LandingPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
