import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

const mainTheme = createMuiTheme({
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
  overrides: {},
} as ThemeOptions);

export { mainTheme };
