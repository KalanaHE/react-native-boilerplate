import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCountries} from './HomeSlice';
import {navigateToTest1} from '../../../navigation/navigationHelpers';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>User Home</Text>
      <Button
        onPress={() => dispatch(getCountries())}
        title="Fetch Data"
        color="#45818e"
        accessibilityLabel="Fetch Data"
      />

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
