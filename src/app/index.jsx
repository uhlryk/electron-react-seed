import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './stores/index.js';
import reducer from './reducers/index.js';

var store = createStore(reducer);

render(
  <Provider store={store}>

  </Provider>,
  document.getElementById('root')
);