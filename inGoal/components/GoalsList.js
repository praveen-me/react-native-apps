import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const GoalsList = ({ item, deleteGoal }) => {
  return (
    <TouchableOpacity onPress={() => deleteGoal(item.id)}>
      <View>
        <Text>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalsList;
