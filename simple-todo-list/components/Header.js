import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ children }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{ children }</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  header : {
    backgroundColor: 'skyblue',
    padding: 15,
    paddingTop: 30
  },
  title: {
    textAlign: 'center',
    color: 'white'
  }
});

export default Header;