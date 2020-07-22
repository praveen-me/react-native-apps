import React from 'react';
import {StyleSheet, Text, View, Button, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

interface SlideProps {
  label: string;
  right?: boolean;
}

const Slide = ({label, right}: SlideProps) => {
  return (
    <View style={{width}}>
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Slide;
