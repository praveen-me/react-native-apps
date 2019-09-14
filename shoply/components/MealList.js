import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

const MealList = ({ meals, navigation }) => {
  const onMealPress = mealId => {
    navigation.navigate({
      routeName: "MealDetails",
      params: {
        mealId
      }
    });
  };

  const renderMeals = meal => {
    return <MealItem meal={meal.item} onMealPress={onMealPress} />;
  };

  return (
    <View style={styles.list}>
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

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  }
});

export default MealList;
