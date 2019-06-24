import { createStore, compose } from 'redux';
import rootReducer from './reducer/rootReducer';
import { persistStore, autoRehydrate } from 'redux-persist';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(), autoRehydrate);

// for make store persist
persistStore(store);

export default store;