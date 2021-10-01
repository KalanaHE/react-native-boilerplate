import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Background from './components/Background';
import Logo from './components/Logo';
import Header from './components/Header';
// import Button from './components/Button';

const LoginScreen = () => {
  return (
    <Background>
      <Logo />

      <Header>Welcome back.</Header>

      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      {/* <Button mode="contained" onPress={() => {}}>
        Login
      </Button> */}

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: 'blue',
  },
  link: {
    fontWeight: 'bold',
    color: 'green',
  },
});

export default memo(LoginScreen);
