import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import FlashMessage from './CommonComponents/FlashMessage';
import Navigator from './navigation';
import {theme} from './core/theme';
import {requestUserMessagingPermission} from './utils/devices/messaging';
import messaging from '@react-native-firebase/messaging';

const Entrypoint = () => {
  useEffect(() => {
    requestUserMessagingPermission();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', remoteMessage);
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <Navigator />
          <FlashMessage />
        </PaperProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default Entrypoint;
