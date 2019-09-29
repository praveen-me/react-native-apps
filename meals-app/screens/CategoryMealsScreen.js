import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

const CategoryMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");

  const currentCategory = CATEGORIES.find(
    category => category.id === categoryId
  );

  const meals = useSelector(state => state.meals.filteredMeals);

  const currentCategoryMeals = meals.filter(meal =>
    meal.categoryIds.includes(currentCategory.id)
  );

  return <MealList meals={currentCategoryMeals} navigation={navigation} />;
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
