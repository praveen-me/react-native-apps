import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import MainApp from './components/MainApp';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainApp />
    </PersistGate>
  </Provider>
);

export default App;