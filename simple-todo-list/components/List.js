import React from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions, Button } from 'react-native';
import { connect } from 'react-redux';
import Todo from './Todo';
import { removeAllTodos } from '../store/actions/todoActions';

const { height } = Dimensions.get('window');

const List = ({ todos, dispatch }) => {
  const _keyExtractor = (item, index) => String(index);

  const handleAllTodosDelete = () => dispatch(removeAllTodos())

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
            <Button title="Delete All To-dos" onPress={handleAllTodosDelete} />
          </View>
        )
      }
      <FlatList
        renderItem={obj => <Todo {...obj.item}/>}
        data={todos}
        keyExtractor={_keyExtractor}
        style={styles.todoList}
        contentInset= {{bottom: 60}}
       />
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
    marginLeft: 'auto',
  },
  todoList : {
    maxHeight: height - 250,
  },
});

export default connect()(List);