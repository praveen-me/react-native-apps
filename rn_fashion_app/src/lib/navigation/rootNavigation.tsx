import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Onboarding, Welcome} from '../../containers/Authentication';

const StackRoutes = [
  {
    name: 'Onboarding',
    component: Onboarding,
  },
  {
    name: 'Welcome',
    component: Welcome,
  },
];

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {StackRoutes.map(({name, component}, index) => {
          return <Stack.Screen name={name} component={component} key={index} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
