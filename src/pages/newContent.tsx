import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { t } from '../i18n/intl';
import { useRouter } from 'next/router';
import NewHeader from '../components/newHeader';
import { Main } from './Main';
import { About } from './About';
import { CLVChains } from './CLVChains';
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
      name: t('about'),
      path: "/?type=about",
    },
    {
      name: t('CLVChain'),
      path: "/?type=CLVChain",
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
  const [selectTab, setSelectTab] = useState({ name: "", path: "" });
  const location = useRouter();

  useEffect(() => {
    const routeSearch = window.location.search;
    switch (routeSearch) {
      case "":
        break;
      case "?type=about":
        setSelectTab(navList[0]);
        break;
      case "?type=CLVChain":
        setSelectTab(navList[1]);
        break;
      case "?type=wallet":
        setSelectTab(navList[2]);
        break;
      case "?type=developers":
        setSelectTab(navList[3]);
        break;
      case "?type=ecosystem":
        setSelectTab(navList[4]);
        break;
      default:
        setSelectTab({ name: "", path: "" });
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
      {selectTab.name === '' && <Main />}
      {selectTab.name === t('about') && <About />}
      {selectTab.name === t('CLVChain') && <CLVChains />}
      {selectTab.name === t('wallet') && <Wallet />}
      {selectTab.name === t('developers') && <Developers />}
      {selectTab.name === t('ecosystem') && <Ecosystem />}
    </Wrapper>
  );
};
