import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { RootState } from '../state';

export function useLocale() {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const locale = useAppSelector(({ i18n: { locale } }) => locale);

  return useMemo(() => ({ locale }), [locale]);
}
