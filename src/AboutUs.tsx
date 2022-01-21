import React from "react";
import styled, { css } from "styled-components";
import { SpacerSection } from "./CloverLibrary";
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
            <img src='images/iphone.png' alt='' />
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
  position: relative;
  padding: 128px 0;
  width: 90%;
  
  & > img {
    //height: 100%;
    width: 40%;
    position: absolute;
    top: 180px;
  }
  ${breakpoint(css`
    flex-direction: column;
    margin-left: 0;
    padding: 0;
    & > img {
      width: 340px;
      position: relative;
      bottom: -100px;
      margin-top: -150px;
    }
  `)};
`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60%;

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
    color: ${(props) => props.theme.colors.ACCENT};
    margin-bottom: 24px;
  }
  
  span {
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
  }
  ${breakpoint(css`
    max-width: unset;

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

  ${breakpoint(css`
    margin-top: 32px;

    div {
      img {
        height: 12px;
      }
    }
  `)};
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

// hero expand to take up rest of space
const Hero = styled.div<{ imageUrl: string }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
    height: unset;
    min-height: 120vw;
    padding: 48px 0;
  `)}
`;

// extra space after certain sections on mobile
const SpecialSpacer = styled(SpacerSection)`
  width: 40%;
  ${breakpoint(css`
    display: none;
  `)}
`;
