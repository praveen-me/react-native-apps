import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const removeTodo = (index) => {
    setTodos(todos.filter((v, i) => i !== index));
  }
  
  return (
    <>
      <Header>To-Do List</Header>
      <Input 
      placeholder="Type a todo, then hit enter! 🎧"
      addTodo={addTodo}/>
      <List todos={todos}
      removeTodo={removeTodo}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
