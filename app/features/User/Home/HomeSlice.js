import {createSlice} from '@reduxjs/toolkit';
import {setLoading} from '../../Common/commonSlice';
import {excuteAfterGivenDelay} from '../../../utils/commonUtils';
import MyApi from '../../../api/myAPI';
import showToast from '../../../utils/toast.utils';

const REDUCER_DOMAIN = 'User';

const getInitialState = () => ({
  user: null,
  countries: null,
  retrievingCountriesStatus: 'idle',
  retrievingCountriesError: null,
});

const userSlice = createSlice({
  name: REDUCER_DOMAIN,
  initialState: getInitialState(),
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setRetrievingCountriesStatus: (state, action) => {
      state.retrievingCountriesStatus = action.payload;
    },
    setRetrievingCountriesError: (state, action) => {
      state.retrievingCountriesError = action.payload;
    },
  },
  extraReducers: {},
});

export const {
  setUser,
  setCountries,
  setRetrievingCountriesStatus,
  setRetrievingCountriesError,
} = userSlice.actions;

export const getCountries = payload => {
  return async dispatch => {
    try {
      dispatch(setRetrievingCountriesStatus('loading'));
      dispatch(setLoading(true));
      dispatch(setRetrievingCountriesError(null));
      const response = await MyApi.getCountries(payload);
      if (response && response.status === 200) {
        let data = await response.json();
        dispatch(setCountries(data));
        showToast({
          message: 'My message title',
          description: 'My message description',
          type: 'success',
          icon: "success"
          // backgroundColor: 'purple', // background color
          // color: '#606060', // text color
        });
        dispatch(setRetrievingCountriesStatus('succeeded'));
      } else {
      }
    } catch (err) {
      dispatch(setRetrievingCountriesStatus('failed'));
      dispatch(setRetrievingCountriesError(JSON.stringify(err)));
    } finally {
      dispatch(setLoading(false));
      excuteAfterGivenDelay(() =>
        dispatch(setRetrievingCountriesStatus('idle')),
      );
    }
  };
};

export default userSlice.reducer;
