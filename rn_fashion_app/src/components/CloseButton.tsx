import React from 'react';
import {StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {Box, useTheme} from '../contants/theme';

interface CloseButtonProps {
  onPress: () => void;
}

const SIZE = 60;

const CloseButton = ({onPress}: CloseButtonProps) => {
  const theme = useTheme();

  return (
    <RectButton {...{onPress}}>
      <Box style={styles.container} justifyContent="center" alignItems="center">
        <Icon
          name="x"
          size={45}
          color={theme.colors.textPrimaryColor}
          style={{textAlign: 'center'}}
        />
      </Box>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: 'white',
  },
});

export default CloseButton;
