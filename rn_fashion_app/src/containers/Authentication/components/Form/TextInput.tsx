import React, {useState} from 'react';
import {TextInput as RNTextInput} from 'react-native';
import theme, {Box} from '../../../../contants/theme';

import Icon from 'react-native-vector-icons/Feather';

interface TextInputProps {
  placeholder: string;
  icon: string;
  validator: (input: string) => boolean;
}

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({
  placeholder = '',
  icon = '',
  validator = () => {},
}: TextInputProps) => {
  const [valid, setValid] = useState<InputState>(null);

  const color =
    valid === Pristine
      ? 'darkGrey'
      : valid === Valid
      ? 'primatyBtnBg'
      : 'danger';

  console.log({color});

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      height={48}
      borderRadius="s"
      borderColor={color}>
      <Icon name={icon} />
      <RNTextInput
        {...{placeholder}}
        underlineColorAndroid="transparent"
        placeholderTextColor="#151624"
      />
      {(valid === Valid || valid === Invalid) && (
        <Box
          borderRadius="m"
          height={theme.borderRadii.m * 2}
          width={theme.borderRadii.m * 2}>
          <Icon name={valid === Valid ? 'check' : 'x'} color="white" />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
