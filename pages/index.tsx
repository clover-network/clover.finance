import React from "react";
import { SplashModeContext, SplashPageMode } from "../src/SplashModeContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/GlobalStyle";
import { SplashPageEntry } from "../src/SplashPageEntry";
import { ThemeClover } from "../src/themes/ThemeClover";
import { MenuContextProvider } from "../src/MenuContextProvider";

import SwiperCore, { Navigation, Pagination } from "swiper";
import Head from "next/head";

SwiperCore.use([Navigation, Pagination]);

export default function FirstPost() {
  return (
    <MenuContextProvider>
      <SplashModeContext.Provider value={SplashPageMode.CLOVER}>
        <Head>
          <title>Clover - Cross-chain DeFi Interoperability</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <ThemeProvider theme={ThemeClover}>
          <GlobalStyle />
          <SplashPageEntry />
        </ThemeProvider>
      </SplashModeContext.Provider>
    </MenuContextProvider>
  );
}
