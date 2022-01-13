import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { save, load } from 'redux-localstorage-simple';

import { i18nSlice } from '../i18n/i18nSlice';

// states that are auto persisted to localstorage and reloade
const PERSISTED_KEYS: string[] = ['application', 'settings'];

const i18nPersistConfig = {
  key: 'i18n',
  storage: storage,
};

const i18n = persistReducer(i18nPersistConfig, i18nSlice.reducer);

const store = configureStore({
  reducer: { i18n },
  middleware: [
    ...getDefaultMiddleware({ thunk: false }),
    save({ states: PERSISTED_KEYS }),
  ],
  preloadedState: load({ states: PERSISTED_KEYS }),
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
