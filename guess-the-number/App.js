import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [totalGuessRounds, setTotalGameRounds] = useState();

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
    <View style={styles.root}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});
