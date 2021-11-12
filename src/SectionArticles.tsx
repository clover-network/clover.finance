import { SplashSection } from "./SplashSection";
import React, { createContext, useContext } from "react";
import styled, { css, useTheme } from "styled-components";
import { AnchorLinkIds } from "./AnchorLinkIds";
import { BodyText, Col, Row, Subtitle, Title } from "./CloverLibrary";
import { SplashModeContext, SplashPageMode } from "./SplashModeContext";
import { breakpoint } from "./mixins/breakpoint";

const CardContext = createContext({
  title: "Title",
  body: "Body",
  linkName: "Link",
  linkHref: "www.google.com",
  stripe: "Stripe",
  backgroundColor: "#FFFFFF",
  stripeColor: "#FFFFFF",
  color: "#000000",
});

const SakuraCopyOne = {
  title: "Feeconomics",
  body: "Sakura will make use of the original Clover feeconomics design, allowing users to enjoy gasless transactions —meaning a user will not be required to have SKU in their wallet to transact on the Sakura network and can use any other token. Sakura is also working on a Dynamic Fee Schedule, to be proposed through on-chain governance, where the gas-fee will be proportional to the amount of usage a wallet has on the Sakura network.",
  linkName: "Go To Outline Article",
  linkHref: "/TODO",
  stripe: "Feeconomics",
};
const SakuraCopyTwo = {
  title: "SKU Bridge",
  body: "The Sakura SKU token is cross-chain compatible as our unique 2-way peg bridge technology allows the EVM based Sakura address and Kusama based Clover address to be bounded together, allowing the utilization of all both chains together. SKU will have a unique native bridge for both SKU<->ETH and SKU<->BSC",
  linkName: "Go To Outline Article",
  linkHref: "/TODO",
  stripe: "SKU BRIDGE",
};
const CloverCopyOne = {
  title: "Polkadot Parachain Auction",
  body: "Read about things you should know about the Polkadot Parachain Auction.",
  linkName: "Go To Outline Article",
  linkHref:
    "https://docs.clover.finance/parachain-auction/about-polkadot-parachain-auction",
  stripe: "Dot Auction",
};
const CloverCopyTwo = {
  title: "Parachain Crowdloan Offering",
  body: "Stay Tuned for our upcoming Polkadot Parachain Crowdloan Reward information. ",
  linkName: "Join Crowdloan Now",
  linkHref: "https://lucky.clover.finance/",
  stripe: "Support CLV",
};

export const SectionArticles = () => {
  const theme = useTheme();
  const isSakura = useContext(SplashModeContext) === SplashPageMode.SAKURA;

  return (
    <SplashSection>
      <DivContainer id={AnchorLinkIds.ARTICLES}>
        <Row>
          <CardContext.Provider
            value={{
              color: theme.colors.BACKGROUND,
              backgroundColor: theme.colors.ACCENT,
              stripeColor: isSakura
                ? theme.colors.BACKGROUND
                : theme.colors.TITLE,
              ...(isSakura ? SakuraCopyOne : CloverCopyOne),
            }}
          >
            <Card />
          </CardContext.Provider>

          <CardContext.Provider
            value={{
              color: isSakura ? theme.colors.BACKGROUND : theme.colors.TITLE,
              backgroundColor: theme.colors.SECONDARY,
              stripeColor: isSakura
                ? theme.colors.BACKGROUND
                : theme.colors.TITLE,
              ...(isSakura ? SakuraCopyTwo : CloverCopyTwo),
            }}
          >
            <Card />
          </CardContext.Provider>
        </Row>
      </DivContainer>
    </SplashSection>
  );
};

const Card = () => {
  const context = useContext(CardContext);
  return (
    <CardContainer
      backgroundColor={context.backgroundColor}
      color={context.color}
    >
      <CardCopy>
        <CardSubtitle>{context.title}</CardSubtitle>
        <CardBodyText>{context.body}</CardBodyText>
        <CardLink as={"a"} href={context.linkHref}>
          {context.linkName}
        </CardLink>
      </CardCopy>
      <CardTextStripe color={context.stripeColor}>
        {context.stripe}
      </CardTextStripe>
    </CardContainer>
  );
};

const DivContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
`;

const CardSubtitle = styled(Subtitle)`
  color: unset;

  ${breakpoint(css`
    // font-size: ${(props) => props.theme.fontSizesMobile.SUBTITLE};
    font-size: 18px;
  `)};
`;

const CardBodyText = styled(BodyText)`
  color: unset;
`;

const CardLink = styled(BodyText)`
  color: unset;
  margin-top: auto;
  font-weight: bold;
`;

const CardTextStripe = styled(Title)<{ color: string }>`
  text-transform: uppercase;
  writing-mode: vertical-rl;
  opacity: 50%;
  pointer-events: none;
  color: ${(props) => props.color};
  margin-left: 24px;
  text-align: start;
`;

const CardCopy = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled(Col)<{ backgroundColor: string; color: string }>`
  background: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.theme.misc.DEFAULT_BORDER_RADIUS};

  display: flex;
  color: ${(props) => props.color};
  padding: 48px 48px;
  min-height: 500px;

  ${breakpoint(css`
    padding: 48px 24px;
    margin-bottom: 16px;
    min-height: unset;
  `)};
`;
