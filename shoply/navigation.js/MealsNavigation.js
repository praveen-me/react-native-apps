import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import Colors from '../constants/Colors';

const MealsNavigation = createStackNavigator({
  Categories: {
		screen: CategoriesScreen,
		navigationOptions : {
			title: "Categories Meal",
		}
	},
  CategoryMeal: CategoryMealScreen,
  MealDetails: MealDetailsScreen
}, {
	defaultNavigationOptions : {
		headerStyle: {
			backgroundColor: Colors.accent
		},
		headerTintColor: "#fff",
		headerTitleStyle: {
			fontFamily: "open-sans",
			textAlign: "center",
			flex: 1
		}
	}
});

export default createAppContainer(MealsNavigation);
