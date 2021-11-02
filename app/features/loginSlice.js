import {createSlice} from '@reduxjs/toolkit';
import {setLoading} from './Common/commonSlice';
import {excuteAfterGivenDelay} from '../utils/commonUtils';
import MyApi from '../api/myAPI';
import showToast from '../utils/toast.utils';
import {navigateToUserHome} from '../navigation/navigationHelpers';
import {
  setAccessToken,
  setIdToken,
  setRefreshToken,
} from '../utils/store.utils';

const REDUCER_DOMAIN = 'Login';

const getInitialState = () => ({
  isLogged: false,
  loggingStatus: 'idle',
  loggingError: null,
  loggingOutStatus: 'idle',
  loggingOutError: null,
  authToken: null,
  refreshToken: null,
  loggedInUser: {},
});

const loginSlice = createSlice({
  name: REDUCER_DOMAIN,
  initialState: getInitialState(),
  reducers: {
    setIslogged: (state, action) => {
      state.isLogged = action.payload;
    },
    setLoggingStatus: (state, action) => {
      state.loggingStatus = action.payload;
    },
    setLoggingError: (state, action) => {
      state.loggingError = action.payload;
    },
    setLoggingOutStatus: (state, action) => {
      state.loggingOutStatus = action.payload;
    },
    setLoggingOutError: (state, action) => {
      state.loggingOutError = action.payload;
    },
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
  },
  extraReducers: {},
});

export const {
  setIslogged,
  setLoggingStatus,
  setLoggingError,
  setLoggingOutStatus,
  setLoggingOutError,
  setLoggedInUser,
} = loginSlice.actions;

export const login = payload => {
  return async dispatch => {
    try {
      dispatch(setLoggingStatus('loading'));
      dispatch(setLoading(true));
      dispatch(setLoggingError(null));
      const response = await MyApi.login(payload);
      if (response && response.status === 200) {
        const {headers} = response || {};
        let data = await response.json();

        setAccessToken(headers?.map?.access_token);
        setRefreshToken(headers?.map?.refresh_token);
        setIdToken(headers?.map?.id_token);

        dispatch(setLoggedInUser(data));
        dispatch(setIslogged(true));
        navigateToUserHome({});
        dispatch(setLoggingStatus('succeeded'));
      } else if (response && response.status === 404) {
        showToast({
          message: 'Failed',
          description: 'Invalid Credentials',
          type: 'danger',
          icon: 'danger',
          // backgroundColor: 'teal', // background color
          // color: '#606060', // text color
        });
      } else {
      }
    } catch (err) {
      dispatch(setLoggingStatus('failed'));
      dispatch(setLoggingError(JSON.stringify(err)));
    } finally {
      dispatch(setLoading(false));
      excuteAfterGivenDelay(() => dispatch(setLoggingStatus('idle')));
    }
  };
};

export const logOut = () => {
  return async dispatch => {
    try {
      dispatch(setLoggingOutStatus('loading'));
      dispatch(setLoading(true));
      dispatch(setLoggingOutError(null));
      const response = await MyApi.logOut();
      if (response && response.status === 200) {
        setAccessToken(null);
        setRefreshToken(null);
        dispatch(setLoggedInUser(null));
        dispatch(setIslogged(false));
        dispatch(setLoggingOutStatus('succeeded'));
      } else {
        showToast({
          message: 'Failed',
          description: 'Something Went Wrong!',
          type: 'danger',
          icon: 'danger',
        });
      }
    } catch (err) {
      dispatch(setLoggingOutStatus('failed'));
      dispatch(setLoggingOutError(JSON.stringify(err)));
    } finally {
      dispatch(setLoading(false));
      excuteAfterGivenDelay(() => dispatch(setLoggingOutStatus('idle')));
    }
  };
};

export default loginSlice.reducer;
