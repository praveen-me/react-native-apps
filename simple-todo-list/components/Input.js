import React, { useState } from 'react';
import {StyleSheet, TextInput } from 'react-native';
import { addTodo } from '../store/actions/todoActions';
import { connect } from 'react-redux';

const Input = ({ placeholder, dispatch }) => {
  const [todo, setTodo] = useState('');

  const setTodoValue = (text) => {
    setTodo(text);
  } 

  const handleSubmit = () => {
    dispatch(addTodo({
      text: todo,
      isCompleted: false
    }));
    setTodo('');
  }

  return (
    <TextInput 
    style={styles.input}
    value={todo}
    placeholder={placeholder}
    onChangeText={setTodoValue}
    onSubmitEditing={handleSubmit} />
  )
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
    color: 'black',
    paddingLeft: 15
  }
})

export default connect()(Input);