import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMealScreen = ({ navigation }) => {
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;
