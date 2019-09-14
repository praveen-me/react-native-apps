import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import MenuButton from "../components/MenuButton";

const FavouritesScreen = ({ navigation }) => {
  return <MealList meals={MEALS} navigation={navigation} />;
};

FavouritesScreen.navigationOptions = navOptions => {
  return {
    headerLeft: <MenuButton navOptions={navOptions} />
  };
};

export default FavouritesScreen;
