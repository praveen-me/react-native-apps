import {useTheme} from '@shopify/restyle';
import React from 'react';
import {StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Theme} from '../contants/theme';

import AppText from './Text';

interface ButtonProps {
  label: string;
  variant: 'default' | 'primary';
  onPress: () => void;
}

const Button = ({label, variant = 'default', onPress}: ButtonProps) => {
  const theme = useTheme<Theme>();

  const backgroundColor =
    variant === 'primary'
      ? theme.colors.primatyBtnBg
      : theme.colors.secondaryBg;

  const color =
    variant === 'primary' ? theme.colors.white : theme.colors.textPrimaryColor;

  return (
    <RectButton style={[styles.container, {backgroundColor}]} onPress={onPress}>
      <AppText medium style={[{color}]} variant="button">
        {label}
      </AppText>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    textAlign: 'center',
  },
});

export default Button;
