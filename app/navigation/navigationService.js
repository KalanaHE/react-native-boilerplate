import * as React from 'react';
import {CommonActions, StackActions} from '@react-navigation/native';

export let navigationRef = React.createRef();
export const isMountedRef = React.createRef();

export const navigate = (name, params = {}) => {
  navigationRef.current?.navigate(name, params);
};

export const goBack = () => {
  CommonActions.goBack();
};

export const push = (...args) => {
  navigationRef.current?.dispatch(StackActions.push(...args));
};

export const setContainer = navigatorRef => {
  navigationRef = navigatorRef;
};
