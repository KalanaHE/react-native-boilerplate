import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackScreen from './UserNavigator/HomeStack';
import ProfileStackScreen from './UserNavigator/ProfileStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer screenOptions={{headerShown: false}}>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        shifting={true}
        barStyle={{backgroundColor: '#694fad'}}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarColor: '#3d497e',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarColor: '#eb6b16',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="human" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
