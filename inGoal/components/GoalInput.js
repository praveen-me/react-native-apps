import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({ addGoal, isAddGoalModalOpened }) => {
  const [goal, setGoal] = useState("");

  const handleGoalChange = value => {
    setGoal(value);
  };

  return (
    <Modal animationType="slide" visible={isAddGoalModalOpened}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter you goal"
          onChangeText={handleGoalChange}
          value={goal}
          style={styles.input}
        />
        <Button title="Add" onPress={() => addGoal(goal)} />
      </View>
    </Modal>
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
