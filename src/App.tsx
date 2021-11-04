import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SplashPageEntry } from "./SplashPageEntry";
import { ThemeProvider } from "styled-components";
import { ThemeClover } from "./themes/ThemeClover";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeSakura } from "./themes/ThemeSakura";
import { SplashModeContext, SplashPageMode } from "./SplashModeContext";

//https://github.com/FortAwesome/react-fontawesome/issues/234
import { config } from "@fortawesome/fontawesome-svg-core"; // 👈
import "@fortawesome/fontawesome-svg-core/styles.css"; // 👈
config.autoAddCss = false; // 👈

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sakura">
          <SplashModeContext.Provider value={SplashPageMode.SAKURA}>
            <ThemeProvider theme={ThemeSakura}>
              <GlobalStyle />
              <SplashPageEntry />
            </ThemeProvider>
          </SplashModeContext.Provider>
        </Route>
        <Route path="/">
          <SplashModeContext.Provider value={SplashPageMode.CLOVER}>
            <ThemeProvider theme={ThemeClover}>
              <GlobalStyle />
              <SplashPageEntry />
            </ThemeProvider>
          </SplashModeContext.Provider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
