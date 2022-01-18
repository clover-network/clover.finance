import React, { useEffect, useState } from "react";
import { CloverChain } from '../src/CloverChain';
import { Wallet } from '../src/Wallet';
import { AboutUs } from '../src/AboutUs';
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import Header from './components/Header';
import { t } from './i18n/intl';
import { useRouter } from 'next/router';

SwiperCore.use([Pagination]);

export const Content = () => {
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
    <div>
      <Header
        navList={navList}
        currentTab={selectTab}
        handleChange={(tab: any) => changeTab(tab)}
      />
      {selectTab.name === t('cloverChain') && <CloverChain />}
      {selectTab.name === t('wallet') && <Wallet />}
      {selectTab.name === t('aboutUs') && <AboutUs />}
    </div>
  );
};
