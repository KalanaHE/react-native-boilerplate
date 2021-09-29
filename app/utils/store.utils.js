import {getUserAgent} from 'react-native-device-info';
import AsyncStorage from '@react-native-community/async-storage';
let authToken = null;
let idToken = null;
let refreshToken = null;
let loggedInCountry = null;

export const setToken = token => (authToken = token);
export const getToken = () => authToken;
export const setIdToken = token => (idToken = token);
export const getIdToken = () => idToken;
export const userAgent = async () => await getUserAgent();

export const setCountry = country => {
  loggedInCountry = country;
};

export const getCountry = () => {
  return loggedInCountry;
};

export const setRefreshToken = async value => {
  try {
    await AsyncStorage.setItem('testToken', value);
  } catch (error) {
    console.log('store', error);
  }
};

export const getRefreshToken = async value => {
  try {
    const value = await AsyncStorage.getItem('testToken');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log('store', error);
  }
};

export const setBearerToken = async value => {
  try {
    await AsyncStorage.setItem('token', value);
  } catch (error) {
    console.log('store', error);
  }
};

export const getBearerToken = async value => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log('store', error);
  }
};
