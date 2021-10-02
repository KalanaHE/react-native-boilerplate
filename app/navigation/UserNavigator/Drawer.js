import {createDrawerNavigator} from '@react-navigation/drawer';
import Screen1 from '../../features/User/TestScreens/Screen1';
import Screen2 from '../../features/User/TestScreens/Screen2';
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Screen 1" component={Screen1} />
      <Drawer.Screen name="Screen 2" component={Screen2} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
