import * as React from 'react';
import HomeStackScreen from './HomeStack';
import ProfileStackScreen from './ProfileStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        shifting={true}
        barStyle={{backgroundColor: '#694fad'}}
        sceneAnimationEnabled={true}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarColor: '#75679e',
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
            tabBarColor: '#a64d79',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="human" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default App;
