import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Screen1 = () => {
  useEffect(() => {
    console.log('====================================');
    console.log('did mount called');
    console.log('====================================');
    return () => {
      console.log('====================================');
      console.log('cleanup called');
      console.log('====================================');
    };
  }, []);

  return (
    <View>
      <Text>Screen 1</Text>
    </View>
  );
};

export default Screen1;
