import React from "react";
import styled, { css } from "styled-components";
import { Spacer, SpacerSection, Title } from "./CloverLibrary";
import { SectionFooter } from "./SectionFooter";
import { HorizontalGutters } from "./mixins/HorizontalGutters";
import { breakpoint } from "./mixins/breakpoint";
import { Socials } from "./Socials";
import { AnchorLinkIds } from "./AnchorLinkIds";
import { t } from './i18n/intl';
import { CrossChainCompatibility } from './CrossChainCompatibility';
import { WhyCloverWallet } from './WhyCloverWallet';
import { YourPassport } from './YourPassport';
import { BuildForUsers } from './BuildForUsers';

export const Wallet: React.FC = () => {
  return (
    <div>
      <LandingContainer>
        <Hero imageUrl='images/wallet_bg.png'>
          <Spacer />
          <ContentWrapper>
            <TextWrapper>
              <h4>{t('aFoundationalLayer')}</h4>
              <h3>{t('forCrossChain')}</h3>
              <span>{t('forCrossChainHint')}</span>
              <GetTheClover>
                <span>{t('getTheClover')}</span>
                <div>
                  <img src='images/get_google.svg' alt='' />
                  <img src='images/get_app.svg' alt='' />
                </div>
              </GetTheClover>
            </TextWrapper>
            <ImgWrapper>
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
      <CrossChainCompatibility />
      <WhyCloverWallet />
      <YourPassport />
      <BuildForUsers />
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
  justify-content: center;

  h4 {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.BACKGROUND};
  }
  
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

const GetTheClover = styled.div`
  margin-top: 60px;

  span {
    line-height: 140%;
    font-weight: bold;
    font-size: 13px;
    color: ${(props) => props.theme.colors.BACKGROUND};
    text-transform: uppercase;

  }
  
  div {
    display: flex;
    align-items: center;
    margin-top: 16px;
    
    img {
      height: 50px;
      margin-right: 24px;
    }
  }
`

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
  background-position: 80%;
  position: relative;
  ${HorizontalGutters};
`;

// this is a full height container that contains the Navbar, the Hero, and the bitcoin price
// when a user first visits the site this portion should take up 100% height
const LandingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.EMAIL_US};
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
