import React, {useEffect, useRef} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import NavigationRootStack from './NavigationRootStack';
import {setContainer} from './navigationService';

const index = () => {
  const [initialState, setInitialState] = React.useState();
  const navigationRef = useRef();
  useEffect(() => {
    setContainer(navigationRef);
  }, []);

  return (
    <NavigationContainer
      screenOptions={{headerShown: false}}
      initialState={initialState}
      ref={navigationRef}>
      <StatusBar animated={true} backgroundColor="teal" />
      <NavigationRootStack />
    </NavigationContainer>
  );
};

export default index;
