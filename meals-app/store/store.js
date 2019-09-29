import { createStore, combineReducers, compose } from "redux";
import mealReducer from "./reducers/meals";

const rootReducer = combineReducers({
  meals: mealReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
