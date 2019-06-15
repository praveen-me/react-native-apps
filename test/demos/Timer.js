import React, { Component, useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Counter (props){

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    let interVal = setInterval(() => {
      setCounter(counter + 1);
      clearInterval(interVal);
    }, 1000)
  }, [counter])

  const {color, size} = props;
  return (
    <Text style={{color, fontSize: size}}>
      {counter}
    </Text>
  )
}

const Timer = () => {
  return (
    <View style={styles.container}>
      <Counter color={'lightblue'} size={16} />
      <Counter color={'skyblue'} size={32} />
      <Counter color={'steelblue'} size={80} />
      <Counter color={'darkblue'} size={140} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Timer;