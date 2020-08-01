import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import colors from './../contants/colors';
import AppText from './Text';

interface ButtonProps {
  label: string;
  variant: 'default' | 'primary';
}

const Button = ({label, variant = 'default'}: ButtonProps) => {
  const backgroundColor =
    variant === 'primary' ? colors.primatyBtnBg : colors.secondaryBg;

  const color = variant === 'primary' ? colors.white : colors.textPrimaryColor;

  return (
    <RectButton style={[styles.container, {backgroundColor}]}>
      <AppText medium style={[styles.label, {color}]}>
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
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Button;
