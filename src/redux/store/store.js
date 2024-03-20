import {persistReducer, persistStore} from 'redux-persist';
import authReducer from '../reducer/authReducer';
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {authSliceRducer} from '../slice/calendarSlice';
import formuSlice from '../slice/formuSlice';
import portfolioSlice from '../slice/portfolioSlice';
import {clientApi} from '../services/clientApi';
import {setupListeners} from '@reduxjs/toolkit/query';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  authSlice: authSliceRducer,
  formu: formuSlice,
  portfolio: portfolioSlice,
  [clientApi.reducerPath]: clientApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
// hello
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(clientApi.middleware),
});
setupListeners(store.dispatch);
const persistor = persistStore(store);

export {store, persistor};
