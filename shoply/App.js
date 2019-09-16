import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useScreens } from "react-native-screens";
import { Provider } from "react-redux";

import MealsNavigation from "./navigation.js/MealsNavigation";
import store from "./store/store";

useScreens();

const loadFonts = () =>
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    robotoBold: require("./assets/fonts/Roboto-Bold.ttf")
  });

export default function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  if (!isDataLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsDataLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MealsNavigation />
    </Provider>
  );
}
