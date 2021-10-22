import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {Avatar, Title, Divider, Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <TouchableOpacity
          accessibilityLabel="profile" // Can be dynamic, translated
          onPress={() => {}}>
          <View style={styles.userInfoSection}>
            <Avatar.Text size={50} label="XD" />
            <Title style={styles.title}>
              Hello World
              <MaterialCommunityIcons
                name="pencil"
                color={'#757575'}
                size={17}
              />
            </Title>
            <Divider style={styles.title} />
          </View>
        </TouchableOpacity>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            accessibilityLabel="add-child" // Can be dynamic, translated
            icon={({color, size}) => (
              <Icon
                accessibilityLabel="plus-icon"
                name="plus"
                color={color}
                size={size}
              />
            )}
            label="  Add Child"
            onPress={() => {}}
          />
          <DrawerItem
            accessibilityLabel="logout" // Can be dynamic, translated
            icon={({color, size}) => (
              <MaterialCommunityIcons name="logout" color={color} size={size} />
            )}
            label="Log Out"
            onPress={() => {}}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
