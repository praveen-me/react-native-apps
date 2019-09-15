import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "@unimodules/core";

const TabAndroidHeader = ({ title }) => (
  <Text style={{ fontWeight: "bold" }}>{title}</Text>
);

const TabHeaderIcon = ({ iconName, tabInfo }) => (
  <Ionicons name={iconName} size={25} color={tabInfo.tintColor} />
);

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.accent
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontFamily: "robotoBold",
    textAlign: "center",
    flex: 1
  }
};

const MealsNavigation = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        title: "Categories Meal"
      }
    },
    CategoryMeal: CategoryMealScreen,
    MealDetails: MealDetailsScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

const FavStackNavigator = createStackNavigator(
  {
    Favourites: {
      screen: FavouritesScreen,
      navigationOptions: {
        headerTitle: "Your Favourites"
      }
    },
    MealDetail: MealDetailsScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigation,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <TabHeaderIcon iconName="ios-restaurant" tabInfo={tabInfo} />
      ),
      tabBarLabel: <TabAndroidHeader title="Meals" />
    }
  },
  Favorite: {
    screen: FavStackNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <TabHeaderIcon iconName="ios-star" tabInfo={tabInfo} />
      ),
      tabBarLabel: <TabAndroidHeader title="Favorites" />
    }
  }
};

const FavMealTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "tomato",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.accent
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: "tomato",
          inactiveTintColor: "black",
          labelStyle: {
            fontSize: 16,
            fontFamily: "robotoBold"
          },
          style: {
            backgroundColor: "#eee",
            alignItems: "center",
            justifyContent: "center"
          }
        }
      });

const FilterNavigator = createStackNavigator(
  {
    Filter: FiltersScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: FavMealTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals"
      }
    },
    Filters: FilterNavigator
  },
  {
    contentOptions: {
      activeTintColor: "tomato",
      labelStyle: {
        fontFamily: "roboto"
      }
    }
  }
);

export default createAppContainer(MainNavigator);
