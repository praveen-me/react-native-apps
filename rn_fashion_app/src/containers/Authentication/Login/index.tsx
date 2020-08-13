import React from 'react';
import {Alert} from 'react-native';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import AppText from '../../../components/Text';
import {Box, useTheme} from '../../../contants/theme';
import CheckBox from '../components/Form/CheckBox';
import TextInput from '../components/Form/TextInput';
import SocialLogin from '../components/SocialLogin';

import {Formik} from 'formik';

import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(2, 'Too Short').max(30, 'Too Long'),
  remember: Yup.boolean(),
});

const Login = () => {
  const theme = useTheme();

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

        <Formik
          initialValues={{email: '', password: '', remember: false}}
          onSubmit={(values) => console.log(values)}
          validationSchema={LoginSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => {
            return (
              <>
                <Box marginTop="l">
                  <TextInput
                    placeholder="Enter your email"
                    icon="mail"
                    // validator={validateEmail}
                    handleChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    error={errors.email}
                    touched={touched.email}
                  />
                  <TextInput
                    placeholder="Enter your password"
                    icon="lock"
                    handleChange={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    error={errors.password}
                    touched={touched.password}
                  />
                </Box>
                <Box
                  flexDirection="row"
                  justifyContent="space-between"
                  marginVertical="s">
                  <CheckBox
                    label="Remember me"
                    checked={values.remember}
                    onChange={(value) => setFieldValue('remember', value)}
                  />
                  <Button
                    variant="transparent"
                    onPress={() => {
                      Alert.alert('Forgot Password');
                    }}
                    textVariant="primary"
                    textBtn>
                    Forgot Password
                  </Button>
                </Box>
                <Box marginVertical="m" alignItems="center">
                  <Button variant="primary" onPress={handleSubmit}>
                    Log into your account
                  </Button>
                </Box>
              </>
            );
          }}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
