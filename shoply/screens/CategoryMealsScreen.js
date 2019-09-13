import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");

  const currentCategory = CATEGORIES.find(
    category => category.id === categoryId
  );

  const meals = MEALS.filter(meal =>
    meal.categoryIds.includes(currentCategory.id)
  );

  const renderMeals = meal => {
    return <MealItem meal={meal.item} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        keyExtractor={item => item.id}
        renderItem={renderMeals}
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  }
});

export default CategoryMealScreen;
