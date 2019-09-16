import { MEALS } from "../../data/dummy-data";

const initState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mealReducer;
