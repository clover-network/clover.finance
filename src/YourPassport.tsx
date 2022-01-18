import { SplashSection } from "./SplashSection";
import React from "react";
import styled, { css, useTheme } from 'styled-components';
import { AnchorLinkIds } from "./AnchorLinkIds";

import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { t } from './i18n/intl';
import { breakpoint } from "./mixins/breakpoint";
import { WrapperDesktopOnly, WrapperMobileOnly } from './CloverLibrary';

SwiperCore.use([Pagination]);

export const YourPassport = () => {
  const theme = useTheme();

  const CloverItems = [
    {
      title: t('oneForAll'),
      body: t('oneForAllHint'),
    },
    {
      title: t('anywhereAnytime'),
      body: t('anywhereAnytimeHint'),
    },
    {
      title: t('web3Entrance'),
      body: t('web3EntranceHint'),
    },
  ];
  return (
    <SplashSection backgroundColor={theme.colors.YELLOW_BG}>
      <DivContainer id={AnchorLinkIds.COMPONENTS}>
        <WrapperMobileOnly>
          <img src='images/your_passport_icon.svg' alt='' />
        </WrapperMobileOnly>
        <div>
          <YourPassportTitle>
            {t('yourPassport')}
          </YourPassportTitle>
          <ContentWrapper>
            {CloverItems.map((item, index) => (
              <CloverItem>
                <TextContent key={index}>
                  <h3>{item.title}</h3>
                  <span>{item.body}</span>
                </TextContent>
              </CloverItem>
            ))}
          </ContentWrapper>
        </div>
        <WrapperDesktopOnly>
          <img src='images/your_passport_icon.svg' alt='' />
        </WrapperDesktopOnly>
      </DivContainer>
    </SplashSection>
  );
};

const YourPassportTitle = styled.div`
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
    margin-top: 48px;
  `)};
`

const DivContainer = styled.div`
  display: flex;
  justify-content: start;
  padding: 128px 0;
  
  & > div > img {
    width: 271px;
  }
  ${breakpoint(css`
    flex-direction: column;
    align-items: center;
    padding: 48px 0;
    & > div > img {
      width: 154px;
    }
  `)}
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 72px;
  ${breakpoint(css`
    margin: 24px 0 0;
    flex-direction: column;
  `)};
`;

const CloverItem = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  &:first-child, &:nth-child(2) {
    margin-bottom: 40px;
    ${breakpoint(css`
      margin-bottom: 24px;
    `)};
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors.BACKGROUND};
  }
  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: ${(props) => props.theme.colors.BACKGROUND};
  }
  ${breakpoint(css`
    max-width: unset;
    h3 {
      margin-bottom: 8px;
    }
    h3, span {
      font-size: 15px;
      line-height: 24px;
    }
  `)};
`;
