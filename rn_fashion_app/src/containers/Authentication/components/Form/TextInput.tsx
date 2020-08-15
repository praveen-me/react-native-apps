import React, {forwardRef, MutableRefObject, RefObject} from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {Box, useTheme} from '../../../../contants/theme';

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

const TextInput = forwardRef(
  (
    {
      icon = '',
      handleChange = () => {},
      onBlur = () => {},
      value = '',
      error = '',
      touched = false,
      ...props
    }: TextInputProps,
    ref,
  ) => {
    const theme = useTheme();
    const ICON_CONTAINER_SIZE = theme.borderRadii.m * 2.5;

    const color = !touched
      ? 'bodyText'
      : touched && value.length > 0 && !error
      ? 'primatyBtnBg'
      : 'danger';

    const fieldStyle = {color: theme.colors.textPrimaryColor, flex: 0.8};

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
            style={fieldStyle}
            ref={ref}
          />
        </Box>
        {touched ? (
          <Box
            height={ICON_CONTAINER_SIZE}
            width={ICON_CONTAINER_SIZE}
            backgroundColor={color}
            alignItems="center"
            justifyContent="center"
            marginRight="s"
            style={{borderRadius: ICON_CONTAINER_SIZE / 2}}>
            <Icon
              name={value.length > 0 && touched && !error ? 'check' : 'x'}
              color="white"
              size={14}
              style={{textAlign: 'center'}}
            />
          </Box>
        ) : (
          <></>
        )}
      </Box>
    );
  },
);

export default TextInput;
