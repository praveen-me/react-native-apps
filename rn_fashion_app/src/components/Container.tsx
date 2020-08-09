import React, {ReactNode} from 'react';
import {StyleSheet, Dimensions, Image, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import theme, {Box} from '../contants/theme';

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const {width} = Dimensions.get('screen');

const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

const assets = [require('./../assets/images/patterns/1.jpeg')];

const Container = ({children, footer}: ContainerProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Box flex={1} backgroundColor={'textPrimaryColor'}>
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.61}>
          <Image
            source={assets[0]}
            style={{
              height,
              width,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            height,
            width,
            ...StyleSheet.absoluteFillObject,
            top: -height * 0.61,
          }}
        />
        <Box
          flex={1}
          backgroundColor="white"
          borderRadius="xl"
          borderTopLeftRadius={0}>
          {children}
        </Box>
      </Box>
      <Box backgroundColor="textPrimaryColor" paddingTop="m">
        {footer}
        <Box height={insets.bottom} />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({});

export default Container;
