import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useScreens } from "react-native-screens";

import MealsNavigation from "./navigation.js/MealsNavigation";

useScreens();

const loadFonts = () =>
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
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

  return <MealsNavigation />;
}
