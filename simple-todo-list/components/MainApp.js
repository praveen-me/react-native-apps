import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Header from './Header';
import List from './List';
import Input from './Input';

function MainApp({ todos }) {
  return (
    <View>
      <Header>To-Do List</Header>
      <Input
      placeholder="Type a todo, then hit enter! 🎧"
     />
      <List todos={todos}/>
    </View>
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

function mapStateToProps ({ todos }) {
  return { todos }
}


export default connect(mapStateToProps)(MainApp);