import React, {useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {TextInput, Button, HelperText} from 'react-native-paper';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {login} from './loginSlice';
import * as yup from 'yup';
import {
  selectIsLoggedIn,
  selectIsLoggedInUser,
  selectLoggingStatus,
} from './selector';
import {navigateToUserHome} from '../navigation/navigationHelpers';
import {useIsFocused} from '@react-navigation/native';

const Login = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const loggingStatus = useSelector(selectLoggingStatus);
  const isLogged = useSelector(selectIsLoggedIn);
  const loggedInUser = useSelector(selectIsLoggedInUser);

  const loginValidationSchema = yup.object().shape({
    username: yup.string().required('username is Required'),
    password: yup
      .string()
      .min(2, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={styles.scrollViewWrapper}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.loginHeader}>LOGIN</Text>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{username: '', password: ''}}
            onSubmit={values => {
              dispatch(login(values));
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <TextInput
                  name="username"
                  placeholder="Username"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
                <HelperText type="error" visible={errors.username}>
                  {errors.username}
                </HelperText>
                <TextInput
                  name="password"
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                <HelperText type="error" visible={errors.password}>
                  {errors.password}
                </HelperText>
                <Button
                  onPress={handleSubmit}
                  disabled={!isValid}
                  title="LOGIN TEST"
                  raised
                  mode="contained">
                  Login
                </Button>
              </>
            )}
          </Formik>
          <Button
            onPress={() => {
              navigateToUserHome();
            }}
            title="LOGIN TEST"
            raised
            mode="contained">
            home
          </Button>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
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
    alignSelf: 'center',
    fontWeight: '300',
    marginBottom: 40,
  },
});
