import React from "react";
import styled, { css } from "styled-components";
import {
  FullSizeOverlay,
  Spacer,
  SpacerSection,
  SpanAccent,
  WrapperDesktopOnly,
  WrapperMobileOnly,
} from "../CloverLibrary";
import { HorizontalGutters } from "../mixins/HorizontalGutters";
import { breakpoint } from "../mixins/breakpoint";
import { Paragraph, Title } from "./NFTLibrary";
import { NFT_TYPOGRAPHY } from "./NFT_styles";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { SectionFooter } from "../SectionFooter";

export const SplashPageNFT: React.FC = () => {
  return (
    <TopLevelContainer>
      <AboveTheFold>
        <Navbar>
          <Spacer />
          <Logo src={"images/Clover Logo.svg"} />
          <WalletDropdownContainer>
            <WalletDropdown as={"div"}>
              <div>Wallet</div>
              <DropDownArrow src={"/images/dropdown.svg"} />
            </WalletDropdown>
          </WalletDropdownContainer>
        </Navbar>
        <Hero>
          <TextContent>
            <Title>
              The <SpanAccent>LUCKY</SpanAccent> GaChapon
            </Title>
            <PoweredByClover>powered by Clover Finance</PoweredByClover>

            <WrapperDesktopOnly>
              <BodyCopy />
            </WrapperDesktopOnly>
          </TextContent>

          <ImgContainer>
            <FullSizeOverlay>
              <Img src={"/images/nft/LuckyGachLucky.png"} />
            </FullSizeOverlay>
          </ImgContainer>

          <WrapperMobileOnly>
            <BodyCopy />
          </WrapperMobileOnly>
        </Hero>
      </AboveTheFold>
      <Section1 />
      <Section2 />
      <Section3 />
      <SpacerSection height={"64px"} mobileHeight={"32px"} />
      <Section4 />
      <SpacerSection height={"128px"} mobileHeight={"64px"} />
      <Section5 />
      <SpacerSection height={"128px"} mobileHeight={"64px"} />
      <Footer />
    </TopLevelContainer>
  );
};

const BodyCopy = () => {
  return (
    <>
      <Paragraph>
        LUCKY is a collection of NFT, non-fungible digital arts that are
        uniquely living on the Binance Smart Chain. LUCKY is a randomized yet
        limited NFT collection in 26 alphabets, designed with Clover essentials,
        available in a mixture of six different colors.
      </Paragraph>

      <br />

      <Paragraph>
        The combination of 26 alphabets you have determines how lucky you are
        and your reward - the numbers of $CLV (Clover Finance token).
      </Paragraph>
    </>
  );
};

const TopLevelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const WalletDropdownContainer = styled.div`
  display: flex;
  justify-content: right;
  flex: 1;
  padding-right: 40px;

  ${breakpoint(css`
    min-width: unset;
    width: 62px;
    font-size: 10px;
    padding-right: 24px;
  `)};
`;

const WalletDropdown = styled.div`
  min-width: 209px;

  background-color: ${(props) => props.theme.colors.ACCENT};
  color: ${(props) => props.theme.colors.BACKGROUND};
  font-size: ${(props) => props.theme.fontSizes.BODY};
  padding: 13px;
  line-height: 24px;
  border-radius: 8px;
  font-weight: 700;
  justify-content: center;
  display: flex;
  align-items: center;

  //TOOD:
  ${breakpoint(css`
    min-width: unset;
    width: 62px;
    font-size: 10px;
    //padding: 5px;
    padding: 0;
  `)};
`;

const Navbar = styled.div`
  height: 98px;

  background-color: ${(props) => props.theme.colors.BACKGROUND};

  display: flex;
  align-items: center;

  ${breakpoint(css`
    //height: unset;
    height: 39px;
    margin-bottom: 20px;
  `)};
`;

const Logo = styled.img`
  height: 39px;
  object-fit: contain;

  flex: 1;
  ${breakpoint(css`
    //height: unset;
    height: 14px;
  `)};
`;

const DropDownArrow = styled.img`
  height: 12px;
  //width: 19px;
  object-fit: contain;
  margin-left: 16px;

  ${breakpoint(css`
    //height: unset;
    height: 10px;
    //width: 6px;
    margin-left: 4px;
  `)};
`;

const Hero = styled.div`
  flex: 1;
  //background-color: red;
  display: flex;
  flex-direction: row;
  //align-items: center;
  //justify-content: center;
  ${HorizontalGutters};
  flex-wrap: wrap;

  ${breakpoint(css`
    flex-direction: column;
    align-items: center;
  `)};
`;

const AboveTheFold = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  ${breakpoint(css`
    //height: unset;
    height: unset;
  `)};

  //background-color: blanchedalmond;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 373px;
  margin-right: 32px;

  ${breakpoint(css`
    margin-right: unset;
  `)};
`;

const ImgContainer = styled.div`
  flex: 1;
  //background-color: #61dafb;
  position: relative;
  ${breakpoint(css`
    height: 300px;
    width: 100%;
    margin-top: 16px;
    margin-bottom: 24px;
    flex: unset;
  `)};
`;

const Img = styled.img`
  //width: 100%;
  //height: 50%;
  //width: 30px;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PoweredByClover = styled.h2`
  text-transform: uppercase;
  margin-bottom: 16px;
  color: ${(props) => props.theme.colors.ACCENT};
  ${NFT_TYPOGRAPHY.POWERED_BY_CLOVER};

  ${breakpoint(css`
    text-align: center;
  `)};
`;

const Footer = styled(SectionFooter)``;
