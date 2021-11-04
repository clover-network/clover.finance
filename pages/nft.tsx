import React from "react";
import { SplashModeContext, SplashPageMode } from "../src/SplashModeContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/GlobalStyle";
import { SplashPageNFT } from "../src/nft/SplashPageNFT";
import { ThemeNFT } from "../src/themes/ThemeNFT";

export default function FirstPost() {
  return (
    <SplashModeContext.Provider value={SplashPageMode.NFT}>
      <ThemeProvider theme={ThemeNFT}>
        <GlobalStyle />
        <SplashPageNFT />
      </ThemeProvider>
    </SplashModeContext.Provider>
  );
}
