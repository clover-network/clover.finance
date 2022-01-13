import React, { useEffect, useState } from "react";

import { SplashModeContext, SplashPageMode } from "../src/SplashModeContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/GlobalStyle";
// import { Reward } from "../src/reward";
// import { SupportClover } from "../src/clover/SupportClover";
import { ThemeClover } from "../src/themes/ThemeClover";
import { DefaultHead } from "../src/DefaultHead";
import { useRouter } from "next/router";
import Header from "../src/components/Header";
import { SplashPageEntry } from '../src/SplashPageEntry';
import { CloverChain } from '../src/CloverChain';
import { Wallet } from '../src/Wallet';
import { AboutUs } from '../src/AboutUs';
import { AppBase } from '../src/layout/AppBase/AppBase';
import store from '../src/state';
import { Provider } from 'react-redux';
import { t } from '../src/i18n/intl';

export default function FirstPost() {
  const navList = [
    {
      name: t('cloverChain'),
      path: "/",
    },
    {
      name: t('wallet'),
      path: "/?type=wallet",
    },
    {
      name: t('aboutUs'),
      path: "/?type=aboutUs",
    },
  ];
  const [selectTab, setSelectTab] = useState({ name: "", path: "" });
  const location = useRouter();

  useEffect(() => {
    const routeSearch = window.location.search;
    switch (routeSearch) {
      case "":
        setSelectTab(navList[0]);
        break;
      case "?type=wallet":
        setSelectTab(navList[1]);
        break;
      case "?type=aboutUs":
        setSelectTab(navList[2]);
        break;
      default:
        // router.replace("/");
        setSelectTab(navList[0]);
        break;
    }
  }, [location]);
  const changeTab = (tab: any) => {
    location.push(tab.path, undefined, { shallow: true });
    setSelectTab(tab);
  };

  return (
    <SplashModeContext.Provider value={SplashPageMode.CLOVER}>
      <Provider store={store}>
        <AppBase>
          <DefaultHead />
          <GlobalStyle />
          <Header
            navList={navList}
            currentTab={selectTab}
            handleChange={(tab: any) => changeTab(tab)}
          />
          {selectTab.name === t('cloverChain') && <CloverChain />}
          {selectTab.name === t('wallet') && <Wallet />}
          {selectTab.name === t('aboutUs') && <AboutUs />}
        </AppBase>
      </Provider>
    </SplashModeContext.Provider>
  );
}
