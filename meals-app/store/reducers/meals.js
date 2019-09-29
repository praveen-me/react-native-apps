import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../types";

const initState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      const { mealId } = action.payload;
      let favoriteMeals = [...state.favoriteMeals];

      const mealIndex = favoriteMeals.findIndex(meal => meal.id === mealId);

      if (mealIndex !== -1) {
        favoriteMeals = favoriteMeals.filter(meal => meal.id !== mealId);
      } else {
        favoriteMeals.push(state.meals.find(meal => meal.id === mealId));
      }
      return {
        ...state,
        favoriteMeals
      };
    }

    case SET_FILTERS: {
      const { filterSettings } = action.payload;
      let myFilterMeals;
      const keys = Object.keys(filterSettings);

      const isNoFiltersApplied = keys.every(
        key => filterSettings[key] === false
      );

      if (isNoFiltersApplied) {
        myFilterMeals = state.meals;
      } else {
        myFilterMeals = state.meals.filter((meal, i) => {
          for (const filter in filterSettings) {
            if (filterSettings[filter] && meal[filter]) return true;
          }
          return false;
        });
      }

      return {
        ...state,
        filteredMeals: myFilterMeals
      };
    }

    default:
      return state;
  }
};

export default mealReducer;
