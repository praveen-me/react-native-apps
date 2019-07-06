import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native';
import { connect } from 'react-redux';
import { removeTodo, todoToggleComplete } from '../store/actions/todoActions';

const List = ({ todos, dispatch }) => {
  const handleRemoveTodo = (index) => {
    dispatch(removeTodo(index));
  } 
  
  const handleTodoCompleteToggle = (index) => {
    dispatch(todoToggleComplete(index));
  }

  return (
    <View>
      {
        todos.map(({ text, isCompleted }, i) => (
          <TouchableOpacity 
          key={i} 
          style={styles.item}
          onPress={() => handleRemoveTodo(i)}>
            <Text>{text}</Text>
            <Switch 
            style={styles.toggle}
            value={ isCompleted }
            onValueChange={ () => handleTodoCompleteToggle(i) }
            />
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
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  toggle : {
    marginLeft: "auto"
  }
})

export default connect()(List);