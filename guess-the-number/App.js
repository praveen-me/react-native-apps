import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();

  const startGameHandler = enteredNumber => {
    setSelectedNumber(enteredNumber);
  };

  return (
    <View style={styles.root}>
      <Header title="Guess a Number" />
      {selectedNumber ? (
        <GameScreen userChoice={selectedNumber} />
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
