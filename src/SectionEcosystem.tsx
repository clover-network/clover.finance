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
      backgroundColor={theme.colors.ACCENT}
      bottomLeftBackground='images/code-snippet.png'
    >
      <DivContainer id={AnchorLinkIds.ECOSYSTEM}>
        <CenteredTitle>
          {t('buildOnClover')}
        </CenteredTitle>
        <SpacerVertical height={"48px"} />
        <Row>
          <Col></Col>
          <Col>
            <Col>
              <Subtitle>{t('forBuilders')}</Subtitle>
              <TextSpan>
                {t('forBuildersHint')}
              </TextSpan>
              <SpacerVertical height={"24px"} />
              <DivButtonRow>
                <WhiteButton
                  onClick={() =>
                    window.open("https://docs.clover.finance/", "_blank")
                  }
                >
                  {t('readDocs')}
                </WhiteButton>
                <WhiteButton
                  onClick={() =>
                    window.open("https://github.com/clover-network", "_blank")
                  }
                >
                  {t('getGithubRepo')}
                </WhiteButton>
                <WhiteButton
                  onClick={() =>
                    window.open(
                      "https://docs.clover.finance/quick-start/testnet",
                      "_blank"
                    )
                  }
                >
                  {t('viewTestnet')}
                </WhiteButton>
              </DivButtonRow>
            </Col>
            <Col>
              <Subtitle>{t('integrateCloverWallet')}</Subtitle>
              <TextSpan>
                {t('integrateCloverWalletHint')}
              </TextSpan>
              <SpacerVertical height={"24px"} />
              <DivButtonRow>
                <WhiteButton
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLScl4kp4hD4Dv9JnPIdKEkTxL4ctVZQJtVoezeVqQVi676iKvw/viewform",
                      "_blank"
                    )
                  }
                >
                  {t('integrate')}
                </WhiteButton>
              </DivButtonRow>
            </Col>
            <Col>
              <Subtitle>{t('buildWithClover')}</Subtitle>
              <TextSpan>
                {t('buildWithCloverHint')}
              </TextSpan>
              <SpacerVertical height={"24px"} />
              <DivButtonRow>
                <WhiteButton
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSfQevVEw_hL44vvbcMkYB8kKdzTFAbtD1pR-QVraaA7h4jpKg/viewform",
                      "_blank"
                    )
                  }
                >
                  {t('build')}
                </WhiteButton>
              </DivButtonRow>
            </Col>
          </Col>
        </Row>
      </DivContainer>
    </SplashSection>
  );
};

const DivButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    margin-left: 10px;
  }

  margin-left: -10px;
  margin-bottom: 38px;
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
`

const Subtitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 16px;
  color: ${(props) => props.theme.colors.BACKGROUND};
`

const TextSpan = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: ${(props) => props.theme.colors.BACKGROUND};
`

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 96px 0;

  ${breakpoint(css`
    padding: 48px 0;
  `)}
`;
