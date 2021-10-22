import * as React from 'react';
import UserHome from '../../../../features/User/Home/Home';
import Profile from '../../../../features/User/Profile/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeTab"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        shifting={true}
        barStyle={{backgroundColor: '#694fad'}}
        sceneAnimationEnabled={true}>
        <Tab.Screen
          name="HomeTab"
          component={UserHome}
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
          name="ProfileTab"
          component={Profile}
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
