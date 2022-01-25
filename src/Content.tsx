import React, { useEffect, useState } from "react";
import { CloverChain } from '../src/CloverChain';
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import Header from './components/Header';
import { t } from './i18n/intl';
import { useRouter } from 'next/router';
import { AnchorLinkIds } from './AnchorLinkIds';

SwiperCore.use([Pagination]);
export const Content = () => {
  const navList = [
    {
      name: t('WEB3'),
      path: AnchorLinkIds.WEB3,
    },
    {
      name: t('DE-FI'),
      path: AnchorLinkIds.DECENTRALIZED,
    },
    {
      name: t('DAO'),
      path: AnchorLinkIds.GOVERNANCE,
    },
    {
      name: t('SAKURA IS'),
      path: AnchorLinkIds.COMPONENTS,
    },
    // {
    //   name: t('BUILD'),
    //   path: AnchorLinkIds.ECOSYSTEM,
    // },
    {
      name: t('INFRASTRUCTURE'),
      path: AnchorLinkIds.ECOSYSTEM,
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
    // location.push(tab.path, undefined, { shallow: true });
    setSelectTab(tab);
  };

  return (
    <div>
      <Header
        navList={navList}
        currentTab={selectTab}
        handleChange={(tab: any) => changeTab(tab)}
      />
      <CloverChain />
      {/*{selectTab.name === t('DE-FI') && <Wallet />}*/}
      {/*{selectTab.name === t('DAO') && <AboutUs />}*/}
    </div>
  );
};
