import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import Background from '../CommonComponents/LoginBackground';
import Logo from '../CommonComponents/Logo';
import Button from '../CommonComponents/Button';
import Header from '../CommonComponents/LoginHeader';
import {theme} from '../core/theme';
import TextInput from '../CommonComponents/TextInput';
import {useDispatch, useSelector} from 'react-redux';
import {login} from './loginSlice';
import loginValidationSchema from '../validation/loginSchema';
import {
  selectIsLoggedIn,
  selectIsLoggedInUser,
  selectLoggingStatus,
} from './selector';
import {useIsFocused} from '@react-navigation/native';

const Login = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const loggingStatus = useSelector(selectLoggingStatus);
  const isLogged = useSelector(selectIsLoggedIn);
  const loggedInUser = useSelector(selectIsLoggedInUser);

  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <Background>
        <Logo />
        <Header>Hello World</Header>
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
                label="Username"
                name="Username"
                placeholder="Enter your username"
                returnKeyType="next"
                value={values.username}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                error={!!errors.username}
                errorText={errors.username}
                autoCapitalize="none"
                autoCompleteType="username"
              />

              <TextInput
                label="Password"
                name="Password"
                placeholder="Enter your password"
                returnKeyType="next"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={!!errors.password}
                errorText={errors.password}
                autoCapitalize="none"
                autoCompleteType="password"
                secureTextEntry
              />

              <Button
                onPress={handleSubmit}
                disabled={!isValid || loggingStatus === 'loading'}
                loading={loggingStatus === 'loading'}
                title="LOGIN TEST"
                // raised
                mode="contained">
                {loggingStatus === 'loading' ? 'Logging In..' : 'Login'}
              </Button>
            </>
          )}
        </Formik>
        {/* <View style={styles.row}>
          <Text style={styles.label}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View> */}
      </Background>
    </ScrollView>
  );
};

export default Login;

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
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
