import React from 'react';
import {View, Text} from 'react-native';
import {Box} from '../../../../contants/theme';

import Icon from 'react-native-vector-icons/Feather';

interface TextInputProps {
  placeholder: string;
  icon: string;
  validator: (input: string) => boolean;
}

const TextInput = ({
  placeholder = '',
  icon = '',
  validator = () => {},
}: TextInputProps) => {
  return (
    <Box flexDirection="row">
      <Icon name={icon} />
    </Box>
  );
};

export default TextInput;
