import { SplashSection } from "./SplashSection";
import {
  BodyText,
  FullSizeOverlay,
  Grid,
  GridItem,
  LeftAlignTitle,
  SpanAccent,
  Subtitle,
} from "./CloverLibrary";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { SplashModeContext, SplashPageMode } from "./SplashModeContext";
import { AnchorLinkIds } from "./AnchorLinkIds";
import { breakpoint } from "./mixins/breakpoint";

export const SectionTokenDetails = () => {
  const mode = useContext(SplashModeContext);

  const tokenName = mode === SplashPageMode.SAKURA ? "SKU" : "CLV";

  const background =
    mode === SplashPageMode.SAKURA
      ? "images/CLV-token-Sakura.svg"
      : "images/bg-clvtoken.svg";

  return (
    <SplashSection>
      <DivContainer id={AnchorLinkIds.TOKEN}>
        <LeftAlignTitle>
          <SpanAccent>{tokenName} Token</SpanAccent>
        </LeftAlignTitle>

        <DivRelative>
          <Grid>
            {(mode === SplashPageMode.SAKURA ? SakuraItems : CloverItems).map(
              (itemMeta, i) => {
                return <Item {...itemMeta} key={i} />;
              }
            )}
          </Grid>
          <FullSizeOverlay>
            <ImgLogo src={background} />
          </FullSizeOverlay>
        </DivRelative>
      </DivContainer>
    </SplashSection>
  );
};

const DivRelative = styled.div`
  position: relative;
`;

const ImgLogo = styled.img`
  position: absolute;
  object-fit: contain;
  height: 100%;
  right: 0;
  transform: scale(1.3);

  ${breakpoint(css`
    right: unset;
    width: 100%; //centers the image
    transform: unset;
  `)};
`;

const CloverItems = [
  {
    icon: "images/icon-optin.svg",
    title: "Opt-in Fees",
    body: "Pay gas fee in CLV, or have the option to pay with any network token. ",
  },
  {
    icon: "images/icon-governance.svg",
    title: "Governance",
    body: "Lock CLV to elect council members and guide the developement through on-chain governance.",
  },
  {
    icon: "images/icon-valid.svg",
    title: "Validation",
    body: "Stake CLV to validate the network with your validator infrastructure.",
  },
  {
    icon: "images/icon-treasury.svg",
    title: "Treasury",
    body: "Get your projects funded from the treasury.",
  },
  {
    icon: "images/icon nomination.svg",
    title: "Nomination",
    body: "Stake CLV to nominate your own node validator using a single-click deployment.",
  },
  {
    icon: "images/icon-deploy.svg",
    title: "Deployment",
    body: "Use CLV to deploy your smart contracts and dApps on Clover.",
  },
];
const SakuraItems = [
  {
    icon: "images/pink-icon-optin.svg",
    title: "Opt-in Fees",
    body: "Pay gas fee in CLV, or have the option to pay with any network token. ",
  },
  {
    icon: "images/pink-icon-governance.svg",
    title: "Governance",
    body: "Lock CLV to elect council members and guide the developement through on-chain governance.",
  },
  {
    icon: "images/pink-icon-valid.svg",
    title: "Validation",
    body: "Stake CLV to validate the network with your validator infrastructure.",
  },
  {
    icon: "images/pink-icon-treasury.svg",
    title: "Treasury",
    body: "Get your projects funded from the treasury.",
  },
  {
    icon: "images/pink-icon-nomination.svg",
    title: "Nomination",
    body: "Stake CLV to nominate your own node validator using a single-click deployment.",
  },
  {
    icon: "images/pink-icon-deploy.svg",
    title: "Deployment",
    body: "Use CLV to deploy your smart contracts and dApps on Clover.",
  },
];

const Item: React.FC<{
  icon: string;
  title: string;
  body: string;
}> = ({ icon, title, body }) => {
  return (
    <DivItemContainer>
      <ImgItem src={icon} />
      <div>
        <Subtitle>{title}</Subtitle>
        <BodyText>{body}</BodyText>
      </div>
    </DivItemContainer>
  );
};

const ImgItem = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 16px;
`;

const DivItemContainer = styled(GridItem)`
  display: flex;
`;

const DivContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  //padding-top: 64px;
  //padding-bottom: 64px;

  ${breakpoint(css`
    padding: 0;
  `)};
`;
