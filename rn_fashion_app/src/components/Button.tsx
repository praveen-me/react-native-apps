import {useTheme} from '@shopify/restyle';
import React from 'react';
import {StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Theme} from '../contants/theme';

import AppText from './Text';

interface ButtonProps {
  label?: string;
  variant?: 'default' | 'primary' | 'transparent';
  onPress: () => void;
  children?: string;
  textVariant?: 'default' | 'primary' | 'transparent';
  textBtn?: boolean;
}

const Button = ({
  label = '',
  variant = 'default',
  onPress = () => {},
  children = '',
  textVariant = 'default',
  textBtn = false,
}: ButtonProps) => {
  const theme = useTheme<Theme>();

  let backgroundColor = theme.colors['slide.grey'];

  if (variant === 'primary') {
    backgroundColor = theme.colors.primatyBtnBg;
  } else if (variant === 'transparent') {
    backgroundColor = 'transapent';
  }

  let color =
    variant === 'primary' ? theme.colors.white : theme.colors.textPrimaryColor;

  color =
    textVariant !== 'default'
      ? textVariant === 'primary'
        ? theme.colors.primatyBtnBg
        : theme.colors.textPrimaryColor
      : color;

  const inlineStyles = {
    backgroundColor,
    height: textBtn ? 'auto' : 50,
    width: textBtn ? 'auto' : 245,
    borderRadius: textBtn ? 0 : 25,
  };

  return (
    <RectButton style={[styles.container, inlineStyles]} onPress={onPress}>
      <AppText medium style={[{color}]} variant="button">
        {label || children}
      </AppText>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    textAlign: 'center',
  },
});

export default Button;
