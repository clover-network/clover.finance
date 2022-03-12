import { SplashSection } from "./SplashSection";
import {
  SpanAccent, WrapperDesktopOnly, WrapperMobileOnly,
} from './CloverLibrary';
import React from "react";
import styled, { css, useTheme } from 'styled-components';

import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { t } from './i18n/intl';
import { breakpoint } from "./mixins/breakpoint";

SwiperCore.use([Pagination]);

export const DappInteractionProtocol = () => {
  const theme = useTheme();
  return (
    <SplashSection backgroundColor={theme.colors.TITLE}>
      <DappInteractionProtocolWrapper>
        <WrapperDesktopOnly>
          <DappInteractionProtocolTitle>
            {t('CLV')}<SpanAccent>&nbsp;{t('dapp')}&nbsp;{t('interaction')}&nbsp;</SpanAccent>{t('protocol')}
          </DappInteractionProtocolTitle>
        </WrapperDesktopOnly>
        <WrapperMobileOnly>
          <DappInteractionProtocolTitle>
            {t('CLV')}<SpanAccent>&nbsp;{t('dapp')}&nbsp;</SpanAccent>
          </DappInteractionProtocolTitle>
          <DappInteractionProtocolTitle>
            <SpanAccent>{t('interaction')}&nbsp;</SpanAccent>{t('protocol')}
          </DappInteractionProtocolTitle>
        </WrapperMobileOnly>
        <ContentWrapper>
          <WrapperMobileOnly>
            <ContentImg>
              <img src='/images/dapp_bg.gif' alt='' />
            </ContentImg>
          </WrapperMobileOnly>
          <ContentLeft>
            <TextContent>
              <h3>
                {t('extendEIP')}
              </h3>
              <span>
                {t('extendEIPHint')}
              </span>
            </TextContent>
          </ContentLeft>
          <ContentRight>
            <img src='images/dapp_bg.gif' alt='' />
          </ContentRight>
        </ContentWrapper>
      </DappInteractionProtocolWrapper>
    </SplashSection>
  );
};

const DappInteractionProtocolWrapper = styled.div`
  padding-top: 128px;
  ${breakpoint(css`
    padding-top: 40px;
  `)};
`

const DappInteractionProtocolTitle = styled.div`
  font-weight: bold;
  font-size: 50px;
  line-height: 61px;
  color: ${(props) => props.theme.colors.BACKGROUND};
  display: flex;
  align-items: center;
  ${breakpoint(css`
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    text-transform: uppercase;
  `)};
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 72px 0;
  background: url('/images/dapp_bg.png') no-repeat right bottom;
  background-size: contain;
  padding-bottom: 128px;

  ${breakpoint(css`
    margin: 24px 0;
    padding-bottom: 0;
    background: none;
    flex-direction: column;
  `)};
`;

const ContentImg = styled.div`
  background: url('/images/mobile_dapp_bg.png') no-repeat right bottom;
  background-size: contain;
  padding-bottom: 54px;
  margin-left: -24px;
  & > img {
    width: 100%;
    margin-left: 24px;
  }
`

const ContentLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  margin-right: 30px;
  ${breakpoint(css`
    margin: 40px 0;
  `)};
`;

const ContentRight = styled.div`
  flex: 1;
  img {
    width: 100%;
  }
  ${breakpoint(css`
    display: none;
  `)};
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: ${(props) => props.theme.colors.BACKGROUND};

  h3 {
    margin-bottom: 30px;
  }
  span {
    white-space: break-spaces;
  }
  ${breakpoint(css`
    h3, span {
      font-size: 15px;
      line-height: 24px;
    }
  `)};
`;
