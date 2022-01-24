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
    >
      <DivContainer id={AnchorLinkIds.ECOSYSTEM}>
        <EcosystemTitle>
          {t('buildOnClover')}
        </EcosystemTitle>
        <EcosystemContent>
          <EcosystemLeft>
            <img src='images/code-snippet.png' alt='' />
          </EcosystemLeft>
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
                      "https://docs.clover.finance/clover-chain/for-developers/using-testnet",
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
                      "https://docs.clover.finance/clover-multi-chain-wallet/developer-guide",
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
          <EcosystemBottom>
            <img src='images/code-snippet.png' alt='' />
          </EcosystemBottom>
        </EcosystemContent>
      </DivContainer>
    </SplashSection>
  );
};

const EcosystemTitle = styled(CenteredTitle)`
  padding-left: 128px;
  ${breakpoint(css`
    padding-left: 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
  `)};
`

const EcosystemContent = styled(Row)`
  margin-top: 78px;
  ${breakpoint(css`
    margin-top: 0;
  `)};
`

const EcosystemLeft = styled.div`
  align-items: flex-end;
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
