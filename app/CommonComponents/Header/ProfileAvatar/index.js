import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import {useSelector} from 'react-redux';

const ProfileAvatar = props => {
  const firstName = useSelector(
    state => state.login?.loggedInUser?.firstName || '',
  );
  const lastName = useSelector(
    state => state.login?.loggedInUser?.lastName || '',
  );
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      accessibilityLabel="profile-avatar"
      onPress={() => navigation.openDrawer()}>
      <View
        style={{paddingLeft: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Avatar.Text
          size={32}
          label={`${firstName?.charAt(0)}${lastName?.charAt(0)}`}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileAvatar;
