import React, { useState } from 'react';

import { Provider } from 'react-redux';
import store from './store/store';
import MainApp from './components/MainApp';


console.log(store.getState(), "store")

const App = () => (
  <Provider store={store}>
    <MainApp />
  </Provider>
);

export default App;