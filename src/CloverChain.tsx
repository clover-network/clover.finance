import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Spacer, SpacerSection, Title } from "./CloverLibrary";
import { SplashModeContext, SplashPageMode } from "./SplashModeContext";
import { PriceStats } from "./PriceStats";
import { Navbar } from "./navbar";
import { SectionEcosystem } from "./SectionEcosystem";
import { SectionTokenDetails } from "./SectionTokenDetails";
import { SectionComponentOverview } from "./SectionComponentOverview";
import { DappInteractionProtocol } from "./DappInteractionProtocol";
import { PlatformInfrastructure } from "./PlatformInfrastructure";
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
import { t } from './i18n/intl';

export const CloverChain: React.FC = () => {
  // const [assetPrice, setAssetPrice] = useState({});
  // useEffect(() => {
  //   axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=CLV,BTC,ETH,DOT,SOL,FTM,KSM&tsyms=usd')
  //     .then((response) => {
  //       const tempObj:any = {};
  //       const data = response.data.RAW;
  //       for (const key in data) {
  //         const priceData = data[key].USD;
  //         tempObj[key] = {curPrice: priceData.PRICE, changepct24hour: priceData.CHANGEPCT24HOUR}
  //       }
  //       setAssetPrice(tempObj);
  //     })
  // }, [])
  return (
    <div>
      <LandingContainer>
        <Hero imageUrl=''>
          <Spacer />
          <ContentWrapper>
            <TextWrapper>
              <h3>{t('substrateBased')}</h3>
              <span>{t('substrateBasedHint')}</span>
            </TextWrapper>
            <ImgWrapper>
              <ImgMainLogo src='images/clover_chain_logo.svg' />
            </ImgWrapper>
          </ContentWrapper>
          <CaptionContainer>
            <Tagline>{t('learnMore')}</Tagline>
            <a href={`#${AnchorLinkIds.ECOSYSTEM}`}>
              <ImgGoDown src="images/down-arrow.svg" />
            </a>
          </CaptionContainer>
          <FloatingLeft>
            <VerticalSocials />
          </FloatingLeft>
        </Hero>
      </LandingContainer>
      <SpacerSection />
      <SectionComponentOverview />
      <DappInteractionProtocol />
      <PlatformInfrastructure />
      <SectionEcosystem />
      {/*<SpacerSection />*/}
      {/*<SectionDNA />*/}
      {/*<SpacerSection />*/}
      {/*<SectionBlog />*/}
      <SectionFooter />
    </div>
  );
};

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 128px;
`;


const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h3 {
    font-weight: bold;
    font-size: 50px;
    line-height: 60px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.BACKGROUND};
    margin-bottom: 24px;
  }
  
  span {
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
  }
`;

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
    margin-left: 128px;
  }
  ${breakpoint(css`
    display: none;
  `)};
`;

const Tagline = styled(Title)`
  color: ${(props) => props.theme.colors.BACKGROUND};
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
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
  background: ${(props) => props.theme.colors.YELLOW_BG};
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
