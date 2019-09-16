import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../types";

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

      if (favoriteMeals.findIndex(meal => meal.id === mealId) !== -1) {
        favoriteMeals = favoriteMeals.filter(meal => meal.id !== mealId);
      } else {
        const meal = state.meals.find(meal => meal.id === mealId);

        favoriteMeals.push(meal);
      }
      return {
        ...state,
        favoriteMeals
      };
    }

    default:
      return state;
  }
};

export default mealReducer;
