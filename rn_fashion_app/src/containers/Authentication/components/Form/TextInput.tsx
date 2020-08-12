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
  validator: (input: string) => boolean;
}

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({
  icon = '',
  validator = () => true,
  ...props
}: TextInputProps) => {
  const [valid, setValid] = useState<InputState>(null);
  const [input, setInput] = useState<string>('');

  const color =
    valid === Pristine
      ? 'bodyText'
      : valid === Valid
      ? 'primatyBtnBg'
      : 'danger';

  const validate = useCallback(() => {
    setValid(validator(input));
  }, [input, validator]);

  useEffect(() => {
    if (input && valid !== Pristine) {
      validate();
    }
  }, [input, valid, validate]);

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
          value={input}
          onChangeText={(text) => {
            setInput(text);
          }}
          onBlur={validate}
          style={{color: theme.colors.textPrimaryColor, flex: 0.8}}
        />
      </Box>
      {(valid === Valid || valid === Invalid) && (
        <Box
          borderRadius="m"
          height={theme.borderRadii.m * 2}
          width={theme.borderRadii.m * 2}
          backgroundColor={color}
          alignItems="center"
          justifyContent="center"
          marginRight="s">
          <Icon
            name={valid === Valid ? 'check' : 'x'}
            color="white"
            size={14}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
