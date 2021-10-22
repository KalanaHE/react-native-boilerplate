/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

const GrowthAddButton = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 10,
      }}>
      <Button
        accessibilityLabel="add-growth"
        icon="plus"
        mode="outlined"
        onPress={() => {}}>
        Add Growth
      </Button>
    </View>
  );
};

export default GrowthAddButton;
