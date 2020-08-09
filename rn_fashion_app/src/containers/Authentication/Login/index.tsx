import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import AppText from '../../../components/Text';
import SocialLogin from '../components/SocialLogin';

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <View style={styles.container}>
        <AppText style={{color: 'white'}}>Don't have an account? </AppText>
        <Button
          variant="transparent"
          onPress={() => {}}
          textVariant="primary"
          textBtn>
          SignUp
        </Button>
      </View>
    </>
  );

  return (
    <Container {...{footer}}>
      <Text>Login Screen</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
});

export default Login;
