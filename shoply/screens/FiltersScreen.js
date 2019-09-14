import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MenuButton from "../components/MenuButton";

const FiltersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Filters Screen !!</Text>
    </View>
  );
};

FiltersScreen.navigationOptions = navOptions => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: <MenuButton navOptions={navOptions} />
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FiltersScreen;
