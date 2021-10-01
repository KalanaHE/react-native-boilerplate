import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../features/User/Home/Home';

const HomeStackScreen = () => {
  const HomeStackScreen = createNativeStackNavigator();

  return (
    <HomeStackScreen.Navigator>
      <HomeStackScreen.Screen
        name="HomeScreen"
        component={Home}
        options={{tabBarLabel: 'Home', headerShown: false}}
      />
    </HomeStackScreen.Navigator>
  );
};

export default HomeStackScreen;
