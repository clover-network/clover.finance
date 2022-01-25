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
              <h3>{t('fullStack')}</h3>
              <span>{t('networkSuite')}</span>
            </TextWrapper>
          </ContentWrapper>
          <ContentWrapper1>
            <TextWrapper1>
              <h4>{t('decentralizedIdentity')}</h4>
              <span>{t('nativelyOffers')}</span>
              <h4>{t('endToEnd')}</h4>
              <span>{t('uniqueEncryption')}</span>
              <h4>{t('decentralizedCustodian')}</h4>
              <span>{t('expandsTheWeb3')}</span>
            </TextWrapper1>
            <img src="images/sku-img1.svg" alt=""/>
          </ContentWrapper1>
          <Spacer />
          <FloatingLeft>
            <VerticalSocials />
          </FloatingLeft>
        </Hero>
      </LandingContainer>
      <SectionDecentralized />
      <SectionGovernance />
      <SectionComponentOverview sakuraLines={SakuraLines} />
      <SectionEcosystem />
      <SectionFooter />
    </div>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  justify-content: flex-start;
  align-items: flex-start;
  ${breakpoint(css`
    flex-direction: column;
    margin-left: 0;
  `)};
`;


const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  
  h3 {
    font-weight: bold;
    font-size: 50px;
    line-height: 60px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.BACKGROUND};
  }
  
  span {
    font-weight: bold;
    font-size: 50px;
    line-height: 60px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.NEUTRAL};
    margin-bottom: 24px;
  }

  ${breakpoint(css`
    h3 {
      font-size: 32px;
      line-height: 40px;
    }
    span {
      font-size: 32px;
      line-height: 40px;
    }
  `)};
`;

const ContentWrapper1 = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-top: 38px;
  margin-left: 200px;
`

const TextWrapper1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h4 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    color: ${(props) => props.theme.colors.BACKGROUND};
    margin-bottom: 16px;
  }

  span {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #303030;
    margin-bottom: 24px;
  }
`

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
  align-items: flex-start;
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

