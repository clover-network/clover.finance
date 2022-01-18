import { SplashSection } from "./SplashSection";
import React from "react";
import styled, { css, useTheme } from 'styled-components';
import { AnchorLinkIds } from "./AnchorLinkIds";

import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { t } from './i18n/intl';
import { breakpoint } from "./mixins/breakpoint";

SwiperCore.use([Pagination]);

export const AlsoPartnerWith = () => {
  const theme = useTheme();

  return (
    <SplashSection backgroundColor={theme.colors.YELLOW_BG}>
      <DivContainer id={AnchorLinkIds.COMPONENTS}>
        <AlsoPartnerWithTitle>
          {t('partnerWith')}
        </AlsoPartnerWithTitle>
        <ContentWrapper>
          {images.map((item, index) => (
            <CloverItem>
              <img src={item} alt='' />
            </CloverItem>
          ))}
        </ContentWrapper>
      </DivContainer>
    </SplashSection>
  );
};

const images = [
  "images/partner/huobi.png",
  "images/partner/fantom.png",
  "images/partner/graph.png",
  "images/partner/polygon.png",
  "images/partner/okex.png",
  "images/partner/solana.png",
  "images/partner/divergence.png",
  "images/partner/chainLink.png",
  "images/partner/alice.png",
  "images/partner/avalanche.png",
  "images/partner/cms.png",
  "images/partner/kr1.png",
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

const ContentWrapper = styled.div`
  width: 100%;
  display: grid;
  margin-top: 60px;
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
    justify-content: space-around;
  `)}
`;

const CloverItem = styled.div`
  img {
    height: 100px;
  }
  ${breakpoint(css`
    img {
      height: 70px;
    }
  `)}
`
