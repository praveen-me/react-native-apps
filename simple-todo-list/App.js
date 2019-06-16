import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import MainApp from './components/MainApp';

const App = () => (
  <Provider store={store}>
    <MainApp />
  </Provider>
);

export default App;