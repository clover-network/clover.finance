import React from "react";
import styled, { css } from "styled-components";
import { FullSizeOverlay, SpanAccent } from "../CloverLibrary";
import { HorizontalGuttersSuperDeep } from "../mixins/HorizontalGutters";
import { breakpoint } from "../mixins/breakpoint";
import { NFT_TYPOGRAPHY } from "./NFT_styles";

export const Section2 = () => {
  return (
    <Container>
      {/*<Content>*/}
      <GreenBox>
        <InnerGreenBox>
          <InnerMostGreenBox>
            <BoxTitle>24 months is a lengthy period though</BoxTitle>

            <BoxParagraph>
              While purchasers will be receiving their 15 CLVs rewards, we
              understand that 24 months is a lengthy period to have no access to
              the original DOT holdings - 6 DOTs if you purchased just one Lucky
              Gachapon ticket.
            </BoxParagraph>

            <br />

            <BoxParagraph>
              Therefore, Clover Finance created the bond token cDOT (Crowdloan
              DOT) that will be issued at a 1:1 ratio for purchasers to receive
              1 cDOT per DOT after Clover goes live as a Parachain. cDOT will
              allow purchasers to access underlying DOT liquidity and have the
              utility of the bond token within Clover’s multi-chain DeFi Hub.
              Purchasers can either cDOT on the open market or redeem their
              original contributed DOT from the Parachain module after the 24
              month lease period is over.
            </BoxParagraph>
          </InnerMostGreenBox>
        </InnerGreenBox>

        <FullSizeOverlay>
          <AnchorBehindSquid>
            <BehindSquid src={"/images/nft/Clo2.png"} />
          </AnchorBehindSquid>

          <AnchorFrontSquid>
            <FrontSquid src={"/images/nft/Clo1.png"} />
          </AnchorFrontSquid>

          <AnchorLeftSquid>
            <LeftSquid src={"/images/nft/Clo1.png"} />
          </AnchorLeftSquid>

          <AnchorRightSquid>
            <RightSquid src={"/images/nft/Clo2.png"} />
          </AnchorRightSquid>
        </FullSizeOverlay>
      </GreenBox>

      <CaptionBox>
        <Caption>A thoughtful design eh,</Caption>
        <Caption>
          <SpanAccent>So why not?</SpanAccent>
        </Caption>
      </CaptionBox>
      {/*</Content>*/}

      {/*<Overlay>*/}
      {/*  <BackgroundImg src={"images/nft/backgrounds/bkg2.png"} />*/}
      {/*</Overlay>*/}
    </Container>
  );
};

const Caption = styled.h3`
  ${NFT_TYPOGRAPHY.TEXT_CAPTION_A_THOUGHTFUL_DESIGN};
  text-transform: uppercase;
  ${(props) => props.theme.colors.TITLE};
`;

const AnchorBehindSquid = styled.div`
  position: absolute;

  right: -50px;
  top: 100px;
`;
const BehindSquid = styled.img`
  position: absolute;
  width: 300px;
  transform-origin: center;
  transform: translate(-50%, -50%) rotate(49.6deg);
  object-fit: contain;
  z-index: -10;

  ${breakpoint(css`
    display: none;
  `)};
`;

const FrontSquid = styled.img`
  position: absolute;
  width: 300px;
  transform-origin: center;
  transform: translate(-50%, -50%) scaleX(-1);
  object-fit: contain;
  z-index: 10;

  ${breakpoint(css`
    display: none;
  `)};
`;

const LeftSquid = styled.img`
  position: absolute;
  height: 120px;
  transform-origin: center;
  transform: translate(-50%, -50%) scaleX(-1);
  object-fit: contain;
  z-index: 10;

  display: none;

  ${breakpoint(css`
    display: initial;
  `)};
`;

const RightSquid = styled(LeftSquid)`
  transform: translate(-50%, -50%);
`;

const AnchorFrontSquid = styled.div`
  position: absolute;

  bottom: 150px;
  right: -140px;
`;

const AnchorLeftSquid = styled.div`
  position: absolute;

  bottom: -20px;
  right: 30px;
`;

const AnchorRightSquid = styled.div`
  position: absolute;

  bottom: -20px;
  right: 130px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${HorizontalGuttersSuperDeep};

  overflow: hidden;

  ${breakpoint(css`
    justify-content: center;
  `)};
`;

export const BoxTitle = styled.h2`
  ${NFT_TYPOGRAPHY.TEXT_TITLE_24MONTH_IS_LENGTH};
  text-transform: uppercase;
  //margin-bottom: 16px;

  color: ${(props) => props.theme.colors.NEUTRAL};
`;

export const BoxParagraph = styled.p`
  ${NFT_TYPOGRAPHY.TEXT_PARAGRAPH_24MONTH_IS_LENGTH};
  //margin-bottom: 16px;

  color: ${(props) => props.theme.colors.NEUTRAL};
`;

export const GreenBox = styled.div`
  max-width: min(486px, 100%);
  padding: 22px;

  border: 5px solid ${(props) => props.theme.colors.ACCENT};
  box-sizing: border-box;
  border-radius: 63px;

  position: relative;

  margin-top: 64px;

  // Section 2 controls margins on top and bottom since we have these squid overlays that are clipped if they overflow
  margin-bottom: 239px;

  ${breakpoint(css`
    padding: 10px;
    border-radius: 32px;
    border: 4px solid ${(props) => props.theme.colors.ACCENT};
    margin-bottom: 133px;
    max-width: unset;
  `)};
`;

export const InnerGreenBox = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.ACCENT};
  box-sizing: border-box;
  border-radius: 48px;

  ${breakpoint(css`
    padding: 12px;
    border-radius: 32px;
  `)};
`;

export const InnerMostGreenBox = styled.div`
  background-color: ${(props) => props.theme.colors.ACCENT};

  border: 3px solid #ffffff;
  border-radius: 48px;

  padding: 32px 25px;

  ${breakpoint(css`
    padding: 16px;
    border-radius: 32px;
  `)};
`;

export const CaptionBox = styled(GreenBox)`
  padding: unset;
  margin: 0;
  border: none;

  ${breakpoint(css`
    display: none;
  `)};
`;
