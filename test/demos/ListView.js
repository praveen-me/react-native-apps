import React, { useState } from 'react';
import { ListView, Text, StyleSheet } from 'react-native';

// Row data (hard-coded)
const rows = [
  {id: 0, text: 'View'},
  {id: 1, text: 'Text'},
  {id: 2, text: 'Image'},
  {id: 3, text: 'ScrollView'},
  {id: 4, text: 'ListView'},
];

const rowHasChanged = (r1, r2) => r1.id !== r2.id;

const simpleListDS = new ListView.DataSource({ rowHasChanged });

export const SimpleList = () => {
  const [dataSource, setDataSource] = useState(simpleListDS.cloneWithRows(rows));

  const renderRow = ({ text }) => (
    <Text style={simpleListStyles.row}>{text}</Text>
  )

  return (
    <ListView 
    style={simpleListStyles.container}
    dataSource={dataSource}
    renderRow={renderRow}/>
  )
  
};

const simpleListStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})

