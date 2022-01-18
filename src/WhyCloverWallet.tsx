import { SplashSection } from "./SplashSection";
import { SpanAccent } from "./CloverLibrary";
import React from "react";
import styled, { css, useTheme } from 'styled-components';
import { AnchorLinkIds } from "./AnchorLinkIds";

import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { t } from './i18n/intl';
import { breakpoint } from "./mixins/breakpoint";

SwiperCore.use([Pagination]);

export const WhyCloverWallet = () => {
  const theme = useTheme();

  const CloverItems = [
    {
      title: t('supportBlockChain'),
      body: t('supportBlockChainHint'),
      logo: "images/support_icon.svg",
    },
    {
      title: t('multiChainConnect'),
      body: t('multiChainConnectHint'),
      logo: "images/connect_icon.svg",
    },
    {
      title: t('appStore'),
      body: t('appStoreHint'),
      logo: "images/app_store_icon.svg",
    },
    {
      title: t('crossChain'),
      body: t('crossChainHint'),
      logo: "images/cross_chain_icon.svg",
    },
  ];

  return (
    <SplashSection backgroundColor={theme.colors.TITLE}>
      <DivContainer id={AnchorLinkIds.COMPONENTS}>
        <WhyCloverWalletTitle>
          {t('why')}<SpanAccent>&nbsp;{t('cloverWallet')}&nbsp;</SpanAccent>
        </WhyCloverWalletTitle>
        <ContentWrapper>
          {CloverItems.map((item, index) => (
            <CloverItem>
              <img src={item.logo} alt='' />
              <TextContent key={index}>
                <h3>{item.title}</h3>
                <span>{item.body}</span>
              </TextContent>
            </CloverItem>
          ))}
        </ContentWrapper>
      </DivContainer>
    </SplashSection>
  );
};

const WhyCloverWalletTitle = styled.div`
  font-weight: bold;
  font-size: 50px;
  line-height: 61px;
  color: ${(props) => props.theme.colors.BACKGROUND};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  ${breakpoint(css`
    font-size: 24px;
    line-height: 36px;
  `)};
`

const DivContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 128px 0;
  ${breakpoint(css`
    padding: 48px 0;
  `)}
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 72px;
  ${breakpoint(css`
    margin: 24px 0;
    flex-direction: column;
  `)};
`;

const CloverItem = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  &:first-child, &:nth-child(2) {
    margin-bottom: 40px;
  }
  
  img {
    width: 69px;
    margin-right: 32px;
  }
  ${breakpoint(css`
    width: unset;
    margin-bottom: 40px;
    &:last-child {
      margin: 0;
    }
  `)};
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  h3 {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors.BACKGROUND};
  }
  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #303030;
  }
  ${breakpoint(css`
    h3 {
      font-size: 15px;
      line-height: 24px;
      margin-bottom: 8px;
    }
    span {
      font-size: 15px;
      line-height: 24px;
    }
  `)};
`;
