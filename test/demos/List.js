import React from 'react';
import { FlatList, SectionList, Text, StyleSheet } from 'react-native';

// 1 - FlatList
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

export const SimpleFlatList = () => {
  renderItem = ( { item } ) => (
    <Text style={flatListstyles.row}>{ item.text }</Text>
  )
  
  return (
    <FlatList
      style={flatListstyles.container}
      data={rows}
      keyExtractor={extractKey}
      renderItem={renderItem}
    />
  )
};

const flatListstyles = StyleSheet.create({
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


// 2 - Section List
const sections = [
  {
    id: 0,
    title: 'Basic Components',
    data: [
      {id: 0, text: 'View'},
      {id: 1, text: 'Text'},
      {id: 2, text: 'Image'},
    ]
  },
  {
    id: 1,
    title: 'List Components',
    data: [
      {id: 3, text: 'ScrollView'},
      {id: 4, text: 'ListView'},
    ]
  }
];

export const SimpleSectionList = () => {
  const renderSectionHeader = ( { section } ) => (
    <Text style={sectionListStyles.header}>{ section.title }</Text>
  );

  const renderItem = ({ item }) => (
    <Text style={sectionListStyles.row}>{ item.text }</Text>
  )

  return (
    <SectionList 
    keyExtractor={extractKey}
    style={sectionListStyles.container}
    renderSectionHeader={renderSectionHeader}
    renderItem={renderItem}
    sections={sections}
    />
  )
};

const sectionListStyles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
});
