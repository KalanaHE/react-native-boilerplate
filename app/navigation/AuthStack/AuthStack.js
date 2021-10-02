import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../features/Login';

const AuthStackScreen = () => {
  const AuthStackScreen = createNativeStackNavigator();

  return (
    <AuthStackScreen.Navigator screenOptions={{animation:"fade_from_bottom"}} mode="modal">
      <AuthStackScreen.Group screenOptions={{presentation: 'modal'}}>
        <AuthStackScreen.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      </AuthStackScreen.Group>
    </AuthStackScreen.Navigator>
  );
};

export default AuthStackScreen;
