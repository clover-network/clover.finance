import { SplashSection } from "./SplashSection";
import React from "react";
import styled, { useTheme } from 'styled-components';
import { AnchorLinkIds } from "./AnchorLinkIds";

import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { t } from './i18n/intl';

SwiperCore.use([Pagination]);

export const YourPassport = () => {
  const theme = useTheme();

  return (
    <SplashSection backgroundColor={theme.colors.YELLOW_BG}>
      <DivContainer id={AnchorLinkIds.COMPONENTS}>
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
        <img src='images/your_passport_icon.svg' alt='' />
      </DivContainer>
    </SplashSection>
  );
};

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

const YourPassportTitle = styled.div`
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
  padding: 128px 0;
  
  & > img {
    width: 271px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 72px;
`;

const CloverItem = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  &:first-child, &:nth-child(2) {
    margin-bottom: 40px;
  }
  
  img {
    width: 69px;
    margin-right: 32px;
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
`;
