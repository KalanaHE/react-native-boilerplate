import React, {useEffect, Fragment} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Main from '../features/Login';
import UserHome from './NestedNavigator/UserDrawerNavigator';
import TestScreen1 from '../features/User/TestScreens/Screen1';
import {setToken} from '../utils/store.utils';

export default function App() {
  const Stack = createStackNavigator();
  const {authToken, loggedInUser} = useSelector(state => state.login);

  useEffect(() => {
    setToken(authToken);
  }, [authToken]);

  return (
    <Stack.Navigator screenOptions={{headerMode: 'screen'}}>
      <Fragment>
        <Stack.Screen
          name="app"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserHome"
          component={UserHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Test1"
          component={TestScreen1}
          options={{headerShown: false}}
        />
      </Fragment>
    </Stack.Navigator>
  );
}
