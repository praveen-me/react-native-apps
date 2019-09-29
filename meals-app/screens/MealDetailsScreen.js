import React, { useCallback, useEffect } from "react";
import { ScrollView, Image, View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from "../store/actions/meals.action";

const ListItem = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  );
};

const MealDetailsScreen = ({ navigation }) => {
  const mealId = navigation.getParam("mealId");
  const meals = useSelector(state => state.meals.meals);

  const {
    imageUrl,
    duration,
    affordability,
    complexity,
    ingredients,
    steps
  } = meals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(
    () => dispatch(toggleFavorite(mealId)),
    [dispatch, mealId]
  );

  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const isFavorite = favoriteMeals.some(meal => meal.id === mealId);

  useEffect(() => {
    navigation.setParams({
      toggleFav: toggleFavoriteHandler
    });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({
      isFavorite
    });
  }, [isFavorite]);

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
  const toggleFav = navData.navigation.getParam("toggleFav");
  const isFavorite = navData.navigation.getParam("isFavorite");

  return {
    headerTitle: navData.navigation.getParam("mealTitle"),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFav}
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
