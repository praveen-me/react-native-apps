import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const List = ({ todos }) => {
  return (
    <View>
      {
        todos.map((todo, i) => (
          <TouchableOpacity key={i} style={styles.item}>
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