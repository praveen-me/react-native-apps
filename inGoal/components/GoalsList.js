import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GoalsList = ({ item, deleteGoal }) => {
  return (
    <TouchableOpacity onPress={() => deleteGoal(item.id)}>
      <View style={styles.item}>
        <Text>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 5,
    backgroundColor: "#ddd",
    borderColor: "#aaa",
    borderWidth: 1,
    borderRadius: 3,
    padding: 8
  }
});

export default GoalsList;
