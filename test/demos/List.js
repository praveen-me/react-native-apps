import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

const rows = [
  {
    id: 0,
    text: 'Apple'
  },
  {
    id: 1,
    text: 'Banana'
  },
  {
    id: 2,
    text: 'Orange'
  },
  {
    id: 3,
    text: 'Mango'
  },
  {
    id: 4,
    text: 'Grapes'
  }
];

const extractKey = ({ id }) => `${id}`;

const List = () => {
  renderItem = ( { item } ) => (
    <Text style={styles.row}>{ item.text }</Text>
  )
  
  return (
    <FlatList
      style={styles.container}
      data={rows}
      keyExtractor={extractKey}
      renderItem={renderItem}
    />
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue'
  }
});

export default List;