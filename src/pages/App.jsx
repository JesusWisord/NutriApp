import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TestPage from './TestPage';
import FoodPage from './FoodPage';
import LandingPage from './LandingPage';
import Header from '../components/Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/Search" component={TestPage} />
      <Route exact path="/Search/:id" component={FoodPage} />
      <Route default component={LandingPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
