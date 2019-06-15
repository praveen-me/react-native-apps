import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const List = ({ todos, removeTodo }) => {
  return (
    <View>
      {
        todos.map((todo, i) => (
          <TouchableOpacity 
          key={i} 
          style={styles.item}
          onPress={() => removeTodo(i)}>
            <Text>{todo}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )
};

const styles = StyleSheet.create({
  item : {
    backgroundColor: 'whitesmoke',
    marginBottom : 5,
    padding: 15
  }
})

export default List;