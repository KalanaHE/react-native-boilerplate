import React, {useEffect, Fragment} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Main from '../features/Login';
import UserHome from './NestedNavigator/UserDrawerNavigator';
import TestScreen1 from '../features/User/TestScreens/Screen1';
import ProfileScreen from '../features/User/Profile/Profile';
import {setToken} from '../utils/store.utils';
import {selectIsLoggedIn} from './selector';

export default function App() {
  const Stack = createStackNavigator();
  const {authToken} = useSelector(state => state.login);
  const isLogged = useSelector(selectIsLoggedIn);

  // useEffect(() => {
  //   setToken(authToken);
  // }, [authToken]);

  return (
    <Stack.Navigator
      screenOptions={{headerMode: 'screen', presentation: 'card'}}>
      <Fragment>
        {isLogged && (
          <>
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
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{headerShown: false}}
            />
          </>
        )}
        {!isLogged && (
          <Stack.Screen
            name="app"
            component={Main}
            options={{headerShown: false}}
          />
        )}
      </Fragment>
    </Stack.Navigator>
  );
}
