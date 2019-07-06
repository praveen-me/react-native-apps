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
        todos && (
          <View style={styles.showTodoCountContainer}>
            <View style={styles.showTodoCountWrapper}>
              <Text>To-dos Left</Text>
              <Text style={styles.showTodoCountText}>
              { todos.filter(todo => todo.isCompleted === false).length }
              </Text>
            </View>
            
            <View style={styles.showTodoCountWrapper}>
              <Text>To-dos Completed</Text>
              <Text style={styles.showTodoCountText}> { todos.filter(todo => todo.isCompleted === true).length }</Text>
            </View>

          </View>
        )
      }      
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
  },
  showTodoCountContainer : {
    padding: 15,
    backgroundColor: '#ddd'
  },
  showTodoCountWrapper: {
    flexDirection: 'row',
    marginVertical: 10
  },
  showTodoCountText: {
    marginLeft: 'auto'
  }
})

export default connect()(List);