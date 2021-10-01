import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {getCountries} from './HomeSlice';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>User Home</Text>
      <Button
        onPress={() => dispatch(getCountries())}
        title="Learn More"
        color="#45818e"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default Home;
