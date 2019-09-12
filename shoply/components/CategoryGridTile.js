import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CategoryGridTile = ({ category, onSelect }) => {
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => onSelect(category.item.id)}>
      <View style={styles.gridItem}>
        <Text>{category.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoryGridTile;
