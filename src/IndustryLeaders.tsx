import { SplashSection } from "./SplashSection";
import { Grid, SpanAccent } from './CloverLibrary';
import React from "react";
import styled, { useTheme } from 'styled-components';
import { AnchorLinkIds } from "./AnchorLinkIds";

import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { t } from './i18n/intl';

SwiperCore.use([Pagination]);

export const IndustryLeaders = () => {
  const theme = useTheme();

  return (
    <SplashSection backgroundColor={theme.colors.ACCENT}>
      <DivContainer id={AnchorLinkIds.COMPONENTS}>
        <ContentWrapper>
          <ContentLeft>
            <h4>{t('cloverDNA')}</h4>
            <h3>{t('industryLeaders')}</h3>
            <span>{t('industryLeadersHint')}</span>
          </ContentLeft>
          <ContentRight>
            {images.map((item, index) => (
              <CloverItem>
                <img src={item} alt='' />
              </CloverItem>
            ))}
          </ContentRight>
        </ContentWrapper>
      </DivContainer>
    </SplashSection>
  );
};

const images = [
  "images/leaders/okex.png",
  "images/leaders/huobi.png",
  "images/leaders/polychain.png",
  "images/leaders/gate.png",
  "images/leaders/illusionist.png",
  "images/leaders/bitcom.png",
  "images/leaders/cmsw.png",
  "images/leaders/hyperw.png",
  "images/leaders/bithumb.png",
  "images/leaders/kr1.png",
  "images/leaders/alameda.png",
  "images/leaders/automata.png",
];

const DivContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 128px 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 72px;
`;

const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  h4 {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    text-transform: uppercase;
    margin-bottom: 8px;
    color: ${(props) => props.theme.colors.BACKGROUND};
  }

  h3 {
    font-weight: bold;
    font-size: 52px;
    line-height: 60px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.BACKGROUND};
    margin-bottom: 24px;
  }

  span {
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
  }
`;

const ContentRight = styled(Grid)`
  margin-left: 30px;
  align-items: center;
`;

const CloverItem = styled.div`
  img {
    height: 100px;
  }
`
