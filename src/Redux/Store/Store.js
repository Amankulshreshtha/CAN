import {persistStore} from 'redux-persist';
import authReducer from '../reducer/authReducer';
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {authSliceRducer} from '../slice/calendarSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  authSlice: authSliceRducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);

export {store, persistor};
