import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from 'store/reducers';

const Root = ({ children, initialState = {} }) => (
  <Provider store={ createStore(reducers, initialState) }>
    { children }
  </Provider>
);

export default Root;
