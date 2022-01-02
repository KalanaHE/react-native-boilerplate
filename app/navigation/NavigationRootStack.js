import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationStack from './NavigationStack';
import SessionVerifyScreen from '../features/SessionVerify';
import {useDispatch, useSelector} from 'react-redux';
import {verifyUserSession} from '../features/Common/commonSlice';
import {selectSessionVerifyingStatus} from '../features/Common/selector';
import {selectIsLoggedIn} from './selector';

const RootNavigation = () => {
  const RootStack = createStackNavigator();
  const dispatch = useDispatch();
  const verifyingSessionStatus = useSelector(selectSessionVerifyingStatus);
  const isLogged = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLogged) {
      dispatch(verifyUserSession());
    }
  }, [dispatch, isLogged]);

  return (
    <RootStack.Navigator
      screenOptions={{headerMode: 'float', presentation: 'card'}}>
      {verifyingSessionStatus === 'loading' ? (
        <RootStack.Screen
          name="Session Verify"
          component={SessionVerifyScreen}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name="Main"
          component={NavigationStack}
          options={{headerShown: false}}
        />
      )}
      {/* <RootStack.Screen
        name="dddddddddddddddd"
        component={ddddddddddddddddddddddd}
        options={{
          headerShown: true,
          title: '',
          headerTintColor: Constants.STYLE.WHITE,
          headerStyle: {
            backgroundColor: Constants.STYLE.WHITE,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: size(16),
          },
          headerRight: () => <CloseIcon />,
        }}
      /> */}
    </RootStack.Navigator>
  );
};

export default RootNavigation;
