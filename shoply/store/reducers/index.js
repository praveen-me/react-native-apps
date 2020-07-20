import { combineReducers } from 'redux';
import categoriesReducer from './categories.reducer';
import tagsReducer from './tags.reducer';
import newsReducer from './news.reducer';
import searchReducer from './search.reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  tags: tagsReducer,
  news: newsReducer,
  search: searchReducer
});

export default rootReducer;
