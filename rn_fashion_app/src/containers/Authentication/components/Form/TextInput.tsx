import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import theme, {Box} from '../../../../contants/theme';

import Icon from 'react-native-vector-icons/Feather';

interface TextInputProps extends RNTextInputProps {
  icon: string;
  handleChange: (e: any) => void;
  onBlur: (e: any) => void;
  value: string;
  placeholder: string;
  error?: string;
  touched?: boolean;
}

const TextInput = ({
  icon = '',
  handleChange = () => {},
  onBlur = () => {},
  value = '',
  error = '',
  touched = false,
  ...props
}: TextInputProps) => {
  const color = !touched
    ? 'bodyText'
    : touched && value.length > 0 && !error
    ? 'primatyBtnBg'
    : 'danger';

  console.log(touched && value.length > 0 && !error);

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      height={48}
      borderRadius="s"
      borderColor={color}
      borderWidth={StyleSheet.hairlineWidth}
      marginVertical="s"
      justifyContent="space-between">
      <Box flexDirection="row" alignItems="center">
        <Box padding="s">
          <Icon name={icon} {...{color: theme.colors[color]}} size={16} />
        </Box>
        <RNTextInput
          {...props}
          underlineColorAndroid="transparent"
          placeholderTextColor={theme.colors[color]}
          value={value}
          onChangeText={handleChange}
          onBlur={onBlur}
          style={{color: theme.colors.textPrimaryColor, flex: 0.8}}
        />
      </Box>
      {touched ? (
        <Box
          borderRadius="m"
          height={theme.borderRadii.m * 2}
          width={theme.borderRadii.m * 2}
          backgroundColor={color}
          alignItems="center"
          justifyContent="center"
          marginRight="s">
          <Icon
            name={value.length > 0 && touched && !error ? 'check' : 'x'}
            color="white"
            size={14}
          />
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default TextInput;
