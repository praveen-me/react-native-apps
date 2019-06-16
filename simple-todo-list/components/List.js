import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { removeTodo } from '../store/actions/todoActions';

const List = ({ todos, dispatch }) => {
  const handleRemoveTodo = (index) => {
    dispatch(removeTodo(index));
  } 
  
  return (
    <View>
      {
        todos.map((todo, i) => (
          <TouchableOpacity 
          key={i} 
          style={styles.item}
          onPress={() => handleRemoveTodo(i)}>
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

export default connect()(List);