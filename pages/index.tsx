import React from "react";

import { SplashModeContext, SplashPageMode } from "../src/SplashModeContext";
import { GlobalStyle } from "../src/GlobalStyle";
import { DefaultHead } from "../src/DefaultHead";
import { AppBase } from '../src/layout/AppBase/AppBase';
import { Content } from '../src/Content';
import store from '../src/state';
import { Provider } from 'react-redux';

export default function FirstPost() {
  return (
    <SplashModeContext.Provider value={SplashPageMode.CLOVER}>
      <Provider store={store}>
        <AppBase>
          <DefaultHead />
          <GlobalStyle />
          <Content />
        </AppBase>
      </Provider>
    </SplashModeContext.Provider>
  );
}
