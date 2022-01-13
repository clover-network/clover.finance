import React from "react";
import styled, { css } from "styled-components";
import { Spacer, SpacerSection, Title } from "./CloverLibrary";
import { SectionFooter } from "./SectionFooter";
import { HorizontalGutters } from "./mixins/HorizontalGutters";
import { breakpoint } from "./mixins/breakpoint";
import { Socials } from "./Socials";
import { t } from './i18n/intl';
import { IndustryLeaders } from './IndustryLeaders';
import { SectionBlog } from './SectionBlog';
import { AlsoPartnerWith } from './AlsoPartnerWith';

export const AboutUs: React.FC = () => {
  return (
    <div>
      <LandingContainer>
        <Hero imageUrl=''>
          <ContentWrapper>
            <img src='images/iphone.png' alt='' />
            <SpecialSpacer />
            <TextWrapper>
              <h4>{t('cloverDNA')}</h4>
              <h3>{t('cloverDNAHint')}</h3>
              <span>{t('cloverDNADesc')}</span>
              <GetTheClover>
                <span>{t('asSeenIn')}</span>
                <div>
                  <img src='images/forbes.svg' alt='' />
                  <img src='images/yahoo.png' alt='' />
                  <img src='images/coin_desk.svg' alt='' />
                  <img src='images/cointelegraph.png' alt='' />
                </div>
              </GetTheClover>
            </TextWrapper>
            <ImgWrapper>
            </ImgWrapper>
          </ContentWrapper>
          <FloatingLeft>
            <VerticalSocials />
          </FloatingLeft>
        </Hero>
      </LandingContainer>
      <IndustryLeaders />
      <SectionBlog />
      <AlsoPartnerWith />
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
  position: relative;
  padding: 128px 0;
  
  & > img {
    width: 576px;
    position: absolute;
    top: 180px;
  }
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
    margin-bottom: 8px;
    color: ${(props) => props.theme.colors.BACKGROUND};
  }
  
  h3 {
    font-weight: bold;
    font-size: 52px;
    line-height: 60px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.EMAIL_US};
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

  }
  
  div {
    display: flex;
    align-items: center;
    margin-top: 20px;
    
    img {
      height: 32px;
      margin-right: 32px;
    }
  }
`

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
  background: ${(props) => props.theme.colors.PINK_BG};
  ${breakpoint(css`
    //height: unset;
    height: unset;
    //min-height: unset;
    min-height: 120vw;
  `)}
`;

// extra space after certain sections on mobile
const SpecialSpacer = styled(SpacerSection)`
 width: 576px;
`;
