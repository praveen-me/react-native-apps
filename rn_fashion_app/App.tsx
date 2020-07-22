import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Onboarding} from './src/containers/Authentication';

const AuthNavigatorStack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthNavigatorStack.Navigator headerMode="none">
      <AuthNavigatorStack.Screen name={'Onboarding'} component={Onboarding} />
    </AuthNavigatorStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
