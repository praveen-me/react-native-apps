import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "@unimodules/core";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.accent
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontFamily: "open-sans",
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
        headerTitle: "Favourites"
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
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      }
    }
  },
  Favorite: {
    screen: FavStackNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      }
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
            fontSize: 16
          },
          style: {
            backgroundColor: "#eee",
            alignItems: "center",
            justifyContent: "center"
          }
        }
      });

export default createAppContainer(FavMealTabNavigator);
