import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {useTheme} from '../contants/theme';
import RoundedIcon from './RoundedIcon';

interface CloseButtonProps {
  onPress: () => void;
}

const CloseButton = ({onPress}: CloseButtonProps) => {
  const theme = useTheme();

  return (
    <RectButton {...{onPress}}>
      <RoundedIcon
        name="x"
        size={60}
        backgroundColor="white"
        color={theme.colors.textPrimaryColor}
      />
    </RectButton>
  );
};

export default CloseButton;
