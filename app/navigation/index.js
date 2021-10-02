import React, {useEffect, useRef} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import UserStack from './UserNavigator';
import {useSelector} from 'react-redux';
import {setContainer} from './navigationService';

const index = () => {
  const isLoggedIn = useSelector(state => state.login.isLogged);
  const navigationRef = useRef();
  useEffect(() => {
    setContainer(navigationRef);
  }, []);

  return (
    <NavigationContainer
      screenOptions={{headerShown: false}}
      ref={navigationRef}>
      <StatusBar animated={true} backgroundColor="teal" />
      {isLoggedIn ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default index;
