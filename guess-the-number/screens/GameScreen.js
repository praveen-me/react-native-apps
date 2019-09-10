import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions
} from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";
import MyButton from "../components/MyButton";

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
  const initialGuess = genRandomNum(1, 100, userChoice);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const [guessRounds, setGuessRounds] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(guessRounds);
    }

    const updateState = () => {
      setIsSmallScreen(Dimensions.get("window").height < 500);
    };

    Dimensions.addEventListener("change", updateState);

    () => {
      Dimensions.removeEventListener("change", updateState);
    };
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
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = genRandomNum(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(nextNumber);
    setGuessRounds(prevState => prevState + 1);
    setPastGuesses(prevState => [nextNumber, ...prevState]);
  };

  return (
    <View style={styles.container}>
      <Text>Opponent's Guess</Text>
      {isSmallScreen ? (
        <View style={styles.btnContainerSmall}>
          <MyButton onPress={() => handleNextGuess("lower")}>
            <Ionicons name="ios-remove" size={24} />
          </MyButton>
          <NumberContainer>{currentGuess}</NumberContainer>
          <MyButton onPress={() => handleNextGuess("greater")}>
            <Ionicons name="ios-add" size={24} />
          </MyButton>
        </View>
      ) : (
        <>
          <NumberContainer>{currentGuess}</NumberContainer>
          <Card style={styles.btnContainer}>
            <MyButton onPress={() => handleNextGuess("lower")}>
              <Ionicons name="ios-remove" size={24} />
            </MyButton>
            <MyButton onPress={() => handleNextGuess("greater")}>
              <Ionicons name="ios-add" size={24} />
            </MyButton>
          </Card>
        </>
      )}
      <View style={styles.listContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) => (
            <View key={guess} style={styles.listItem}>
              <Text>#{pastGuesses.length - index}</Text>
              <Text>{guess}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
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
    marginTop: Dimensions.get("window").height > 600 ? 20 : 5
  },
  listContainer: {
    flex: 1,
    width: Dimensions.get("window").width > 350 ? "60%" : "80%"
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  listItem: {
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 3
  },
  btnContainerSmall: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default GameScreen;
