import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");

  const currentCategory = CATEGORIES.find(
    category => category.id === categoryId
  );

  const meals = MEALS.filter(meal =>
    meal.categoryIds.includes(currentCategory.id)
  );

  return <MealList meals={meals} navigation={navigation} />;
};

CategoryMealScreen.navigationOptions = navData => {
  const categoryId = navData.navigation.getParam("categoryId");

  const currentCategory = CATEGORIES.find(
    category => category.id === categoryId
  );

  return {
    title: currentCategory.title
  };
};

export default CategoryMealScreen;
