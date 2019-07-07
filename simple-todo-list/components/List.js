import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Todo from './Todo';

const List = ({ todos}) => {

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
      <ScrollView style={styles.todoList}>
      {
        todos.map((todo, i) => (
          <Todo key={i} {...todo} i={i}/>
        ))
      }
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
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
  },
  todoList : {
    flexDirection: 'column'
    // marginVertical: 50,
    // paddingBottom: 20,
  }
})

export default connect()(List);