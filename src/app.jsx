import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers';
import App from './containers/App';

let store = createStore(reducers);

let root = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);