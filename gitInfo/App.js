import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistedStore } from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <Text>Open up App.js to start working on your app!</Text>
      </PersistGate>
    </Provider>
  );
}
