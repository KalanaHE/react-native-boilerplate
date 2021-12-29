import React from 'react';
import {View, Text, Button} from 'react-native';
import {navigateToTest1} from '../../../navigation/navigationHelpers';

const Home = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>User Home</Text>

      <Button
        onPress={() => navigateToTest1()}
        title="nav to scr1"
        color="#45818e"
        accessibilityLabel="nav to scr1"
      />
    </View>
  );
};

export default Home;
