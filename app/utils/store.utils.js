import {getUserAgent as UserAgent} from 'react-native-device-info';
import AsyncStorage from '@react-native-community/async-storage';

let loggedInCountry = null;

export const getUserAgent = async () => await UserAgent();
export const setCountry = country => (loggedInCountry = country);
export const getCountry = () => loggedInCountry;

export const setRefreshToken = async value => {
  try {
    await AsyncStorage.setItem('refreshToken', value);
  } catch (error) {
    console.log('store error: ', error);
  }
};

export const getRefreshToken = async () => {
  try {
    const value = await AsyncStorage.getItem('refreshToken');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log('store error: ', error);
  }
};

export const setAccessToken = async value => {
  try {
    await AsyncStorage.setItem('accessToken', value);
  } catch (error) {
    console.log('store error: ', error);
  }
};

export const getAccessToken = async () => {
  try {
    const value = await AsyncStorage.getItem('accessToken');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log('store error: ', error);
  }
};

export const setIdToken = async value => {
  try {
    await AsyncStorage.setItem('idToken', value);
  } catch (error) {
    console.log('store error: ', error);
  }
};

export const getIdToken = async () => {
  try {
    const value = await AsyncStorage.getItem('idToken');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log('store error: ', error);
  }
};
