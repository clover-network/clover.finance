import { SplashSection } from "./SplashSection";
import {
  LeftAlignTitle, SpanAccent,
} from './CloverLibrary';
import React from "react";
import styled, { css, useTheme } from 'styled-components';

import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { t } from './i18n/intl';

SwiperCore.use([Pagination]);

export const DappInteractionProtocol = () => {
  const theme = useTheme();
  return (
    <SplashSection backgroundColor={theme.colors.TITLE}>
      <DappInteractionProtocolWrapper>
        <DappInteractionProtocolTitle>
          {t('clover')}<SpanAccent>&nbsp;{t('dappInteraction')}&nbsp;</SpanAccent>{t('protocol')}
        </DappInteractionProtocolTitle>
        <ContentWrapper>
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
            {/*<img src='images/wallet_img.svg' alt='' />*/}
          </ContentRight>
        </ContentWrapper>
      </DappInteractionProtocolWrapper>
    </SplashSection>
  );
};

const DappInteractionProtocolWrapper = styled.div`
  padding-top: 128px;
`

const DappInteractionProtocolTitle = styled.div`
  font-weight: bold;
  font-size: 50px;
  line-height: 61px;
  color: ${(props) => props.theme.colors.BACKGROUND};
  display: flex;
  align-items: center;
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 72px 0;
  background: url('/images/dapp_bg.png') no-repeat center bottom;
  background-size: contain;
`;

const ContentLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  margin-right: 130px;
  
`;

const ContentRight = styled.div`
  height: 555px;
  width: 757px;
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
`;
