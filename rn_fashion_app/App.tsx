import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Onboarding, Welcome} from './src/containers/Authentication';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/contants/theme';

const AuthNavigatorStack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthNavigatorStack.Navigator headerMode="none">
      <AuthNavigatorStack.Screen name={'Onboarding'} component={Onboarding} />
      <AuthNavigatorStack.Screen name={'Welcome'} component={Welcome} />
    </AuthNavigatorStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
