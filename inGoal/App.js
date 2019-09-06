import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from "react-native";
import GoalsList from "./components/GoalsList";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const handleGoalChange = value => {
    setGoal(value);
  };

  const addGoal = () => {
    setGoals(prevState => [
      ...prevState,
      { id: Math.random() * Date.now(), value: goal }
    ]);
    // setGoal(prevState => '');
  };

  const _renderItem = ({ item }) => <GoalsList value={item.value} />;

  const _keyExtractor = item => String(item.id);

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter you goal"
          onChangeText={handleGoalChange}
          value={goal}
          style={styles.input}
        />
        <Button title="Add" onPress={addGoal} />
      </View>
      <View>
        <FlatList
          data={goals}
          renderItem={_renderItem}
          keyExtractor={_keyExtractor}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50
  },
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
