import React from "react";
import styled, { css } from "styled-components";
import { FullSizeOverlay, SpanAccent } from "../CloverLibrary";
import { HorizontalGutters } from "../mixins/HorizontalGutters";
import { Paragraph, Subtitle } from "./NFTLibrary";
import { breakpoint } from "../mixins/breakpoint";

export const Section1 = () => {
  return (
    <Container>
      <HorizontalContainer>
        <Img src={"images/nft/CloverSquid1.png"} />
        <TextSection>
          <SectionSubtitle>
            Every <SpanAccent>Lucky</SpanAccent> Gachapon ticket you purchase
            represents a redeemable ticket for a future reward that will
            possibly include 6 LUCKYs + 6 cDOTs + 120 CLVs
          </SectionSubtitle>
          <Paragraph>What do you mean by possibly? I paid!</Paragraph>
          <Paragraph>And what are the additional tokens? cDOT? CLV?</Paragraph>
          <SectionSubtitle>
            The cost of each <SpanAccent>Lucky</SpanAccent> Gachapon ticket - 6
            DOTs, will be used toward supporting clover to secure its polkadot
            parachain slot fully. Your gachapon is fully refundable if clover
            finance did not secure a slot
          </SectionSubtitle>
          <Paragraph>
            Genesis LUCKY will only be generated if Clover Finance receives
            enough DOTs from this campaign or from the Polkadot Parachain
            auction crowdloan which enables it to secure a Polkadot Parachain
            slot.
          </Paragraph>
        </TextSection>
      </HorizontalContainer>

      <HorizontalContainer>
        <TextSection>
          <SectionSubtitle>
            Your <SpanAccent>Lucky</SpanAccent> is technically free
          </SectionSubtitle>
          <Paragraph>
            The DOTs we raised from the Lucky Gachapon sale will be used to
            support Clover Finance on paying its 24 months leasing fee if it
            becomes a Polkadot Parachain. Once the 24 months Polkadot Parachain
            leasing period is over, the DOTs you paid for your Lucky Gachapon
            will be fully returned.
          </Paragraph>
          <SectionSubtitle>
            What’s so amazing about the <SpanAccent>Lucky</SpanAccent> Gachapon
            ticket
          </SectionSubtitle>
          <Paragraph>
            When Clover Finance becomes a Polkadot Parachain, you receive 6
            LUCKYs, the 90 CLVs and 6 cDOTs per every Lucky Gachapon ticket
            purchased.
          </Paragraph>
        </TextSection>
        <Img src={"images/nft/Wheel.png"} />
      </HorizontalContainer>

      <Overlay>
        <BackgroundImg src={"images/nft/backgrounds/bkg2.png"} />
      </Overlay>
    </Container>
  );
};

const Overlay = styled(FullSizeOverlay)`
  overflow: hidden;
`;

const SectionSubtitle = styled(Subtitle)`
  margin-top: 64px;

  ${breakpoint(css`
    margin-top: 32px;
  `)};
`;

const BackgroundImg = styled.img`
  position: absolute;
  top: -200px;
  z-index: -10;

  ${breakpoint(css`
    width: 100%;
  `)};
`;

const TextSection = styled.div`
  margin: 64px 0;

  ${breakpoint(css`
    margin: 0;
  `)};
`;

const Img = styled.img`
  max-width: 466px;
  margin: 24px 24px;
  object-fit: contain;

  ${breakpoint(css`
    margin-top: 32px;
    width: 100%;

    order: -1; //force to top in mobile
  `)};
`;
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${HorizontalGutters};
`;

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  //flex-wrap: wrap;
  ${breakpoint(css`
    flex-direction: column;
    align-items: center;
  `)};
`;
