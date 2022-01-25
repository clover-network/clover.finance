import { SplashSection } from "./SplashSection";
import {
  CenteredTitle,
  Col,
  Row,
  SpacerVertical,
} from "./CloverLibrary";
import React from "react";
import styled, { css, useTheme } from "styled-components";
import { AnchorLinkIds } from "./AnchorLinkIds";
import { breakpoint } from "./mixins/breakpoint";
import { t } from './i18n/intl';

export const SectionDecentralized = () => {
  const theme = useTheme();
  return (
    <SplashSection
      backgroundColor={theme.colors.TITLE}
    >
      <DivContainer id={AnchorLinkIds.DECENTRALIZED}>
        <DecentralizedContent>
          <DecentralizedLeft>
            <img src='images/sku-graphic.png' alt='' />
          </DecentralizedLeft>
          <Col>
            <DecentralizedTitle>{t('DecentralizedTitle')}</DecentralizedTitle>
            <Col>
              <Subtitle>{t('EVMCompatible')}</Subtitle>
              <TextSpan>
                {t('EVMCompatibleHint')}
              </TextSpan>
              <SpacerVertical height={"24px"} />
            </Col>
            <Col>
              <Subtitle>{t('FeeSharing')}</Subtitle>
              <TextSpan>
                {t('FeeSharingHint')}
              </TextSpan>
              <SpacerVertical height={"24px"} />
            </Col>
            <Col>
              <Subtitle>{t('CrossChainCompatibility')}</Subtitle>
              <TextSpan>
                {t('CrossChainCompatibilityHint')}
              </TextSpan>
            </Col>
          </Col>
        </DecentralizedContent>
      </DivContainer>
    </SplashSection>
  );
};

const DecentralizedTitle = styled(CenteredTitle)`
  font-weight: bold;
  font-size: 50px;
  line-height: 61px;
  text-transform: uppercase;
  color: #FF5995;
  margin-left: 32px;
  margin-bottom: 38px;
  ${breakpoint(css`
    padding-left: 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
  `)};
`

const DecentralizedContent = styled(Row)`
  ${breakpoint(css`
    margin-top: 0;
  `)};
`

const DecentralizedLeft = styled.div`
  align-items: center;
  display: flex;
  width: 40%;
  justify-content: flex-start;
  img {
    width: 100%;
  }
  
  ${breakpoint(css`
    display: none;
  `)};
`

const Subtitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 16px;
  color: ${(props) => props.theme.colors.BACKGROUND};
  ${breakpoint(css`
    font-size: 15px;
    line-height: 24px;
  `)};
`

const TextSpan = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #303030;
  ${breakpoint(css`
    font-size: 15px;
    line-height: 24px;
  `)};
`

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 128px 0;

  ${breakpoint(css`
    margin-left: 0;
    padding: 48px 0 0;
  `)}
`;
