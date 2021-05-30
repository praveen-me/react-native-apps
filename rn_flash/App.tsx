/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  NativeModules,
  Text,
  Button,
  AppState,
} from 'react-native';

const {TorchModule} = NativeModules;

enum TORCH_STATUS {
  ON = 'ON',
  OFF = 'OFF',
}

const App = () => {
  const [isDeviceHasTorch, setIsDeviceHasTorch] = useState(false);
  const [torchStatus, setTorchStatus] = useState(TORCH_STATUS.OFF);

  useEffect(() => {
    (async () => {
      const hasTorch = await TorchModule.hasTorch(2);

      setIsDeviceHasTorch(hasTorch);
    })();

    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  });

  async function handleAppStateChange(state) {
    if (torchStatus === TORCH_STATUS.ON) {
      await TorchModule.torchOn(2);
    } else {
      await TorchModule.torchOff(2);
    }
  }

  async function toggleTorch() {
    if (isDeviceHasTorch) {
      try {
        if (torchStatus === TORCH_STATUS.OFF) {
          await TorchModule.torchOn(2);
          setTorchStatus(TORCH_STATUS.ON);
        } else {
          await TorchModule.torchOff(2);
          setTorchStatus(TORCH_STATUS.OFF);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Text>{torchStatus}</Text>
      <Button title="Toggle Torch" onPress={toggleTorch} />
    </SafeAreaView>
  );
};

export default App;
