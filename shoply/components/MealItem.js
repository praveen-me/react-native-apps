import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";

const MealItem = ({ meal, onMealPress }) => {
  const { title, duration, affordability, complexity, imageUrl, id } = meal;

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={() => onMealPress(id)}>
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
            <Text>{duration}m</Text>
            <Text>{affordability.toUpperCase()}</Text>
            <Text>{complexity.toUpperCase()}</Text>
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
