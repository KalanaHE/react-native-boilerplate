import {createSlice} from '@reduxjs/toolkit';

const REDUCER_DOMAIN = 'User';

const getInitialState = () => ({
  user: null,
});

const userSlice = createSlice({
  name: REDUCER_DOMAIN,
  initialState: getInitialState(),
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {},
});

export const {setUser} = userSlice.actions;

// export const addChildGrowthInfo = payload => {
//   const {childId} = payload;
//   return async dispatch => {
//     try {
//       dispatch(setAddGrowthStatus('loading'));
//       dispatch(setLoading(true));
//       dispatch(setAddGrowthError(null));
//       const response = await ImmunifyApi.addGrowthInfo(payload);
//       if (response && (response.status === 201 || response.status === 200)) {
//         dispatch(setAddGrowthStatus('succeeded'));
//       } else {
//         // todo handle
//       }
//     } catch (err) {
//       dispatch(setAddGrowthError(err));
//       dispatch(setAddGrowthStatus('failed'));
//     } finally {
//       dispatch(setLoading(false));
//       getGrowthInfo({childId});
//     }
//   };
// };

export default userSlice.reducer;
