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
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddGoalModalOpened, setIsAddGoalModalOpened] = useState(false);

  const addGoal = goal => {
    setGoals(prevState => [
      ...prevState,
      { id: Math.random() * Date.now(), value: goal }
    ]);
  };

  const deleteGoal = id => {
    console.log(id);
    setGoals(prevState => prevState.filter(item => item.id !== id));
  };

  const handleToggleModal = () => {
    setIsAddGoalModalOpened(!isAddGoalModalOpened);
  };

  const _renderItem = ({ item }) => (
    <GoalsList item={item} deleteGoal={deleteGoal} />
  );

  const _keyExtractor = item => String(item.id);

  return (
    <View style={styles.root}>
      <Button onPress={handleToggleModal} title="Add New Goal" />
      <GoalInput
        addGoal={addGoal}
        isAddGoalModalOpened={isAddGoalModalOpened}
      />
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
  }
});
