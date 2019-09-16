import { TOGGLE_FAVORITE, SET_FILTERS } from "../types";

export const toggleFavorite = mealId => ({
  type: TOGGLE_FAVORITE,
  payload: {
    mealId
  }
});

export const setFilters = filterSettings => ({
  type: SET_FILTERS,
  payload: {
    filterSettings
  }
});
