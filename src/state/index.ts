import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { i18nSlice } from '../i18n/i18nSlice';

const i18nPersistConfig = {
  key: 'i18n',
  storage: storage,
};

const i18n = persistReducer(i18nPersistConfig, i18nSlice.reducer);

const store = configureStore({
  reducer: { i18n },
  middleware: [
    ...getDefaultMiddleware({ thunk: false }),
  ],
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
