import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './User/Drawer/UserDrawerContent';
import HomeStack from './User/Home/HomeStackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />} drawerType="back">
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{headerShown: false}}
      />
      {/* <Drawer.Screen name="dddd" component={ssss} />
      <Drawer.Screen name="ddddddd" component={fffffffff} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
