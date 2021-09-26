import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Home from './features/User/Home/Home';

const Entrypoint = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default Entrypoint;
