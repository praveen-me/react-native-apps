import React, {useRef} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Slide, {SLIDE_HEIGHT} from './Slide';
import Animated, {divide, multiply} from 'react-native-reanimated';
import {interpolateColor, useScrollHandler} from 'react-native-redash';
import SubSlide from './SubSlide';
import Dot from '../../../components/Dot';

const {width} = Dimensions.get('window');

const BORDER_RADIUS = 75;

const slides = [
  {
    title: 'Relaxed',
    color: '#BFEAF5',
    subTitle: 'Find your Outfits',
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    picture: require('./../../../assets/images/1.png'),
  },
  {
    title: 'Playful',
    color: '#BEECC4',
    subTitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of the outfit ideas',
    picture: require('./../../../assets/images/2.png'),
  },
  {
    title: 'Excentric',
    color: '#FFEAD9',
    subTitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
    picture: require('./../../../assets/images/3.png'),
  },
  {
    title: 'Funky',
    color: '#FFDDDD',
    subTitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    picture: require('./../../../assets/images/4.png'),
  },
];

const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const {scrollHandler, x} = useScrollHandler();

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  const onPress = (index: number) => {
    if (scroll.current) {
      scroll.current
        .getNode()
        .scrollTo({x: width * (index + 1), animated: true});
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}>
          {slides.map((slide, index) => (
            <Slide
              key={index}
              label={slide.title}
              picture={slide.picture}
              right={Boolean(index % 2)}
            />
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
        <Animated.View style={[styles.footerContent]}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{index}} />
            ))}
          </View>

          <Animated.View
            style={[
              styles.footerSlides,
              {transform: [{translateX: multiply(x, -1)}]},
            ]}>
            {slides.map(({description, subTitle}, index) => (
              <SubSlide
                key={index}
                {...{description, subTitle}}
                last={index === slides.length - 1}
                onPress={() => onPress(index)}
              />
            ))}
          </Animated.View>
        </Animated.View>
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
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerSlides: {
    width: width * slides.length,
    flexDirection: 'row',
  },
});

export default Onboarding;
