import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const _keyExtractor = item => item.id;

const CategoriesScreen = ({ navigation }) => {
  const goToCategoryMeals = categoryId => {
    navigation.navigate({
      routeName: "CategoryMeal",
      params: {
        categoryId
      }
    });
  };

  const renderCategories = category => {
    return (
      <CategoryGridTile category={category} onSelect={goToCategoryMeals} />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={_keyExtractor}
        data={CATEGORIES}
        renderItem={renderCategories}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default CategoriesScreen;
