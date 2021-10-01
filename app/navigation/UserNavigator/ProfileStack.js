import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../../features/User/Profile/Profile';

const ProfileStackScreen = () => {
  const ProfileStackScreen = createNativeStackNavigator();

  return (
    <ProfileStackScreen.Navigator>
      <ProfileStackScreen.Screen
        name="ProfileScreen"
        component={Profile}
        options={{tabBarLabel: 'Profile', headerShown: false}}
      />
    </ProfileStackScreen.Navigator>
  );
};

export default ProfileStackScreen;
