import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform
} from "react-native";

const CategoryGridTile = ({ category, onSelect }) => {
  const { color, id, title } = category.item;

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp style={styles.gridItem} onPress={() => onSelect(id)}>
      <View style={{ ...styles.container, backgroundColor: color }}>
        <Text style={styles.text} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </TouchableCmp>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1
  },
  container: {
    flex: 1,
    height: 150,
    margin: 25,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.16,
    shadowOffset: {
      width: 10,
      height: 10
    },
    elevation: 15
  },
  text: {
    fontSize: 18,
    fontFamily: "roboto"
  }
});

export default CategoryGridTile;
