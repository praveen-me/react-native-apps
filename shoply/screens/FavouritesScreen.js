import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import MenuButton from "../components/MenuButton";
import DefaultText from "../components/DefaultText";

const FavouritesScreen = ({ navigation }) => {
  const meals = useSelector(state => state.meals.favoriteMeals);

  if (!meals.length) {
    return (
      <View style={styles.content}>
        <DefaultText style={styles.text}>
          No favorite meals found. Start adding some!!
        </DefaultText>
      </View>
    );
  }

  return <MealList meals={meals} navigation={navigation} />;
};

FavouritesScreen.navigationOptions = navOptions => {
  return {
    headerLeft: <MenuButton navOptions={navOptions} />
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12
  },
  text: {
    fontFamily: "robotoBold",
    fontSize: 18
  }
});

export default FavouritesScreen;
