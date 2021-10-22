import {navigate, push} from './navigationService';

export const navigateToLogin = data => navigate('Login', {data});
export const navigateToUserHome = data => navigate('UserHome', {data});
export const navigateToTest1 = data => push('Test1', {data});
// export const navigateToChildren = () => push('Drawer');
