import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { t } from '../i18n/intl';
import { useRouter } from 'next/router';
import NewHeader from '../components/newHeader';
import { Main } from './Main';
import { About } from './About';
import { CLVChain } from './CLVChain';
import { Wallet } from './Wallet';
import { Developers } from './Developers';
import { Ecosystem } from './Ecosystem';
import styled from 'styled-components';

SwiperCore.use([Pagination]);

const Wrapper = styled.div`
  overflow: hidden;
  min-width: 1440px;
`

export const NewContent = () => {
  const navList = [
    {
      name: t('home'),
      path: "/",
    },
    {
      name: t('about'),
      path: "/?type=about",
    },
    {
      name: t('CLVChain'),
      path: "/?type=CLVChain",
      menuList: [
        {
          text: t('crossChainExplorer'),
          url: 'https://tx.clover.finance/#/'
        },
        {
          text: t('EVMBridge'),
          url: 'https://bridge.clv.org/#/'
        },
        {
          text: t('CLVScan'),
          url: 'https://clvscan.com/'
        },
      ]
    },
    {
      name: t('wallet'),
      path: "/?type=wallet",
    },
    {
      name: t('developers'),
      path: "/?type=developers",
    },
    {
      name: t('ecosystem'),
      path: "/?type=ecosystem",
    },
  ];
  const [selectTab, setSelectTab] = useState(navList[0]);
  const location = useRouter();

  useEffect(() => {
    const routeSearch = window.location.search;
    switch (routeSearch) {
      case "":
        setSelectTab(navList[0]);
        break;
      case "?type=about":
        setSelectTab(navList[1]);
        break;
      case "?type=CLVChain":
        setSelectTab(navList[2]);
        break;
      case "?type=wallet":
        setSelectTab(navList[3]);
        break;
      case "?type=developers":
        setSelectTab(navList[4]);
        break;
      case "?type=ecosystem":
        setSelectTab(navList[5]);
        break;
      default:
        setSelectTab(navList[0]);
        break;
    }
  }, [location]);
  const changeTab = (tab: any) => {
    location.push(tab.path, undefined, { shallow: true });
    setSelectTab(tab);
  };

  return (
    <Wrapper>
      <NewHeader
        navList={navList}
        currentTab={selectTab}
        handleChange={(tab: any) => changeTab(tab)}
      />
      {(selectTab.name === t('home') || window.location.search === '') && <Main startBuild={() => {changeTab(navList[4])}} />}
      {selectTab.name === t('about') && <About />}
      {selectTab.name === t('CLVChain') && <CLVChain />}
      {selectTab.name === t('wallet') && <Wallet />}
      {selectTab.name === t('developers') && <Developers />}
      {selectTab.name === t('ecosystem') && <Ecosystem />}
    </Wrapper>
  );
};
