import { SplashSection } from "./SplashSection";
import {
  CenteredTitle,
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

const EcosystemContent = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
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
`;

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 98px 0;

  ${breakpoint(css`
    margin-left: 0;
    padding: 48px 0 0;
  `)}
`;
