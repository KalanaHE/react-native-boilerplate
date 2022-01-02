import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {selectSessionVerifyingStatus} from '../Common/selector';
import {useTheme} from 'react-native-paper';

const VerifySession = () => {
  const {colors} = useTheme();
  const verifyingStatus = useSelector(selectSessionVerifyingStatus);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.secondary,
      }}>
      <ActivityIndicator size="large" color={colors.accent} />
      <Text
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          fontWeight: 'bold',
          color: colors.background,
        }}>
        Verifying Session...
      </Text>
    </View>
  );
};

export default VerifySession;
