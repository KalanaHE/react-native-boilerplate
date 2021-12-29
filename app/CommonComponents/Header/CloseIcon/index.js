import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';

const EditIcon = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      accessibilityLabel="close-button"
      onPress={() => navigation.goBack()}>
      <Icon
        accessibilityLabel="close-icon"
        name="close"
        size={30}
        color={colors.black}
        style={{marginRight: 20}}
      />
    </TouchableOpacity>
  );
};

export default EditIcon;
