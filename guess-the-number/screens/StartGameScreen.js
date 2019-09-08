import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [enteredNumber, setEnteredNumber] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleTextChange = text => {
    setInputValue(state => text.replace(/[^0-9]/g, ""));
  };

  // Closes the keyboard when Touchable Opacity Presses somewhere in the program
  const dismissKeyboard = () => Keyboard.dismiss();

  const resetInput = () => {
    setInputValue("");
    setIsConfirmed(false);
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(inputValue);

    if (chosenNumber <= 0 || chosenNumber > 99 || isNaN(chosenNumber)) {
      Alert.alert("Invalid Number!", " Please add number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInput }
      ]);
      return;
    }

    setIsConfirmed(true);
    setEnteredNumber(chosenNumber);
    setInputValue("");
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            autoCorrect={true}
            keyboardType="number-pad"
            blurOnSubmit
            autoCapitalize="none"
            value={inputValue}
            maxLength={2}
            onChangeText={handleTextChange}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.btn}>
              <Button
                title="Reset"
                onPress={resetInput}
                color={colors.accent}
              />
            </View>
            <View style={styles.btn}>
              <Button
                onPress={confirmHandler}
                title="Confirm"
                color={colors.primary}
              />
            </View>
          </View>
        </Card>
        {isConfirmed && (
          <Card style={styles.numberCard}>
            <Text>You Selected</Text>
            <NumberContainer>{enteredNumber}</NumberContainer>
            <Button title="START GAME" />
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  inputContainer: {
    width: "80%",
    alignItems: "center"
  },
  btn: {
    width: 100
  },
  input: {
    width: 100,
    textAlign: "center"
  },
  numberCard: {
    marginVertical: 10,
    alignItems: "center"
  }
});

export default StartGameScreen;
