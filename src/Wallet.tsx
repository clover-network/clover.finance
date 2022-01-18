import React from "react";
import styled, { css } from "styled-components";
import { Spacer, Title } from "./CloverLibrary";
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
  const openUrl = (url: string) => {
    window.open(url, '_blank');
  }
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
                  <img onClick={() => openUrl('https://play.google.com/store/apps/details?id=com.clover.finance.wallet&hl=en_US&gl=US')} src='images/get_google.svg' alt='' />
                  <img onClick={() => openUrl('https://apps.apple.com/app/clover-wallet/id1570072858')} src='images/get_app.svg' alt='' />
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
  ${breakpoint(css`
    flex-direction: column;
    margin-left: 0;
  `)};
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

  ${breakpoint(css`
    h4 {
      font-size: 18px;
      line-height: 24px;
    }
    h3 {
      font-size: 32px;
      line-height: 40px;
    }
    span {
      font-size: 15px;
      line-height: 24px;
    }
  `)};
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
      cursor: pointer;
    }
  }
  ${breakpoint(css`
    margin-top: 32px;
    div {
      margin-top: 8px;
      img {
        height: 46px;
      }
    }
  `)};
`

const CaptionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${breakpoint(css`
    flex: unset;
    width: 100vw;
    height: 483px;
    background-image: url("images/mobile_wallet_bg.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 100% 100%;
    justify-content: flex-end;
    padding: 30px 0;
  `)};
`;

const ImgGoDown = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;

  ${breakpoint(css`
    //display: none;
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
  ${breakpoint(css`
    background: none;
  `)}
`;

// this is a full height container that contains the Navbar, the Hero, and the bitcoin price
// when a user first visits the site this portion should take up 100% height
const LandingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.EMAIL_US};
  ${breakpoint(css`
    height: unset;
    min-height: 120vw;
    padding: 48px 0 0;
  `)}
`;
