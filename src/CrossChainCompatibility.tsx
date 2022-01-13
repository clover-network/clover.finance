import { SplashSection } from "./SplashSection";
import {
  BodyText,
  Grid,
  GridItem,
  SpanAccent,
  Subtitle,
  LeftAlignTitle,
  SectionSubtitle,
} from "./CloverLibrary";
import React, { useContext, useEffect, useState } from "react";
import styled, { css, useTheme } from 'styled-components';
import { AnchorLinkIds } from "./AnchorLinkIds";

import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { breakpoint } from "./mixins/breakpoint";
import { t } from './i18n/intl';

SwiperCore.use([Pagination]);

export const CrossChainCompatibility = () => {
  const [selectIndex, setSelectIndex] = useState(0);
  const theme = useTheme();

  return (
    <SplashSection backgroundColor={theme.colors.PINK_BG} bottomLeftBackground={CloverItems[selectIndex].logo} bottomLeftSize='contain'>
      <DivContainer id={AnchorLinkIds.COMPONENTS}>
        <ContentWrapper>
          <ContentLeft>
            <img
              src='/images/arrow_up_black.svg'
              alt=''
              onMouseEnter={(e: any) => {
                e.stopPropagation();
                e.target.setAttribute("src", "/images/arrow_up_black_hover.svg");
              }}
              onMouseLeave={(e: any) => {
                e.stopPropagation();
                e.target.setAttribute("src", "/images/arrow_up_black.svg");
              }}
              onClick={() => {
                if (selectIndex === 0) {
                  setSelectIndex(CloverItems.length-1)
                } else {
                  setSelectIndex(selectIndex - 1)
                }
              }}
            />
            {CloverItems.map((item, i) => {
              return (
                <ItemTitle
                  className={i === selectIndex ? 'selected' : ''}
                  onClick={() => setSelectIndex(i)}
                >
                  {item.title}
                </ItemTitle>
              )
            })}
            <img
              src='/images/arrow_down_black.svg'
              alt=''
              onMouseEnter={(e: any) => {
                e.stopPropagation();
                e.target.setAttribute("src", "/images/arrow_down_black_hover.svg");
              }}
              onMouseLeave={(e: any) => {
                e.stopPropagation();
                e.target.setAttribute("src", "/images/arrow_down_black.svg");
              }}
              onClick={() => {
                if (selectIndex === CloverItems.length-1) {
                  setSelectIndex(0)
                } else {
                  setSelectIndex(selectIndex + 1)
                }
              }}
            />
          </ContentLeft>
          <ContentRight>
            <TextContent>
              <h3>{CloverItems[selectIndex].body}</h3>
              <span>{CloverItems[selectIndex].content}</span>
              {CloverItems[selectIndex].btnText ? <ItemBtn>{CloverItems[selectIndex].btnText}</ItemBtn> : <ItemBtns>
                <img src='images/mobile_google.svg' alt='' />
                <img src='images/mobile_app.svg' alt='' />
              </ItemBtns>}
            </TextContent>
          </ContentRight>
        </ContentWrapper>
      </DivContainer>
    </SplashSection>
  );
};

const CloverItems = [
  {
    title: t('extension'),
    body: t('crossChainCompatibility'),
    content: t('crossChainCompatibilityHint'),
    logo: "images/logo_extension.png",
    btnText: t('downloadNow')
  },
  {
    title: t('web'),
    body: t('importWallet'),
    content: t('importWalletHint'),
    logo: "images/logo_web.png",
    btnText: t('exploreNow')
  },
  {
    title: t('mobile'),
    body: t('appStore'),
    content: t('appStoreHint'),
    logo: "images/logo_mobile.png",
  },
];

const DivContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 50px 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 72px 0;
`;

const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  margin-right: 130px;
  img {
    width: 10px;
    margin-bottom: 29px;
    cursor: pointer;
  }
`;

const ContentRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    width: 160px;
    margin-right: 78px;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  h3 {
    font-weight: bold;
    font-size: 50px;
    line-height: 60px;
    text-transform: uppercase;
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

const ItemBtn = styled.div`
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 8px;
  text-align: center;
  padding: 14px 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  height: fit-content;
  cursor: pointer;
  max-width: 167px;
  margin-top: 24px;
  color: ${(props) => props.theme.colors.BACKGROUND};
`

const ItemBtns = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  
  img {
    margin-right: 24px;
    height: 50px;
    cursor: pointer;
  }
`

const ItemTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.BACKGROUND};
  opacity: 0.4;
  margin-bottom: 29px;
  cursor: pointer;
  
  &.selected {
    opacity: 1!important;
  }
`;
