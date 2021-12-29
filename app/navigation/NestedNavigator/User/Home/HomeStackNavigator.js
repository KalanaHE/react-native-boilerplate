import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Tab from './UserHomeTabs';
import ProfileAvatar from '../../../../CommonComponents/Header/ProfileAvatar';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'react-native-paper';

const HomeStack = createStackNavigator();

const HomeStackNav = () => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator screenOptions={{headerMode: 'screen'}}>
      <HomeStack.Screen
        name="Home11"
        component={Tab}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerLeft: () => <ProfileAvatar />,
          headerRight: () => (
            <Feather
              name="help-circle"
              size={24}
              color={colors.white}
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
                color: colors.white,
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
