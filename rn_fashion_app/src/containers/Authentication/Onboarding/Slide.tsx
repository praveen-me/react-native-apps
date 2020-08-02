import React from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native';
import AppText from '../../../components/Text';

const {width, height} = Dimensions.get('window');
export const SLIDE_HEIGHT = height * 0.61;

interface SlideProps {
  label: string;
  right?: boolean;
  picture: number;
}

const Slide = ({label, right, picture}: SlideProps) => {
  const transform = [
    {translateY: (SLIDE_HEIGHT - 100) / 2},
    {translateX: right ? width / 2 - 50 : -width / 2 + 50},
    {rotate: right ? '-90deg' : '90deg'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image source={picture} style={styles.picture} />
      </View>
      <View style={[styles.titleContainer, {transform}]}>
        <AppText bold style={styles.title}>
          {label}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
  },
  title: {
    fontSize: 80,
    color: 'white',
    textAlign: 'center',
    lineHeight: 80,
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
  },
});

export default Slide;
