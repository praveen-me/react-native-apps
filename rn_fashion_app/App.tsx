import 'react-native-gesture-handler';
import * as React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import theme from './src/contants/theme';
import RootNavigator from './src/lib/navigation/rootNavigation';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootNavigator />
    </ThemeProvider>
  );
}
