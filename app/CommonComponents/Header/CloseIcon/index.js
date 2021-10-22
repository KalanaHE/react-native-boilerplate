import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const EditIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      accessibilityLabel="close-button"
      onPress={() => navigation.goBack()}>
      <Icon
        accessibilityLabel="close-icon"
        name="close"
        size={30}
        color={'#000'}
        style={{marginRight: 20}}
      />
    </TouchableOpacity>
  );
};

export default EditIcon;
