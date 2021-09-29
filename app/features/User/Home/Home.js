import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {getCountries, setUser} from './HomeSlice';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>User Home</Text>
      <Button
        onPress={() => dispatch(getCountries())}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default Home;
