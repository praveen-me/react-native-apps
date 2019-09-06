import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({ addGoal, isAddGoalModalOpened, handleToggleModal }) => {
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
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="CANCEL" color="red" onPress={handleToggleModal} />
          </View>
          <View style={styles.btn}>
            <Button title="ADD" onPress={() => addGoal(goal)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  input: {
    width: "80%",
    borderColor: "#000000",
    padding: 8,
    borderWidth: 1
  },
  btn: {
    width: "40%"
  },
  btnContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    width: "60%"
  }
});

export default GoalInput;
