import { SplashSection } from "./SplashSection";
import { LeftAlignTitle } from './CloverLibrary';
import React from "react";
import styled, { css } from 'styled-components';

import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { t } from './i18n/intl';
import { breakpoint } from "./mixins/breakpoint";
import { Grid } from './CloverLibrary';

SwiperCore.use([Pagination]);

export const PlatformInfrastructure = () => {
  const contentList1 = [
    {content: t('cloverPlatformText1')},
    {content: t('cloverPlatformText2')},
    {content: t('cloverPlatformText3')},
    {content: t('cloverPlatformText4')},
    {content: t('cloverPlatformText5')},
  ]
  const phoneContentList1 = [
    {content: t('cloverPlatformText1')},
    {content: t('cloverPlatformText2')},
    {content: t('cloverPlatformText3')},
  ]
  const phoneContentList2 = [
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
  const phoneContentList3 = [
    {content: t('cloverPlatformText6')},
    {content: t('cloverPlatformText7')},
  ]
  const phoneContentList4 = [
    {content: t('cloverPlatformText9')},
  ]
  const phoneContentList5 = [
    {content: t('cloverPlatformText8')},
    {content: t('cloverPlatformText10')},
  ]
  return (
    <SplashSection>
      <ContentWrapper>
        <PlatformTitle>{t('cloverPlatform')}</PlatformTitle>
        <ContentTop>{t('cloverEcosystemDapp')}</ContentTop>
        <ContentList>
          {contentList1.map((item, index) => (
            <Item key={index}>{item.content}</Item>
          ))}
        </ContentList>
        <PhoneContentList>
          {phoneContentList1.map((item, index) => (
            <Item key={index}>{item.content}</Item>
          ))}
        </PhoneContentList>
        <PhoneContentList>
          {phoneContentList2.map((item, index) => (
            <Item key={index}>{item.content}</Item>
          ))}
        </PhoneContentList>
        <ContentBottom>
          <ContentList>
            {contentList2.map((item, index) => (
              <BottomItem key={index}>{item.content}</BottomItem>
            ))}
          </ContentList>
          <PhoneContentList>
            {phoneContentList3.map((item, index) => (
              <BottomItem key={index}>{item.content}</BottomItem>
            ))}
          </PhoneContentList>
          <PhoneContentList>
            {phoneContentList4.map((item, index) => (
              <PhoneBottomItem key={index}>{item.content}</PhoneBottomItem>
            ))}
          </PhoneContentList>
          <PhoneContentList>
            {phoneContentList5.map((item, index) => (
              <BottomItem key={index}>{item.content}</BottomItem>
            ))}
          </PhoneContentList>
          <h3>{t('cloverPlatformCloverChain')} </h3>
        </ContentBottom>
      </ContentWrapper>
    </SplashSection>
  );
};

const PlatformTitle = styled(LeftAlignTitle)`
  ${breakpoint(css`
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    opacity: 0.8;
  `)};
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 128px 0;
  ${breakpoint(css`
    margin: 48px 0;
  `)};
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
  ${breakpoint(css`
    margin: 32px 0 16px;
    padding: 22px 50px;
    font-size: 15px;
    line-height: 24px;
  `)};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const ContentList = styled(Row)`
  ${breakpoint(css`
    display: none;
  `)};
`

const PhoneContentList = styled(Row)`
  display: none;
  margin-bottom: 16px;
  ${breakpoint(css`
    display: flex;
  `)};
`

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
  ${breakpoint(css`
    height: 148px;
    font-size: 15px;
    line-height: 24px;
    margin-right: 10px;
    padding: 0 5px;
  `)};
`;

const BottomItem = styled(Item)`
  border: 1px dashed #FEFFCA;
  ${breakpoint(css`
    height: 88px;
    font-size: 15px;
    line-height: 24px;
    margin-right: 10px;
    padding: 0 5px;
  `)};
`

const PhoneBottomItem = styled(BottomItem)`
  ${breakpoint(css`
    height: unset;
    padding: 18px;
  `)};
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
  ${breakpoint(css`
    margin-top: 0px;

    h3 {
      margin: 0;
      font-weight: 500;
      font-size: 15px;
      line-height: 24px;
    }
  `)};
`;
