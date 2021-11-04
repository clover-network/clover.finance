import React from "react";
import { SplashModeContext, SplashPageMode } from "../src/SplashModeContext";
import { ThemeProvider } from "styled-components";
import { ThemeSakura } from "../src/themes/ThemeSakura";
import { GlobalStyle } from "../src/GlobalStyle";
import { SplashPageEntry } from "../src/SplashPageEntry";
import { MenuContextProvider } from "../src/MenuContextProvider";

export default function FirstPost() {
  return (
    <MenuContextProvider>
      <SplashModeContext.Provider value={SplashPageMode.SAKURA}>
        <ThemeProvider theme={ThemeSakura}>
          <GlobalStyle />
          <SplashPageEntry />
        </ThemeProvider>
      </SplashModeContext.Provider>
    </MenuContextProvider>
  );
}
