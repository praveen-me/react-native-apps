import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = ({ addGoal }) => {
  const [goal, setGoal] = useState("");

  const handleGoalChange = value => {
    setGoal(value);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter you goal"
        onChangeText={handleGoalChange}
        value={goal}
        style={styles.input}
      />
      <Button title="Add" onPress={() => addGoal(goal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row"
  },
  input: {
    width: "80%",
    borderColor: "#000000",
    padding: 8,
    borderWidth: 1
  }
});

export default GoalInput;
