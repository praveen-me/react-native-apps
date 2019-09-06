import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input style={styles.input} />
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            <Button title="Reset" color={colors.accent} />
          </View>
          <View style={styles.btn}>
            <Button title="Confirm" color={colors.primary} />
          </View>
        </View>
      </Card>
    </View>
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
    width: 50,
    textAlign: "center"
  }
});

export default StartGameScreen;
