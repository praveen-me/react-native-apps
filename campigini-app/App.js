import React, { useState } from 'react';
import { StyleSheet, Platform, StatusBar, View} from 'react-native';
import { Provider } from 'react-redux';
import { AppLoading, Asset, Font, Icon } from 'expo';
import store from './store/store';

export default function App(props) {
  const [isLoading, setIsLoading] = useState(false);

  // handling loading initially
  const loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        'space-mono' : require('./assets/fonts/SpaceMono-Regular.ttf')
      })
    ])
  }

  // handling err if something when wrong when app is loading
  const handleLoadingErr = (error) => {
    console.warn(error);
  }

  // handling part when the loading got finished
  const handleFinishLoading = () => {
    setIsLoading(true);
  }

  return (
    isLoading ? (
      <AppLoading 
      startAsync={loadResourcesAsync}
      onError={handleLoadingErr}
      onFinish={handleFinishLoading}/>
    ) : (
      <Provider store={store}>
        <View style={styles.container}>
          { Platform.OS === 'ios' && <StatusBar barStyle="default"/> }

        </View>
      </Provider>

    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
