import {createSlice} from '@reduxjs/toolkit';
import {setLoading} from './Common/commonSlice';
import {excuteAfterGivenDelay} from '../utils/commonUtils';
import MyApi from '../api/myAPI';
import showToast from '../utils/toast.utils';
import {navigateToUserHome} from '../navigation/navigationHelpers';

const REDUCER_DOMAIN = 'Login';

const getInitialState = () => ({
  isLogged: false,
  loggingStatus: 'idle',
  loggingError: null,
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
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
  },
  extraReducers: {},
});

export const {setIslogged, setLoggingStatus, setLoggingError, setLoggedInUser} =
  loginSlice.actions;

export const login = payload => {
  return async dispatch => {
    try {
      dispatch(setLoggingStatus('loading'));
      dispatch(setLoading(true));
      dispatch(setLoggingError(null));
      const response = await MyApi.getCountries();
      if (response && response.status === 200) {
        let data = await response.json();
        dispatch(setLoggedInUser(data));
        dispatch(setIslogged(true));
        navigateToUserHome({});
        // showToast({
        //   message: 'My message title',
        //   description: 'My message description',
        //   type: 'success',
        //   icon: 'success',
        //   // backgroundColor: 'purple', // background color
        //   // color: '#606060', // text color
        // });
        dispatch(setLoggingStatus('succeeded'));
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

export default loginSlice.reducer;
