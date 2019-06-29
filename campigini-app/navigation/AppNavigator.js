import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import ScreenNavigator from './ScreenNavigator';

export default createAppContainer(createSwitchNavigator({
  Main: ScreenNavigator,
}));
