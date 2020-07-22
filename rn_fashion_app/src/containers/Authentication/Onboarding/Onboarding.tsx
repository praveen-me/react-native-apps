import React from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import Slide from './Slide';

const {width, height} = Dimensions.get('window');

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}>
          <Slide label={'Relaxed'} />
          <Slide label={'Playful'} right />
          <Slide label={'Excentric'} />
          <Slide label={'Funky'} right />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'cyan',
          }}
        />
        <View
          style={{flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: height * 0.61,
    backgroundColor: 'cyan',
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});

export default Onboarding;
