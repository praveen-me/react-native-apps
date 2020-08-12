import React, {useState} from 'react';
import AppText from '../../../../components/Text';
import {Box} from '../../../../contants/theme';
import Icon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

interface CheckBoxProps {
  label: string;
}

const CheckBox = ({label}: CheckBoxProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <RectButton onPress={() => setChecked(!checked)}>
      <Box flexDirection="row" alignItems="center">
        <Box
          borderRadius="s"
          backgroundColor={checked ? 'primatyBtnBg' : 'white'}
          height={20}
          width={20}
          justifyContent="center"
          alignItems="center"
          marginRight="m"
          borderWidth={1}
          borderColor="primatyBtnBg">
          <Icon name="check" color={'white'} />
        </Box>
        <AppText>{label}</AppText>
      </Box>
    </RectButton>
  );
};

export default CheckBox;
