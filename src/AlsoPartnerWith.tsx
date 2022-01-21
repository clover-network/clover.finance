import { SplashSection } from "./SplashSection";
import React, { useState } from 'react';
import styled, { css, useTheme } from 'styled-components';
import { AnchorLinkIds } from "./AnchorLinkIds";

import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { t } from './i18n/intl';
import { breakpoint } from "./mixins/breakpoint";
import { WrapperDesktopOnly, WrapperMobileOnly } from './CloverLibrary';

SwiperCore.use([Pagination]);

export const AlsoPartnerWith = () => {
  const theme = useTheme();
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <SplashSection backgroundColor={theme.colors.YELLOW_BG}>
      <DivContainer id={AnchorLinkIds.COMPONENTS}>
        <AlsoPartnerWithTitle>
          {t('partnerWith')}
        </AlsoPartnerWithTitle>
        <WrapperDesktopOnly>
          <ArrowWrapper>
            <img
              src={selectIndex === 0 ? '/images/arrow_left.svg' : '/images/arrow_left_hover.svg'}
              alt=''
              onClick={() => {
                if (selectIndex === 0) {
                  setSelectIndex(0)
                } else {
                  setSelectIndex(selectIndex - 12)
                }
              }}
            />
            <img
              src={selectIndex >= (images.length - 12) ? '/images/arrow_right.svg' : '/images/arrow_right_hover.svg'}
              alt=''
              onClick={() => {
                if (selectIndex >= (images.length - 12)) {
                  setSelectIndex(selectIndex)
                } else {
                  setSelectIndex(selectIndex + 12)
                }
              }}
            />
          </ArrowWrapper>
        </WrapperDesktopOnly>
        <ContentWrapper>
          {images.map((item, index) => (
            index >= selectIndex && index < (selectIndex + 12) && (
              <CloverItem>
                <img src={item} alt='' />
              </CloverItem>
            )
          ))}
        </ContentWrapper>
        <WrapperMobileOnly>
          <ArrowWrapper>
            <img
              src={selectIndex === 0 ? '/images/arrow_left.svg' : '/images/arrow_left_hover.svg'}
              alt=''
              onClick={() => {
                if (selectIndex === 0) {
                  setSelectIndex(0)
                } else {
                  setSelectIndex(selectIndex - 12)
                }
              }}
            />
            <img
              src={selectIndex >= (images.length - 12) ? '/images/arrow_right.svg' : '/images/arrow_right_hover.svg'}
              alt=''
              onClick={() => {
                if (selectIndex >= (images.length - 12)) {
                  setSelectIndex(selectIndex)
                } else {
                  setSelectIndex(selectIndex + 12)
                }
              }}
            />
          </ArrowWrapper>
        </WrapperMobileOnly>
      </DivContainer>
    </SplashSection>
  );
};

const images = [
  "images/partner/chain.png",
  "images/partner/alice.png",
  "images/partner/ankr.png",
  "images/partner/apron.png",
  "images/partner/automata.png",
  "images/partner/bella.png",
  "images/partner/bitcoin.png",
  "images/partner/boring.png",
  "images/partner/bounce.png",
  "images/partner/chainLink.png",
  "images/partner/chainSwap.png",
  "images/partner/crust.png",
  "images/partner/cryptoblades.png",
  "images/partner/darwinia.png",
  "images/partner/dego.png",
  "images/partner/dodo.png",
  "images/partner/easyfi.png",
  "images/partner/ethalend.png",
  "images/partner/fantom.png",
  "images/partner/theGraph.png",
  "images/partner/hedget.png",
  "images/partner/injective.png",
  "images/partner/kira.png",
  "images/partner/manta.png",
  "images/partner/mathWallet.png",
  "images/partner/parsiq.png",
  "images/partner/polygon.png",
  "images/partner/showCase.png",
  "images/partner/snowSwap.png",
  "images/partner/unilend.png",
];

const AlsoPartnerWithTitle = styled.div`
  font-weight: bold;
  font-size: 50px;
  line-height: 61px;
  color: ${(props) => props.theme.colors.BACKGROUND};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  ${breakpoint(css`
    font-size: 32px;
    line-height: 40px;
  `)}
`

const DivContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 128px 0;
  ${breakpoint(css`
    flex-direction: column;
    align-items: center;
    padding: 48px 0;
  `)}
`;

const ArrowWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    margin-right: 30px;
    cursor: pointer;
    &:last-child {
      margin: 0;
    }
  }
  ${breakpoint(css`
    justify-content: space-between;
    width: 100vw;
    padding: 0 24px;
  `)}
`

const ContentWrapper = styled.div`
  width: 100%;
  display: grid;
  margin-top: 20px;
  align-items: center;
  --repeat: auto-fill;
  --auto-grid-min-size: 200px;
  grid-template-columns: repeat(
          var(--repeat),
          minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 1em;
  ${breakpoint(css`
    margin-top: 24px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
  `)}
`;

const CloverItem = styled.div`
  margin: 0 20px;
  img {
    height: 100px;
  }
  ${breakpoint(css`
    img {
      height: 70px;
    }
  `)}
`
