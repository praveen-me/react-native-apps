import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const genRandomNum = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return genRandomNum(min, max, exclude);
  }
  return rndNum;
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    genRandomNum(1, 100, props.userChoice)
  );

  return (
    <View style={styles.container}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.btnContainer}>
        <Button title="LOWER" />
        <Button title="UPPER" />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  btnContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
    marginTop: 20
  }
});

export default GameScreen;
