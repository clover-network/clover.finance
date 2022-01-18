import { ReactNode, useState, useEffect } from 'react';
import intl from 'react-intl-universal';
import { ThemeProvider } from "styled-components";
import { useLocale } from '../../i18n/useLocale';
import { locales } from '../../i18n';
import { ThemeClover } from '../../themes/ThemeClover';

interface IAppBaseProps {
  children: ReactNode;
}

export const AppBase = ({ children }: IAppBaseProps) => {
  const [initDone, setInitDone] = useState(false);
  const { locale } = useLocale();

  useEffect(() => {
    setInitDone(false);
    intl
      .init({
        currentLocale: locale,
        locales,
      })
      .then(() => {
        setInitDone(true);
      });
  }, [locale]);

  return (
    <ThemeProvider theme={ThemeClover}>
      {initDone && children}
    </ThemeProvider>
  );
};
