import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import * as Fonts from "expo-font";
import { AppLoading } from "expo";

const loadFonts = () => {
  return Fonts.loadAsync({
    openSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    openSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    robotoBold: require("./assets/fonts/Roboto-Bold.ttf")
  });
};

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [totalGuessRounds, setTotalGameRounds] = useState();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  if (!isDataLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  const startGameHandler = enteredNumber => {
    setSelectedNumber(enteredNumber);
  };

  const gameOverHandler = totalRounds => {
    setTotalGameRounds(totalRounds);
  };

  const startGameAgainHandler = () => {
    setTotalGameRounds(null);
    setSelectedNumber(null);
  };

  return (
    <SafeAreaView style={styles.root}>
      <Header title="Guess a Number" />
      {selectedNumber ? (
        totalGuessRounds ? (
          <GameOverScreen
            roundNumbers={totalGuessRounds}
            userNumber={selectedNumber}
            startGameAgain={startGameAgainHandler}
          />
        ) : (
          <GameScreen
            userChoice={selectedNumber}
            onGameOver={gameOverHandler}
          />
        )
      ) : (
        <StartGameScreen onStartGame={startGameHandler} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});
