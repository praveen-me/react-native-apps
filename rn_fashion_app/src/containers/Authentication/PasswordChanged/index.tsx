import React from 'react';
import {} from 'react-native';
import Container from '../../../components/Container';
import AppText from '../../../components/Text';
import {
  Routes,
  StackNavigationProps,
} from '../../../lib/navigation/rootNavigation';

import {Box, useTheme} from '../../../contants/theme';
import Button from '../../../components/Button';
import Icon from 'react-native-vector-icons/Feather';
import CloseButton from '../../../components/CloseButton';
import RoundedIcon from '../../../components/RoundedIcon';

const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, 'PasswordChanged'>) => {
  const theme = useTheme();

  const footer = (
    <Box alignItems="center" marginVertical="l">
      <CloseButton onPress={() => navigation.replace('Login')} />
    </Box>
  );

  return (
    <Container {...{footer}}>
      <Box padding="xl" justifyContent="center" alignItems="center" flex={1}>
        <Box marginBottom="xl">
          <RoundedIcon
            size={SIZE}
            backgroundColor="primaryLight"
            color={theme.colors.primatyBtnBg}
            name="check"
            iconSize={30}
          />
        </Box>
        <AppText
          variant="title1"
          center
          medium
          style={{marginBottom: theme.spacing.m}}>
          Your password was successfully changed
        </AppText>
        <AppText variant="body" center>
          Close this window and login again
        </AppText>
        <Box marginVertical="m" alignItems="center">
          <Button variant="primary" onPress={() => navigation.replace('Login')}>
            Login again
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
