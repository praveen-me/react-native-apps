import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");

  const currentCategory = CATEGORIES.find(
    category => category.id === categoryId
  );

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen !!</Text>
      <Button
        title="GO TO MEAL"
        onPress={() => navigation.navigate("MealDetails")}
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
    title: currentCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;
