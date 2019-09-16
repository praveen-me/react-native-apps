import { TOGGLE_FAVORITE } from "../types";

export const toggleFavorite = mealId => ({
  type: TOGGLE_FAVORITE,
  payload: {
    mealId
  }
});
