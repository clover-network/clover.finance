import { SplashSection } from "./SplashSection";
import { LeftAlignTitle } from './CloverLibrary';
import React from "react";
import styled from 'styled-components';

import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { t } from './i18n/intl';

SwiperCore.use([Pagination]);

export const PlatformInfrastructure = () => {
  const contentList1 = [
    {content: t('cloverPlatformText1')},
    {content: t('cloverPlatformText2')},
    {content: t('cloverPlatformText3')},
    {content: t('cloverPlatformText4')},
    {content: t('cloverPlatformText5')},
  ]
  const contentList2 = [
    {content: t('cloverPlatformText6')},
    {content: t('cloverPlatformText7')},
    {content: t('cloverPlatformText8')},
    {content: t('cloverPlatformText9')},
    {content: t('cloverPlatformText10')},
  ]
  return (
    <SplashSection>
      <ContentWrapper>
        <LeftAlignTitle>{t('cloverPlatform')}</LeftAlignTitle>
        <ContentTop>{t('cloverEcosystemDapp')}</ContentTop>
        <Row>
          {contentList1.map((item, index) => (
            <Item key={index}>{item.content}</Item>
          ))}
        </Row>
        <ContentBottom>
          <Row>
            {contentList2.map((item, index) => (
              <BottomItem key={index}>{item.content}</BottomItem>
            ))}
          </Row>
          <h3>{t('cloverPlatformCloverChain')} </h3>
        </ContentBottom>
      </ContentWrapper>
    </SplashSection>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 128px 0;
`;

const ContentTop = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  padding: 50px 0;
  text-align: center;
  border: 1px solid #06E594;
  border-radius: 8px;
  margin: 72px 0 32px;
  color: ${(props) => props.theme.colors.NEUTRAL};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 122px;
  text-align: center;
  border: 1px solid #06E594;
  border-radius: 8px;
  flex: 1;
  color: ${(props) => props.theme.colors.NEUTRAL};
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-right: 26px;
  &:last-child {
    margin-right: 0;
  }
`;

const BottomItem = styled(Item)`
  border: 1px dashed #FEFFCA;
`

const ContentBottom = styled.div`
  border: 1px solid #BFE22D;
  border-radius: 8px;
  padding: 24px 24px 36px;
  margin-top: 32px;
  text-align: center;
  
  & > h3 {
    color: ${(props) => props.theme.colors.NEUTRAL};
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    margin-right: 26px;
    margin-top: 36px;
  }
`;
