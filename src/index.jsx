import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import App from './pages/App';
import './pages/Styles/root.css';

import reducer from './reducers';

import { initialState } from './reducers/initialState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer, // Todos los reducers
  initialState, // Estado inicial
  composeEnhancers(applyMiddleware(reduxThunk)),
);

const container = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container,
);
