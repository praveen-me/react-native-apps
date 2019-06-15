import React, { useState } from 'react';
import {StyleSheet, TextInput } from 'react-native';

const Input = ({ placeholder }) => {
  const [todo, setTodo] = useState('');

  const setTodoValue = (text) => {
    setTodo(text);
  } 

  return (
    <TextInput 
    style={styles.input}
    value={todo}
    placeholder={placeholder}
    onChangeText={setTodoValue} />
  )
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
  }
})

export default Input;