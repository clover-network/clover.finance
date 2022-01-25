import React, { useEffect } from "react";
import { SplashModeContext, SplashPageMode } from "../src/SplashModeContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/GlobalStyle";
import { SplashPageEntry } from "../src/SplashPageEntry";
import { ThemeClover } from "../src/themes/ThemeClover";
import { MenuContextProvider } from "../src/MenuContextProvider";

import SwiperCore, { Navigation, Pagination } from "swiper";
import Head from "next/head";
import router, { useRouter } from "next/router";

SwiperCore.use([Navigation, Pagination]);

export default function FirstPost() {
  const location = useRouter();
  useEffect(() => {
    if(window.location.pathname === '/sakura') {
       router.replace("/sakura.html");
    }
  }, [location]);
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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"true"}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
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
