import {createSlice} from '@reduxjs/toolkit';
import {setLoading} from '../../Common/commonSlice';
import {excuteAfterGivenDelay} from '../../../utils/commonUtils';
import MyApi from '../../../api/myAPI';
import showToast from '../../../utils/toast.utils';

const REDUCER_DOMAIN = 'User';

const getInitialState = () => ({
  data: null,
  retrievingDataStatus: 'idle',
  retrievingDataError: null,
});

const userSlice = createSlice({
  name: REDUCER_DOMAIN,
  initialState: getInitialState(),
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setRetrievingDataStatus: (state, action) => {
      state.retrievingDataStatus = action.payload;
    },
    setRetrievingDataError: (state, action) => {
      state.retrievingDataError = action.payload;
    },
  },
  extraReducers: {},
});

export const {
  setData,

  setRetrievingDataStatus,
  setRetrievingDataError,
} = userSlice.actions;

// export const getData = () => {
//   return async dispatch => {
//     try {
//       dispatch(setRetrievingDataStatus('loading'));
//       dispatch(setLoading(true));
//       dispatch(setRetrievingDataError(null));
//       const response = await MyApi.sessionVerify();
//       console.log('=========//===========================');
//       console.log(response);
//       console.log('====================================');
//       if (response && response.status === 200) {
//         let data = await response.json();
//         dispatch(setData(data));
//         // showToast({
//         //   message: 'My message title',
//         //   description: 'My message description',
//         //   type: 'success',
//         //   icon: 'success',
//         // });
//         dispatch(setRetrievingDataStatus('succeeded'));
//       } else {
//       }
//     } catch (err) {
//       dispatch(setRetrievingDataStatus('failed'));
//       dispatch(setRetrievingDataError(JSON.stringify(err)));
//     } finally {
//       dispatch(setLoading(false));
//       excuteAfterGivenDelay(() => dispatch(setRetrievingDataStatus('idle')));
//     }
//   };
// };

export default userSlice.reducer;
