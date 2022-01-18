import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Locale {
  en = 'en-US',
  zh = 'zh-CN'
}

export interface I18nSlice {
  locale: Locale;
}

const initialState: I18nSlice = {
  locale: Locale.en,
};

export const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<Locale>) => {
      state.locale = action.payload;
    },
  },
});

export const { setLocale } = i18nSlice.actions;
