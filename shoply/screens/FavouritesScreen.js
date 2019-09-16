import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import MenuButton from "../components/MenuButton";

const FavouritesScreen = ({ navigation }) => {
  const meals = useSelector(state => state.meals.favoriteMeals);

  return <MealList meals={meals} navigation={navigation} />;
};

FavouritesScreen.navigationOptions = navOptions => {
  return {
    headerLeft: <MenuButton navOptions={navOptions} />
  };
};

export default FavouritesScreen;
