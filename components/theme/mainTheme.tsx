import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

const mainTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
  overrides: {},
} as ThemeOptions);

export { mainTheme };
