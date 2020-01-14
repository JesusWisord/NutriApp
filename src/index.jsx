import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import TestPage from './pages/TestPage';
import './pages/Styles/root.css';

import reducer from './reducers';

import { initialState } from './reducers/initialState';


const store = createStore(
  reducer, // Todos los reducers
  initialState, // Estado inicial
  applyMiddleware(reduxThunk),
);

const container = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <TestPage />
  </Provider>,
  container,
);
