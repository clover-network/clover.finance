import { SplashSection } from "./SplashSection";
import React from "react";
import styled, { useTheme } from 'styled-components';
import { AnchorLinkIds } from "./AnchorLinkIds";

import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { t } from './i18n/intl';
import { SpanAccent } from './CloverLibrary';

SwiperCore.use([Pagination]);

export const BuildForUsers = () => {
  const theme = useTheme();

  return (
    <SplashSection backgroundColor={theme.colors.TITLE} bottomLeftBackground='images/build_bg.svg' bottomLeftSize='60%'>
      <DivContainer id={AnchorLinkIds.COMPONENTS}>
        <BuildForUsersTitle>
          {t('builtForTheNext')}<SpanAccent>&nbsp;{t('cryptoUsers')}&nbsp;</SpanAccent>
        </BuildForUsersTitle>
        <ContentWrapper>
          {CloverItems.map((item, index) => (
            <CloverItem>
              <img src={item.icon} alt='' />
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

const CloverItems = [
  {
    title: t('firstTimeCryptoUsers'),
    body: t('firstTimeCryptoUsersHint'),
    icon: 'images/crypto_users.svg'
  },
  {
    title: t('defiUsers'),
    body: t('defiUsersHint'),
    icon: 'images/defi_users.svg'
  },
  {
    title: t('gamingUsers'),
    body: t('gamingUsersHint'),
    icon: 'images/gaming_users.svg'
  },
];

const BuildForUsersTitle = styled.div`
  font-weight: bold;
  font-size: 50px;
  line-height: 61px;
  color: ${(props) => props.theme.colors.BACKGROUND};
  display: flex;
  align-items: center;
  text-transform: uppercase;
`

const DivContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 128px 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 72px;
`;

const CloverItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.TITLE};
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 24px;
  width: 385px;
  height: 385px;
  &:first-child, &:nth-child(2) {
    margin-bottom: 40px;
  }
  
  img {
    width: 85px;
    margin-bottom: 24px;
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 16px;
    text-align: center;
    color: ${(props) => props.theme.colors.BACKGROUND};
  }
  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: ${(props) => props.theme.colors.BACKGROUND};
  }
`;
