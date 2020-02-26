import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Test from './Test';
import USDASearchPage from './USDASearchPage';
import DialSearchPage from './DialSearchPage';
import FoodPage from './FoodPage';
import LandingPage from './LandingPage';
import DietPage from './DietPage';
import Header from '../components/Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/NutriApp/USDASearch" component={USDASearchPage} />
      <Route exact path="/NutriApp/DialSearch" component={DialSearchPage} />
      <Route exact path="/NutriApp/Search/:id" component={FoodPage} />
      <Route exact path="/NutriApp/Diet" component={DietPage} />
      <Route exact path="/NutriApp/Test" component={Test} />
      <Route default component={LandingPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
