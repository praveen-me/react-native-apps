import React from 'react';
import {Alert, Text} from 'react-native';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import AppText from '../../../components/Text';
import theme, {Box} from '../../../contants/theme';
import SocialLogin from '../components/SocialLogin';

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box flexDirection="row" justifyContent="center" marginVertical="m">
        <AppText
          style={{color: theme.colors.white, marginRight: theme.spacing.s}}>
          Don't have an account?
        </AppText>
        <Button
          variant="transparent"
          onPress={() => {
            Alert.alert('Signup code here');
          }}
          textVariant="primary"
          textBtn>
          SignUp
        </Button>
      </Box>
    </>
  );

  return (
    <Container {...{footer}}>
      <Text>Login Screen</Text>
    </Container>
  );
};

export default Login;
