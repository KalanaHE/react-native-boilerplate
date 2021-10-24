import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationStack from './NavigationStack';

const RootNavigation = () => {
  const RootStack = createStackNavigator();

  return (
    <RootStack.Navigator
      screenOptions={{headerMode: 'float', presentation: 'card'}}>
      <RootStack.Screen
        name="Main"
        component={NavigationStack}
        options={{headerShown: false}}
      />

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
