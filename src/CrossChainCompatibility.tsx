import { SplashSection } from "./SplashSection";
import {
  BodyText,
  Grid,
  GridItem,
  SpanAccent,
  Subtitle,
  LeftAlignTitle,
  SectionSubtitle, SpacerSection,
} from './CloverLibrary';
import React, { useContext, useEffect, useState } from "react";
import styled, { css, useTheme } from 'styled-components';
import { AnchorLinkIds } from "./AnchorLinkIds";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { breakpoint } from "./mixins/breakpoint";
import { t } from './i18n/intl';

SwiperCore.use([Pagination]);

export const CrossChainCompatibility = () => {
  const [selectIndex, setSelectIndex] = useState(0);
  const theme = useTheme();
  const CloverItems = [
    {
      title: t('extension'),
      body: t('crossChainCompatibility'),
      content: t('crossChainCompatibilityHint'),
      logo: "images/logo_extension.png",
      btnText: t('downloadNow'),
      url: "https://apps.apple.com/app/clover-wallet/id1570072858"
    },
    {
      title: t('web'),
      body: t('importWallet'),
      content: t('importWalletHint'),
      logo: "images/logo_web.png",
      btnText: t('exploreNow'),
      url: "https://wallet.clover.finance/"
    },
    {
      title: t('mobile'),
      body: t('appStore'),
      content: t('appStoreHint'),
      logo: "images/logo_mobile.png",
      url: ""
    },
  ];

  const openUrl = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <SplashSection backgroundColor={theme.colors.PINK_BG}>
      <DivContainer id={AnchorLinkIds.COMPONENTS} backgroundImage={CloverItems[selectIndex].logo}>
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
            <SpecialSpacer />
            <TextContent>
              <h3>{CloverItems[selectIndex].body}</h3>
              <span>{CloverItems[selectIndex].content}</span>
              {CloverItems[selectIndex].btnText ? <ItemBtn onClick={() => openUrl(CloverItems[selectIndex].url)}>{CloverItems[selectIndex].btnText}</ItemBtn> : <ItemBtns>
                <img onClick={() => openUrl('https://play.google.com/store/apps/details?id=com.clover.finance.wallet&hl=en_US&gl=US')} src='images/mobile_google.svg' alt='' />
                <img onClick={() => openUrl('https://apps.apple.com/app/clover-wallet/id1570072858')} src='images/mobile_app.svg' alt='' />
              </ItemBtns>}
            </TextContent>
          </ContentRight>
        </ContentWrapper>
        <SwipeCustomizer>
          <SwipeTabs>
            {CloverItems.map((item, i) => {
              return (
                <div className={i === selectIndex ? 'selected' : ''}>
                  {item.title}
                </div>
              );
            })}
          </SwipeTabs>
          <Swiper
            initialSlide={selectIndex}
            pagination={true}
            autoHeight={true}
            onSlideChange={(e) => setSelectIndex(e.activeIndex)}
          >
            {CloverItems.map((item, i) => {
              return (
                <div>
                  <SwiperSlide key={i}>
                    <Slide {...item} />
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
          <TextContent>
            <h3>{CloverItems[selectIndex].body}</h3>
            <span>{CloverItems[selectIndex].content}</span>
            {CloverItems[selectIndex].btnText ? <ItemBtn onClick={() => openUrl(CloverItems[selectIndex].url)}>{CloverItems[selectIndex].btnText}</ItemBtn> : <ItemBtns>
              <img onClick={() => openUrl('https://play.google.com/store/apps/details?id=com.clover.finance.wallet&hl=en_US&gl=US')} src='images/mobile_google.svg' alt='' />
              <img onClick={() => openUrl('https://apps.apple.com/app/clover-wallet/id1570072858')} src='images/mobile_app.svg' alt='' />
            </ItemBtns>}
          </TextContent>
        </SwipeCustomizer>
      </DivContainer>
    </SplashSection>
  );
};

const Slide: React.FC<{
  logo: string;
}> = ({ logo }) => {
  return (
    <DivSlideContainer>
      <img src={logo} alt='' />
    </DivSlideContainer>
  );
};

const DivSlideContainer = styled.div`
  display: flex;
  //flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100%;
  img {
    width: 70%;
    margin: 20px 0;
  }

  margin-bottom: 30px;
`;

const DivContainer = styled.div<{
  backgroundImage?: string;
}>`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 50px 128px;
  width: 100vw;
  margin-left: -128px;
  background-image: ${(props) => `url("${props.backgroundImage}")` || "none"};
  background-position: bottom left;
  background-repeat: no-repeat;
  ${breakpoint(css`
    background: none;
    padding: 50px 0;
    margin-left: -24px;
  `)};
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 72px 0;
  ${breakpoint(css`
    display: none;
  `)};
`;

const SwipeCustomizer = styled.div`
  display: none;
  ${breakpoint(css`
    display: unset;
  `)};

  .swiper-pagination-bullet{
    background: ${(props) => props.theme.colors.BACKGROUND}!important;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active{
    opacity: 1.0;
    background: ${(props) => props.theme.colors.BACKGROUND}!important;
  }

  //.swiper-autoheight, .swiper-autoheight .swiper-slide {
  //  height: unset;
  //}
  //.swiper-slide .swiper-slide-active {
  //  height: 100%!important;
  //}
`;

const SwipeTabs = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
 
  & > div {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.BACKGROUND};
    opacity: 0.3;
    &.selected {
      opacity: 1;
    }
  }
`

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
  ${breakpoint(css`
    max-width: unset;
    margin-top: 20px;
    padding: 0 24px;
    h3 {
      font-size: 24px;
      line-height: 36px;
    }
    span {
      font-size: 15px;
      line-height: 24px;
    }
  `)};
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
  ${breakpoint(css`
    width: 100%;
    max-width: unset;
  `)};
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

const SpecialSpacer = styled(SpacerSection)`
 width: 576px;
  ${breakpoint(css`
    display: none;
  `)}
`;
