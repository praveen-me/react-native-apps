import React, { useState, useEffect, useCallback } from "react";
import { ScrollView, View, Text, StyleSheet, Switch } from "react-native";
import MenuButton from "../components/MenuButton";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const FilterSwitch = ({ label, state, handleValueChange }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        value={state}
        thumbColor={Colors.primary}
        onValueChange={handleValueChange}
        trackColor={{ true: Colors.accent }}
      />
    </View>
  );
};

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const handleGlutenChange = () => setIsGlutenFree(!isGlutenFree);

  const handleLactoseChange = () => setIsLactoseFree(!isLactoseFree);

  const handleVeganChange = () => setIsVegan(!isVegan);

  const handleVegetarianChange = () => setIsVegetarian(!isVegetarian);

  const saveFilters = useCallback(
    () => ({
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    }),
    [isGlutenFree, isLactoseFree, isVegan, isVegetarian]
  );

  useEffect(() => {
    navigation.setParams({
      save: saveFilters
    });
  }, [saveFilters]);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.title}>Available Filters / Restrictions</Text>
        <FilterSwitch
          label="Gluten Free"
          state={isGlutenFree}
          handleValueChange={handleGlutenChange}
        />
        <FilterSwitch
          label="Lactose Free"
          state={isLactoseFree}
          handleValueChange={handleLactoseChange}
        />
        <FilterSwitch
          label="Vegan"
          state={isVegan}
          handleValueChange={handleVeganChange}
        />
        <FilterSwitch
          label="Vegetarian"
          state={isVegetarian}
          handleValueChange={handleVegetarianChange}
        />
      </View>
    </ScrollView>
  );
};

FiltersScreen.navigationOptions = navOptions => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: <MenuButton navOptions={navOptions} />,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-save"
          onPress={navOptions.navigation.getParam("save")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    marginVertical: 10,
    fontSize: 18,
    fontFamily: "robotoBold",
    textAlign: "center"
  },
  filterContainer: {
    marginVertical: 15,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default FiltersScreen;
