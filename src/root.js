import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from 'store/reducers';

const store = createStore(reducers, {});

const Root = ({ children }) => (
  <Provider store={ store }>
    { children }
  </Provider>
);

export default Root;
