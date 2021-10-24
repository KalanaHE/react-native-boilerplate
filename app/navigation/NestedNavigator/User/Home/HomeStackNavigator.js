import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Tab from './UserHomeTabs';
import ProfileAvatar from '../../../../CommonComponents/Header/ProfileAvatar';
import Feather from 'react-native-vector-icons/Feather';

const HomeStack = createStackNavigator();

const HomeStackNav = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerMode: 'screen'}}>
      <HomeStack.Screen
        name="Home11"
        component={Tab}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: 'teal',
          },
          headerLeft: () => <ProfileAvatar />,
          headerRight: () => (
            <Feather
              name="help-circle"
              size={24}
              color={'white'}
              style={{marginRight: 10}}
            />
          ),
          headerTitle: () => (
            <Text
              style={{
                textAlign: 'center',
                display: 'flex',
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
              }}>
              My APP
            </Text>
          ),
        })}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNav;
