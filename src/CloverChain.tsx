import React from "react";
import styled, { css } from "styled-components";
import { Spacer, SpacerSection, Title } from "./CloverLibrary";
import { SectionEcosystem } from "./SectionEcosystem";
import { SectionComponentOverview } from "./SectionComponentOverview";
import { DappInteractionProtocol } from "./DappInteractionProtocol";
import { PlatformInfrastructure } from "./PlatformInfrastructure";
import { SectionFooter } from "./SectionFooter";
import { HorizontalGutters } from "./mixins/HorizontalGutters";
import { breakpoint } from "./mixins/breakpoint";
import { Socials } from "./Socials";
import { AnchorLinkIds } from "./AnchorLinkIds";
import { t } from './i18n/intl';
import { SectionDecentralized } from './SectionDecentralized';
import { SectionGovernance } from './SectionGovernance';

export const CloverChain: React.FC = () => {
  const SakuraLines = [
    t('sakuraLines1'),
  ];
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
            <a href={`#${AnchorLinkIds.COMPONENTS}`}>
              <ImgGoDown src="images/down-arrow.svg" />
            </a>
          </CaptionContainer>
          <FloatingLeft>
            <VerticalSocials />
          </FloatingLeft>
        </Hero>
      </LandingContainer>
      <SectionDecentralized />
      <SectionGovernance />
      <SectionComponentOverview sakuraLines={SakuraLines} />
      <DappInteractionProtocol />
      <PlatformInfrastructure />
      <SectionEcosystem />
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

  ${breakpoint(css`
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
`;

const FloatingLeft = styled.div`
  position: absolute;
  left: 0;
  ${breakpoint(css`
    display: none;
  `)};
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
  width: 50vh;
  object-fit: contain;

  ${breakpoint(css`
    width: 100%;
  `)}
`;

const ImgWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${breakpoint(css`
    margin: 32px 0 24px;
  `)}
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
  background: ${(props) => props.theme.colors.PINK_BG};
  ${breakpoint(css`
    height: unset;
    min-height: 120vw;
    padding: 48px 0;
  `)}
`;

