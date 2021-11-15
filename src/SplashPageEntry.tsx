import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Spacer, SpacerSection, Title } from "./CloverLibrary";
import { SplashModeContext, SplashPageMode } from "./SplashModeContext";
import { PriceStats } from "./PriceStats";
import { Navbar } from "./navbar";
import { SectionEcosystem } from "./SectionEcosystem";
import { SectionTokenDetails } from "./SectionTokenDetails";
import { SectionComponentOverview } from "./SectionComponentOverview";
import { SectionPitch } from "./SectionPitch";
import { SectionDNA } from "./SectionDNA";
import { SectionBlog } from "./SectionBlog";
import { SectionFooter } from "./SectionFooter";
import { SectionArticles } from "./SectionArticles";
import { HorizontalGutters } from "./mixins/HorizontalGutters";
import { breakpoint } from "./mixins/breakpoint";
import { Socials } from "./Socials";
import { AnchorLinkIds } from "./AnchorLinkIds";
import axios from "axios";
import Header from './Header';

export const SplashPageEntry: React.FC = () => {
  const [assetPrice, setAssetPrice] = useState({});
  const mode = useContext(SplashModeContext);
  const logo =
    mode === SplashPageMode.SAKURA
      ? "images/sakura-logo.png"
      : "images/clover-logo-white.png";
  const background =
    mode === SplashPageMode.SAKURA
      ? "images/sakura-top-img.svg"
      : "images/index-BG.svg";
  useEffect(() => {
    axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=CLV,BTC,ETH,DOT,SOL,FTM,KSM&tsyms=usd')
    .then((response) => {
      const tempObj:any = {};
      const data = response.data.RAW;
      for (const key in data) {
        const priceData = data[key].USD;
        tempObj[key] = {curPrice: priceData.PRICE, changepct24hour: priceData.CHANGEPCT24HOUR}
      }
      setAssetPrice(tempObj);
    })
  }, [])
  return (
    <div>
      <LandingContainer>
        <Header />
        <Navbar />

        <Hero imageUrl={background}>
          <Spacer />
          <ImgWrapper>
            <ImgMainLogo src={logo} />
          </ImgWrapper>
          <CaptionContainer>
            {mode === SplashPageMode.SAKURA && (
              <Tagline>Built for cross-chain DeFi on Kusama.</Tagline>
            )}
            {mode === SplashPageMode.CLOVER && (
              <Tagline>
                A foundational layer for cross-chain compatibility
              </Tagline>
            )}

            <a href={`#${AnchorLinkIds.ARTICLES}`}>
              <ImgGoDown
                src={
                  mode === SplashPageMode.SAKURA
                    ? "images/arrow-down-pink.svg"
                    : "images/down-arrow.svg"
                }
              />
            </a>
          </CaptionContainer>
          <FloatingLeft>
            <VerticalSocials />
          </FloatingLeft>
        </Hero>
        {mode === SplashPageMode.SAKURA && (
          <PriceStats assetData = {assetPrice}/>
        )}
      </LandingContainer>
      {
        mode === SplashPageMode.CLOVER && (
          <>
            <SectionPitch />
          </>
        )
      }
      <SpacerSection />
      <SectionArticles />
      <SpacerSection />

      {mode === SplashPageMode.SAKURA ? (
        <>
          <SectionPitch />
          <SpacerSection />
        </>
      ) : (
        <>
          <SectionComponentOverview />
          <SpecialSpacer />
        </>
      )}
      {mode === SplashPageMode.SAKURA && (
        <>
          <SectionComponentOverview />
          <SpecialSpacer />
        </>
      )}

      <SectionTokenDetails />
      <SpacerSection />

      {mode === SplashPageMode.CLOVER && (
        <>
          <SectionEcosystem />
          <SpacerSection />
        </>
      )}

      <SectionDNA />
      <SpacerSection />

      <SectionBlog />
      {/*<SpacerSection />*/}

      <SectionFooter />
    </div>
  );
};

const CaptionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImgGoDown = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;

  ${breakpoint(css`
    display: none;
  `)};
`;

const FloatingLeft = styled.div`
  position: absolute;
  left: 0;
`;

const VerticalSocials = styled(Socials)`
  flex-direction: column;
  margin-left: ${(props) => props.theme.margins.MINI_GUTTER_HORIZONTAL};

  img {
    margin-left: 0;
  }
  ${breakpoint(css`
    display: none;
  `)};
`;

const Tagline = styled(Title)`
  font-size: calc(0.6 * ${(props) => props.theme.fontSizes.TITLE});
  ${breakpoint(css`
    font-size: ${(props) => props.theme.fontSizes.SMALLER_SUBTITLE};
  `)}
`;

const ImgMainLogo = styled.img`
  width: 30vh;
  object-fit: contain;

  ${breakpoint(css`
    width: 100px;
    height: 100px;
    transform: scale(1.5);
  `)}
  transform: scale(1.5);
`;

const ImgWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// hero expand to take up rest of space
const Hero = styled.div<{ imageUrl: string }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("${(props) => props.imageUrl}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  ${HorizontalGutters};
`;

// this is a full height container that contains the Navbar, the Hero, and the bitcoin price
// when a user first visits the site this portion should take up 100% height
const LandingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  ${breakpoint(css`
    //height: unset;
    height: unset;
    //min-height: unset;
    min-height: 120vw;
  `)}
`;

// extra space after certain sections on mobile
const SpecialSpacer = styled(SpacerSection)`
  ${breakpoint(css`
    height: 96px;
  `)}
`;
