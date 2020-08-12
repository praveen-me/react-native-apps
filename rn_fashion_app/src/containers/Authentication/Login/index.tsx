import React from 'react';
import {Alert, StyleSheet, Text} from 'react-native';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import AppText from '../../../components/Text';
import theme, {Box} from '../../../contants/theme';
import TextInput from '../components/Form/TextInput';
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

  const validateEmail = (email: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  return (
    <Container {...{footer}}>
      <Box padding="xl">
        <AppText
          variant="title1"
          center
          medium
          style={{marginBottom: theme.spacing.l}}>
          Welcome Back
        </AppText>
        <AppText variant="body" center>
          Use your credentials below and login to your account
        </AppText>

        <Box marginTop="l">
          <TextInput
            placeholder="Enter your email"
            icon="mail"
            validator={validateEmail}
          />
          <TextInput
            placeholder="Enter your password"
            icon="lock"
            validator={validatePassword}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
