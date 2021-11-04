import { SplashSection } from "./SplashSection";
import {
  BodyText,
  ButtonFixedWidth,
  CenteredTitle,
  Col,
  Row,
  SecondaryButtonFixedWidth,
  SmallerSubtitle,
  SpacerSectionDesktopOnly,
  SpacerVertical,
  SpanAccent,
} from "./CloverLibrary";
import React from "react";
import styled, { css, useTheme } from "styled-components";
import { AnchorLinkIds } from "./AnchorLinkIds";
import { breakpoint } from "./mixins/breakpoint";

export const SectionEcosystem = () => {
  const theme = useTheme();
  return (
    <SplashSection
      backgroundColor={theme.colors.ECOSYSTEM_BACKGROUND}
      topLeftBackground={"images/bg-eco-top.svg"}
      bottomRightBackground={"images/bg-eco-bottom.svg"}
    >
      <DivContainer id={AnchorLinkIds.ECOSYSTEM}>
        <CenteredTitle>
          Build On <SpanAccent>Clover</SpanAccent> Ecosystem
        </CenteredTitle>
        <SpacerVertical height={"48px"} />
        <Row>
          <Col>
            <ImgCode src={"images/code-snippet.jpg"} />
          </Col>
          <Col>
            <SmallerSubtitle>For builders</SmallerSubtitle>
            <BodyText>
              Build your dApps on Clover using tools you already use including
              Remix, MetaMask and Truffle. Clover supports EVM and WASM, which
              require minimal changes on existing smart contracts and make it
              easy for migration. Enjoy already-integrated built-in such as
              Chainlink, HardHat, Ganach.
            </BodyText>
            <SpacerVertical height={"24px"} />
            <DivButtonRow>
              <ButtonFixedWidth
                onClick={() =>
                  window.open(
                    "https://docs.clover.finance/quick-start/testnet",
                    "_blank"
                  )
                }
              >
                Read Docs
              </ButtonFixedWidth>
              <ButtonFixedWidth
                onClick={() =>
                  window.open("https://github.com/clover-network", "_blank")
                }
              >
                Get Github Repo
              </ButtonFixedWidth>
              <ButtonFixedWidth
                onClick={() =>
                  window.open("https://docs.clover.finance/", "_blank")
                }
              >
                View Testnet
              </ButtonFixedWidth>
            </DivButtonRow>
          </Col>
        </Row>
        <SpacerSectionDesktopOnly height={"100px"} />
        <Row>
          <Col>
            <SmallerSubtitle>
              <SpanAccent>Integrate Clover Wallet</SpanAccent>
            </SmallerSubtitle>
            <BodyText>
              Are you looking for a better wallet for your dapps? You are in the
              right place, reach out to us and find out how to integrate the
              Clover wallet.
            </BodyText>
            <SpacerVertical height={"24px"} />
            <SecondaryButtonFixedWidth
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLScl4kp4hD4Dv9JnPIdKEkTxL4ctVZQJtVoezeVqQVi676iKvw/viewform",
                  "_blank"
                )
              }
            >
              Integrate
            </SecondaryButtonFixedWidth>
          </Col>

          <Col>
            <SmallerSubtitle>
              <SpanAccent>Build with Clover</SpanAccent>
            </SmallerSubtitle>
            <BodyText>
              We welcome all kinds of partners. Contact us if you are interested
              in building on Clover or have an integration proposal for us.
            </BodyText>
            <SpacerVertical height={"24px"} />
            <SecondaryButtonFixedWidth
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSfQevVEw_hL44vvbcMkYB8kKdzTFAbtD1pR-QVraaA7h4jpKg/viewform",
                  "_blank"
                )
              }
            >
              Build
            </SecondaryButtonFixedWidth>
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

  button {
    margin-left: 10px;
  }

  margin-left: -10px;
`;

const ImgCode = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 96px 0;

  ${breakpoint(css`
    padding: 48px 0;
  `)}
`;
