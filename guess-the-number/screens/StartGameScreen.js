import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import DefaultStyles from "./../constants/default-styles";
import MyButton from "../components/MyButton";

const StartGameScreen = ({ onStartGame }) => {
  const [inputValue, setInputValue] = useState("");
  const [enteredNumber, setEnteredNumber] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [buttonWidth, setButtonWidth] = useState({
    width: Dimensions.get("window").width / 4
  });

  const handleTextChange = text => {
    setInputValue(text.replace(/[^0-9]/g, ""));
  };

  useEffect(() => {
    const updateState = () => {
      setButtonWidth({
        width: Dimensions.get("window").width / 4
      });
    };

    Dimensions.addEventListener("change", updateState);

    return () => {
      Dimensions.removeEventListener("change", updateState);
    };
  });

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
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View style={styles.screen}>
            <Text style={{ ...styles.title, ...DefaultStyles.boldText }}>
              Start a New Game!
            </Text>
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
                <View style={buttonWidth}>
                  <Button
                    title="Reset"
                    onPress={resetInput}
                    color={colors.accent}
                  />
                </View>
                <View style={buttonWidth}>
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
                <MyButton onPress={() => onStartGame(enteredNumber)}>
                  START GAME
                </MyButton>
              </Card>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
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
    maxWidth: "90%",
    minWidth: 250,
    alignItems: "center"
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
