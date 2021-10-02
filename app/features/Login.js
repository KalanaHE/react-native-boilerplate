import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {setIslogged} from './loginSlice';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.wrapper}>
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Login</Text>
            <Button
              icon="camera"
              mode="contained"
              onPress={() => dispatch(setIslogged(true))}>
              Login
            </Button>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'teal',
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  loginHeader: {
    fontSize: 28,
    color: 'white',
    fontWeight: '300',
    marginBottom: 40,
  },
});
