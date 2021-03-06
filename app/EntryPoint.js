import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import FlashMessage from './CommonComponents/FlashMessage';
import Navigator from './navigation';
import {theme} from './core/theme';

const Entrypoint = () => {
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
