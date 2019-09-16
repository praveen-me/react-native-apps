import React from "react";
import { ScrollView, Image, View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const getCurrentMeal = data => {
  const mealId = data.getParam("mealId");

  return MEALS.find(meal => meal.id === mealId);
};

const ListItem = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  );
};

const MealDetailsScreen = ({ navigation }) => {
  const {
    imageUrl,
    duration,
    affordability,
    complexity,
    ingredients,
    steps
  } = getCurrentMeal(navigation);

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: imageUrl }} style={styles.img} />
      <View style={styles.details}>
        <DefaultText>{duration}m</DefaultText>
        <DefaultText>{affordability.toUpperCase()}</DefaultText>
        <DefaultText>{complexity.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {steps.map((step, index) => (
        <ListItem key={step}>
          {index + 1} - {step}
        </ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = navData => {
  const currentMeal = getCurrentMeal(navData.navigation);

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
  img: {
    width: "100%",
    height: 200
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  title: {
    textAlign: "center",
    marginVertical: 10,
    fontFamily: "robotoBold",
    fontSize: 18
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailsScreen;
