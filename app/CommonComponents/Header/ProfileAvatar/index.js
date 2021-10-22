import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';

const ProfileAvatar = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      accessibilityLabel="profile-avatar"
      onPress={() => navigation.openDrawer()}>
      <View
        style={{paddingLeft: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Avatar.Text size={32} label="XD" />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileAvatar;
