import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import DefaultText from "./DefaultText";
import { useSelector } from "react-redux";

const MealItem = ({ meal, onMealPress }) => {
  const { title, duration, affordability, complexity, imageUrl, id } = meal;

  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const isFavorite = favoriteMeals.some(meal => meal.id === id);

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={() => onMealPress(id, title, isFavorite)}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.imgBg}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <DefaultText>{duration}m</DefaultText>
            <DefaultText>{affordability.toUpperCase()}</DefaultText>
            <DefaultText>{complexity.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    marginVertical: 25,
    borderRadius: 12,
    overflow: "hidden"
  },
  mealRow: {
    flexDirection: "row"
  },
  mealHeader: {
    height: "85%"
  },
  mealDetails: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: "15%"
  },
  imgBg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  title: {
    fontFamily: "robotoBold",
    fontSize: 20,
    color: "#fff",
    textAlign: "center"
  },
  titleContainer: {
    backgroundColor: "rgba(0, 0, 0, .5)",
    paddingVertical: 5,
    paddingHorizontal: 12
  }
});

export default MealItem;
