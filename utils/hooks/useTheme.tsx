import { useMediaQuery, useTheme } from '@material-ui/core';

export const useIsXsUp = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('xs'));
};

export const useIsSmUp = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('sm'));
};

export const useIsMdUp = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('md'));
};

export const useIsLgUp = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('lg'));
};
