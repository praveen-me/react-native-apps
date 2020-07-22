import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Slide, {SLIDE_HEIGHT} from './Slide';
import Animated from 'react-native-reanimated';
import {useValue, interpolateColor, onScrollEvent} from 'react-native-redash';

const {width} = Dimensions.get('window');

const slides = [
  {
    label: 'Relaxed',
    color: '#BFEAF5',
  },
  {
    label: 'Playful',
    color: '#BEECC4',
  },
  {
    label: 'Excentric',
    color: '#FFEAD9',
  },
  {
    label: 'Funky',
    color: '#FFDDDD',
  },
];

const Onboarding = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({x});
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{onScroll}}>
          {slides.map((slide, index) => (
            <Slide key={index} label={slide.label} right={Boolean(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor,
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
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});

export default Onboarding;
