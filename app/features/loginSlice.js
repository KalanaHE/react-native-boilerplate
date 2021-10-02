import {createSlice} from '@reduxjs/toolkit';
import {setLoading} from './Common/commonSlice';
import {excuteAfterGivenDelay} from '../utils/commonUtils';
import MyApi from '../api/myAPI';
import showToast from '../utils/toast.utils';

const REDUCER_DOMAIN = 'Login';

const getInitialState = () => ({
  isLogged: false,
});

const loginSlice = createSlice({
  name: REDUCER_DOMAIN,
  initialState: getInitialState(),
  reducers: {
    setIslogged: (state, action) => {
      state.isLogged = action.payload;
    },
  },
  extraReducers: {},
});

export const {setIslogged} = loginSlice.actions;

export default loginSlice.reducer;
