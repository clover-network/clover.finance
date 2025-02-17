import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Pagination } from 'swiper';
import { t } from '../i18n/intl';
import { useRouter } from 'next/router';
import NewHeader from '../components/newHeader';
import { Main } from './Main';
import { About } from './About';
import { CLVChain } from './CLVChain';
import { Wallet } from './Wallet';
import { Developers } from './Developers';
import { Ecosystem } from './Ecosystem';
import styled, { css } from 'styled-components';
import { breakpoint } from '../mixins/breakpoint';

SwiperCore.use([Pagination]);

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;

  ${breakpoint({
    mobile: css``,
    tablet_mini: css``,
    tablet: css``,
  })}
`;

const Banner = styled.div`
  width: 100%;
  text-align: center;
  background-color: #00f2de;
  padding: 4px 0;
  cursor: pointer;
`;

export const NewContent = () => {
  const navList = [
    {
      name: t('home'),
      path: '/',
    },
    {
      name: t('CLVChain'),
      path: '/?type=CLVChain',
      menuList: [
        {
          text: t('crossChainExplorer'),
          url: 'https://tx.clover.finance/#/',
        },
        {
          text: t('EVMBridge'),
          url: 'https://bridge.clv.org/#/',
        },
        {
          text: t('CLVScan'),
          url: 'https://clvscan.com/',
        },
      ],
    },
    {
      name: t('about'),
      path: '/?type=about',
    },
    {
      name: t('developers'),
      path: '/?type=developers',
    },
    {
      name: t('ecosystem'),
      path: '/?type=ecosystem',
    },
  ];
  const [selectTab, setSelectTab] = useState(navList[0]);
  const location = useRouter();

  useEffect(() => {
    const routeSearch = window.location.search;
    switch (routeSearch) {
      case '':
        setSelectTab(navList[0]);
        break;
      case '?type=about':
        setSelectTab(navList[2]);
        break;
      case '?type=CLVChain':
        setSelectTab(navList[1]);
        break;
      case '?type=developers':
        setSelectTab(navList[3]);
        break;
      case '?type=ecosystem':
        setSelectTab(navList[4]);
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
      <Banner
        onClick={() => window.open('https://bit.ly/4hXqH3N', '_blank')}
      >
        Find out more about CLV 2.0
      </Banner>
      <NewHeader
        navList={navList}
        currentTab={selectTab}
        handleChange={(tab: any) => changeTab(tab)}
      />
      {/* {selectTab.name === t('wallet' || window.location.search === '') && <Wallet/>} */}
      {selectTab.name === t('CLVChain') && <CLVChain />}
      {(selectTab.name === t('home') || window.location.search === '') && (
        <Main
          startBuild={() => {
            changeTab(navList[4]);
          }}
        />
      )}
      {selectTab.name === t('about') && <About />}
      {selectTab.name === t('developers') && <Developers />}
      {selectTab.name === t('ecosystem') && <Ecosystem />}
    </Wrapper>
  );
};
