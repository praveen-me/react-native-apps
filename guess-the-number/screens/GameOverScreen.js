import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = ({ roundNumbers, userNumber, startGameAgain }) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!!</Text>
      <Text>Number of Rounds: {roundNumbers}</Text>
      <Text>User Rounds: {userNumber}</Text>
      <Button title="START GAME AGAIN" onPress={startGameAgain} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default GameOverScreen;
