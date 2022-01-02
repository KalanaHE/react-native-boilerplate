import {createSlice} from '@reduxjs/toolkit';
import MyApi from '../../api/myAPI';
import {excuteAfterGivenDelay} from '../../utils/commonUtils';
import {logOut} from '../loginSlice';
import showToast from '../../utils/toast.utils';

const REDUCER_DOMAIN = 'common';

export const commonSlice = createSlice({
  name: REDUCER_DOMAIN,
  initialState: {
    loading: false,
    sessionData: null,
    sessionVerifyingStatus: 'idle',
    sessionVerifyingError: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSessionData: (state, action) => {
      state.sessionData = action.payload;
    },
    setSessionVerifyingStatus: (state, action) => {
      state.sessionVerifyingStatus = action.payload;
    },
    setSessionVerifyingError: (state, action) => {
      state.sessionVerifyingError = action.payload;
    },
  },
});

export const {
  setLoading,
  setSessionData,
  setSessionVerifyingStatus,
  setSessionVerifyingError,
} = commonSlice.actions;

export const verifyUserSession = () => {
  return async dispatch => {
    try {
      dispatch(setSessionVerifyingStatus('loading'));
      dispatch(setLoading(true));
      dispatch(setSessionVerifyingError(null));
      const response = await MyApi.sessionVerify();
      if (response && response.status === 200) {
        const data = await response.json();
        dispatch(setSessionData(data));
        dispatch(setSessionVerifyingStatus('succeeded'));
      } else {
        dispatch(setSessionData(null));
        dispatch(logOut());
        showToast({
          message: 'Signed out',
          description: 'Signed out due to session expired!',
          type: 'warning',
          icon: 'warning',
        });
      }
    } catch (err) {
      dispatch(setSessionVerifyingStatus('failed'));
      dispatch(setSessionData(null));
      dispatch(logOut());
      showToast({
        message: 'Signed out',
        description: 'Signed out due to session expired!',
        type: 'warning',
        icon: 'warning',
      });
      dispatch(setSessionVerifyingError(JSON.stringify(err)));
    } finally {
      dispatch(setLoading(false));
      excuteAfterGivenDelay(() => dispatch(setSessionVerifyingStatus('idle')));
    }
  };
};

export default commonSlice.reducer;
