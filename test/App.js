import React, { Component, useState, useEffect } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'

function Counter (props){

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCounter(counter + 1);
    }, 1000)
  })

  const {color, size} = props;
  return (
    <Text style={{color, fontSize: size}}>
      {counter}
    </Text>
  )
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter color={'lightblue'} size={16} />
        <Counter color={'skyblue'} size={32} />
        <Counter color={'steelblue'} size={80} />
        <Counter color={'darkblue'} size={140} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})