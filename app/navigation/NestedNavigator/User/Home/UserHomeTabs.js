import * as React from 'react';
import UserHome from '../../../../features/User/Home/Home';
import Profile from '../../../../features/User/Profile/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  const {colors} = useTheme();
  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeTab"
        activeColor={colors.accent}
        inactiveColor={colors.white}
        shifting={true}
        barStyle={{backgroundColor: colors.secondary}}
        sceneAnimationEnabled={true}>
        <Tab.Screen
          name="HomeTab"
          component={UserHome}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarColor: colors.secondary,
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
            tabBarColor: colors.onSurface,
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
