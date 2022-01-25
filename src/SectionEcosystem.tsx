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

export const SectionEcosystem = () => {
  const theme = useTheme();
  return (
    <SplashSection
      backgroundColor={theme.colors.NEUTRAL}
    >
      <DivContainer id={AnchorLinkIds.ECOSYSTEM}>
        <EcosystemTitleWrapper>
          <EcosystemTitle>{t('SAKURA')}</EcosystemTitle>
          <CenteredTitle>{t('metaverseInfrastructure')}</CenteredTitle>
        </EcosystemTitleWrapper>
        <EcosystemContent>
          <img src="images/sku-infra.svg" alt="" />
          <EcosystemRight>
            <EcosystemRightRow>
              <img src="images/sku-infra-icon1.svg" alt="" />
              <span>{t("smartContractGovernance")}</span>
            </EcosystemRightRow>
            <EcosystemRightRow>
              <img src="images/sku-infra-icon2.svg" alt="" />
              <span>{t("communicationProtocol")}</span>
            </EcosystemRightRow>
            <EcosystemRightRow>
              <img src="images/sku-infra-icon3.svg" alt="" />
              <span>{t("dAOPlatformSupport")}</span>
            </EcosystemRightRow>
            <EcosystemRightRow>
              <img src="images/sku-infra-icon4.svg" alt="" />
              <span>{t("SNS")}</span>
            </EcosystemRightRow>
            <EcosystemRightRow>
              <img src="images/sku-infra-icon5.svg" alt="" />
              <span>{t("gAMFISupport")}</span>
            </EcosystemRightRow>
            <EcosystemRightRow>
              <img src="images/sku-infra-icon6.svg" alt="" />
              <span>{t("dAppToolsSDK")}</span>
            </EcosystemRightRow>
            <EcosystemRightRow>
              <img src="images/sku-infra-icon7.svg" alt="" />
              <span>{t("universalCrosschainSupport")}</span>
            </EcosystemRightRow>
          </EcosystemRight>
        </EcosystemContent>
        
      </DivContainer>
    </SplashSection>
  );
};

const EcosystemTitleWrapper = styled.div`
  padding-left: 128px;
  display: flex;
  
  ${breakpoint(css`
    padding-left: 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
  `)};
`

const EcosystemTitle = styled(CenteredTitle)`
  color: ${(props) => props.theme.colors.PINK_BG};
  margin-right: 10px;
`

const EcosystemContent = styled(Row)`
  margin-left: 128px;
  margin-top: 60px;
  margin-bottom: 100px;
  justify-content: space-between;
  ${breakpoint(css`
    margin-top: 0;
  `)};
`

const EcosystemRight = styled.div`
  display: flex;
  flex-direction: column;
`

const EcosystemRightRow = styled.div`
  display: flex;
  margin-bottom: 30px;

  img {
    width: 18px;
    margin-right: 36px;
  }

  span {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: ${(props) => props.theme.colors.BACKGROUND};
  }
`

const EcosystemBottom = styled.div`
  display: none;

  ${breakpoint(css`
    display: flex;
    position: relative;
    left: -24px;
    
    img {
      width: 110%;
    }
  `)};
`

const DivButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    margin-left: 10px;
  }

  margin-left: -10px;
  margin-bottom: 38px;

  ${breakpoint(css`
    flex-direction: column;
    margin: 0;
  `)};
`;

const WhiteButton = styled.div`
  flex: 1;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
  padding: 14px 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  height: fit-content;
  cursor: pointer;
  max-width: 167px;
  color: ${(props) => props.theme.colors.BACKGROUND};
  ${breakpoint(css`
    max-width: unset;
    margin: 0 0 24px!important;
  `)};
`

const Subtitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 16px;
  color: ${(props) => props.theme.colors.BACKGROUND};
  ${breakpoint(css`
    font-size: 15px;
    line-height: 24px;
  `)};
`

const TextSpan = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: ${(props) => props.theme.colors.BACKGROUND};
  ${breakpoint(css`
    font-size: 15px;
    line-height: 24px;
  `)};
`

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 96px 128px 0 0;
  width: 100vw;
  margin-left: -128px;

  ${breakpoint(css`
    width: unset;
    margin-left: 0;
    padding: 48px 0 0;
  `)}
`;
