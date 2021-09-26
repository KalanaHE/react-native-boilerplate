import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUser} from './HomeSlice';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() => dispatch(setUser(2))}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default Home;
