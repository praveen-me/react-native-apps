import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const getCurrentMeal = data => {
  const mealId = data.navigation.getParam("mealId");

  return MEALS.find(meal => meal.id === mealId);
};

const MealDetailsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Details Screen !!</Text>
    </View>
  );
};

MealDetailsScreen.navigationOptions = navData => {
  const currentMeal = getCurrentMeal(navData);

  return {
    headerTitle: currentMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star-outline"
          onPress={() => {
            console.log("Mark as Favourite");
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailsScreen;
