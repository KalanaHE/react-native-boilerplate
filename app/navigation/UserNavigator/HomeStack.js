import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../features/User/Home/Home';
import Screen1 from '../../features/User/TestScreens/Screen1'

const HomeStackScreen = () => {
  const HomeStackScreen = createNativeStackNavigator();

  return (
    <HomeStackScreen.Navigator>
      <HomeStackScreen.Screen
        name="HomeScreen"
        component={Home}
        options={{tabBarLabel: 'Home', headerShown: false}}
      />
      <HomeStackScreen.Screen
        name="Test1"
        component={Screen1}
        options={{tabBarLabel: 'TestScreen', headerShown: false}}
      />
    </HomeStackScreen.Navigator>
  );
};

export default HomeStackScreen;
