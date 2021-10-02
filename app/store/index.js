import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import {AsyncStorage} from 'react-native';

import logger from 'redux-logger';

import userReducer from '../features/User/Home/HomeSlice';
import commonReducer from '../features/Common/commonSlice';
import loginReducer from '../features/loginSlice';

// persist config obj
// blacklist a store attribute using it's reducer name. Blacklisted attributes will not persist. (I did not find a way to blacklist specific values)
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['age'], //blacklisting a store attribute name, will not persist that store attribute.
};

const rootReducer = combineReducers({
  common: commonReducer,
  user: userReducer,
  login: loginReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
export default store;
