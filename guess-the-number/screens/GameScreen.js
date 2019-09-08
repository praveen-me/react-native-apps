import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
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

const GameScreen = ({ userChoice, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    genRandomNum(1, 100, userChoice)
  );
  const [guessRounds, setGuessRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(guessRounds);
    }
  }, [currentGuess, userChoice]);

  const handleNextGuess = direction => {
    if (
      (direction === "lower" && userChoice > currentGuess) ||
      (direction === "greater" && userChoice < currentGuess)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong.", [
        { text: "Sorry!", style: "cancel" }
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = genRandomNum(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(nextNumber);
    setGuessRounds(prevState => prevState + 1);
  };

  return (
    <View style={styles.container}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.btnContainer}>
        <Button title="LOWER" onPress={() => handleNextGuess("lower")} />
        <Button title="UPPER" onPress={() => handleNextGuess("greater")} />
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
