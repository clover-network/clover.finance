import React from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../mixins/breakpoint";
import { t } from '../i18n/intl';
import { Footer } from './components/Footer';
import { GrayButton, NormalButton } from '../components/Btn';
import CLVIsBacked from './components/CLVBacked';

export const About: React.FC = () => {
  return (
    <div>
      <LandingContainer>
        <UniversalInfrastructure>
          <ContentWrapper>
            <TextWrapper>
              <div>
                {t('universalInfrastructure')}
                <img src='images/clv_icon1.svg' alt='' />
              </div>
              <span>{t('universalInfrastructureHint')}</span>
            </TextWrapper>
            <ImgWrapper>
              {/*<img src='images/video1.svg' alt='' />*/}
            </ImgWrapper>
          </ContentWrapper>
          <ContentBottom>
            <ContentBottomLeft>
              <h3>{t('technology')}</h3>
              <span>{t('technologyHint')}</span>
            </ContentBottomLeft>
            <ContentBottomRight>
              <div>
                <h3>{t('saveTime')}</h3>
                <span>{t('saveTimeHint')}</span>
              </div>
              <div>
                <span>{t('viewDocumentation')}</span>
                <NormalButton width='290px'>{t('learnMore')}</NormalButton>
              </div>
            </ContentBottomRight>
          </ContentBottom>
        </UniversalInfrastructure>
        <Progress>
          <ProgressTitle>
            <h3>{t('progress')}</h3>
            <span>{t('roadmap')}</span>
          </ProgressTitle>
          <ProgressContent>
            <ProgressItem>
              <ProgressQ1Left>
                <div>
                  <img src='images/progress_icon1.svg' alt='' />
                  <span>{t('enableCLVEVM')}</span>
                </div>
                <div>
                  <img src='images/progress_icon1.svg' alt='' />
                  <span>{t('enableCLVEVMGovernance')}</span>
                </div>
                <div>
                  <img src='images/progress_icon1.svg' alt='' />
                  <span>{t('CLVBlockchainExplorer')}</span>
                </div>
                <div>
                  <img src='images/progress_icon1.svg' alt='' />
                  <span>{t('nativeParachainAssetSupport')}</span>
                </div>
                <div>
                  <img src='images/progress_icon1.svg' alt='' />
                  <span>{t('validatorProgram')}</span>
                </div>
                <img src='images/progress_icon2.svg' alt='' />
              </ProgressQ1Left>
              <ProgressQ1Right>
                <div>(Q1)<sup>2022</sup></div>
                <span>{t('Q1Hint')}</span>
              </ProgressQ1Right>
            </ProgressItem>
            <ProgressItem>
              <ProgressQ2Left>
                <div>
                  <img src='images/progress_icon1_white.svg' alt='' />
                  <span>{t('enableCLVEVM')}</span>
                </div>
                <div>
                  <img src='images/progress_icon1_white.svg' alt='' />
                  <span>{t('enableCLVEVMGovernance')}</span>
                </div>
                <div>
                  <img src='images/progress_icon1_white.svg' alt='' />
                  <span>{t('CLVBlockchainExplorer')}</span>
                </div>
                <div>
                  <img src='images/progress_icon1_white.svg' alt='' />
                  <span>{t('nativeParachainAssetSupport')}</span>
                </div>
                <div>
                  <img src='images/progress_icon1_white.svg' alt='' />
                  <span>{t('validatorProgram')}</span>
                </div>
                <img src='images/progress_icon2.svg' alt='' />
              </ProgressQ2Left>
              <ProgressQ2Right>
                <div>(Q2)<sup>2022</sup></div>
              </ProgressQ2Right>
            </ProgressItem>
            <ProgressItem>
              <ProgressQ3Left>
                <div><sup>2022</sup>(Q3)</div>
              </ProgressQ3Left>
              <ProgressQ3Right>
                <div>
                  <img src='images/progress_icon1_white.svg' alt='' />
                  <div>
                    <span>{t('powerfulAndStable')}</span>
                    <span>{t('EcosystemInfrastructure')}</span>
                    <span>{t('upgradeToCrossChainExplorer')}</span>
                  </div>
                </div>
              </ProgressQ3Right>
            </ProgressItem>
            <ProgressItem>
              <ProgressQ4Left>
                <div><sup>2022</sup>(Q4)</div>
              </ProgressQ4Left>
              <ProgressQ4Right>
                <div>
                  <span>{t('supportNative')}</span>
                </div>
                <div>
                  <span>{t('supportDapps')}</span>
                </div>
                <div>
                  <span>{t('omniverseDAO')}</span>
                </div>
              </ProgressQ4Right>
            </ProgressItem>
          </ProgressContent>
        </Progress>
        <NewsUpdate>
          <NewsUpdateTitle>
            <h3>{t('news')}</h3>
            <span>&nbsp;&nbsp;{t('update')}</span>
          </NewsUpdateTitle>
          <NewsUpdateContent>
            <NewsUpdateItem>
              <NewsUpdateItemLeft>
                <span>Today</span>
                <span>Release 1.01v</span>
              </NewsUpdateItemLeft>
              <NewsUpdateItemRight>
                <div>{t('preparations')}</div>
                <span>{t('Q1Hint')}</span>
              </NewsUpdateItemRight>
            </NewsUpdateItem>
            <NewsUpdateItem>
              <NewsUpdateItemLeft>
                <span>19 May 2022</span>
              </NewsUpdateItemLeft>
              <NewsUpdateItemRight>
                <div>{t('EcosystemInfrastructure')}</div>
                <span>{t('Q1Hint')}</span>
              </NewsUpdateItemRight>
            </NewsUpdateItem>
            <NewsUpdateItem>
              <NewsUpdateItemLeft>
                <span>15 Apr 2022</span>
              </NewsUpdateItemLeft>
              <NewsUpdateItemRight>
                <div>{t('nativeParachain')}</div>
                <span>{t('Q1Hint')}</span>
                <GrayButton margin="80px 0 0 0">{t('seeMore')}</GrayButton>
              </NewsUpdateItemRight>
            </NewsUpdateItem>
          </NewsUpdateContent>
        </NewsUpdate>
        <GlobalPresense>
          <GlobalPresenseTitle>
            <h3>{t('global')}</h3>
            <span>&nbsp;&nbsp;{t('presense')}</span>
          </GlobalPresenseTitle>
          <GlobalPresenseContent>
            <div>
              <div>{t('globalPresenseHint')}</div>
            </div>
          </GlobalPresenseContent>
        </GlobalPresense>
        <CLVIsBacked />
      </LandingContainer>
      <Footer />
    </div>
  );
};

const UniversalInfrastructure = styled.div`
  width: 100%;
  padding-top: 120px;
`
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 100px;

  ${breakpoint(css`
    width: unset;
    flex-direction: column;
    margin-left: 0;
  `)};
`;

const TextWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 16px;

  & > div:first-child {
    font-weight: 590;
    font-size: 72px;
    line-height: 76px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    img {
      margin-left: 10px;
    }
  }
  
  span {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    margin: 40px 0 30px;
  }

  ${breakpoint(css`
    span {
      font-size: 15px;
      line-height: 24px;
    }
  `)};
`;

const ContentBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
`;

const ContentBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  background: #141414;
  border-radius: 32px;
  padding: 48px;
  margin-right: 16px;
  height: 248px;
  
  h3 {
    font-weight: 590;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    margin: 0 0 16px;
  }
  
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    opacity: 0.6;
  }
`;

const ContentBottomRight = styled.div`
  display: flex;
  align-items: center;
  background: #141414;
  border-radius: 32px;
  padding: 48px;
  height: 248px;

  h3 {
    font-weight: 590;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    margin: 0 0 16px;
  }

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    opacity: 0.6;
  }
  
  & > div:last-child {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 24px;
    span {
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      text-align: center;
      letter-spacing: 0.006em;
      color: #FFFFFF;
      margin-bottom: 32px;
      display: inline-block;
    }
  }
`

const ImgWrapper = styled.div`
  width: 50%;

  img {
    width: 680px;
  }
`;

const Progress = styled.div`
  margin-top: 180px;
  width: 100%;
`

const ProgressTitle = styled.div`
  width: 50%;
  font-weight: 590;
  font-size: 64px;
  line-height: 80px;
  letter-spacing: 0.008em;
  h3 {
    color: #FFFFFF;
  }
  span {
    color: #BDFDE2;
  }
`

const ProgressContent = styled.div`
  width: 100%;
  margin-top: 64px;
`

const ProgressItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const ProgressQ1Left = styled.div`
  background: linear-gradient(28.19deg, #BDFDE2 -14.72%, #9BDAF6 116.35%);
  border-radius: 32px;
  padding: 48px;
  position: relative;
  margin-right: 16px;
  width: 50%;

  & > img {
    position: absolute;
    right: -20px;
    top: 50%;
    width: 40px;
    margin-top: -20px;
  }
  div {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    &:last-child {
      margin: 0;
    }
    
    img {
      width: 32px;
      margin-right: 16px;
    }
    
    span {
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.006em;
      color: #0C0B0B;
    }
  }
`

const ProgressQ1Right = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  
  div {
    font-weight: 590;
    font-size: 48px;
    line-height: 52px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    margin-bottom: 16px;

    sup {
      opacity: 0.4;
      font-size: 24px;
      margin: 0 10px;
    }
  }
  
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    opacity: 0.6;
  }
`

const ProgressQ2Left = styled(ProgressQ1Left)`
  background: transparent;
  margin-top: 16px;
  
  span {
    color: #ffffff!important;
  }
`

const ProgressQ2Right = styled(ProgressQ1Right)``

const ProgressQ3Left = styled(ProgressQ1Right)`
  align-items: flex-end;
`

const ProgressQ3Right = styled(ProgressQ2Left)`
  & > div {
    align-items: flex-start;
    & > div {
      display: block;
      span {
        display: inline-block;
        margin-bottom: 24px;
        &:last-child {
          margin: 0;
        }
      }
    }
  }
`

const ProgressQ4Left = styled(ProgressQ3Left)``

const ProgressQ4Right = styled(ProgressQ2Left)`
  div {
    padding-left: 48px;
  }
`

const NewsUpdate = styled.div`
  width: 100%;
  margin-top: 180px;
`

const NewsUpdateTitle = styled(ProgressTitle)`
  display: flex;
  span {
    color: #9BDAF6;
  }
`

const NewsUpdateContent = styled.div`
  margin-top: 64px;
  &>div:last-child {
    padding-bottom: 0;
  }
`

const NewsUpdateItem = styled.div`
  display: flex;
  padding: 40px 0;
`

const NewsUpdateItemLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 50%;
  margin-right: 16px;
  
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.026em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
    
    &:nth-child(2) {
      color: #FFFFFF;
      margin-right: 56px;
    }
  }
`

const NewsUpdateItemRight = styled.div`
  width: 50%;
  
  div:first-child {
    font-weight: 590;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    margin-bottom: 16px;
  }
  
  span {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    opacity: 0.6;
  }
`

const GlobalPresense = styled.div`
  width: 100%;
  margin-top: 180px;
`

const GlobalPresenseTitle = styled(ProgressTitle)`
  display: flex;
`

const GlobalPresenseContent = styled.div`
  & > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    div {
      width: 50%;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.006em;
      color: #FFFFFF;
      opacity: 0.6;
    }
  }
`

// this is a full height container that contains the Navbar, the Hero, and the bitcoin price
// when a user first visits the site this portion should take up 100% height
const LandingContainer = styled.div`
  //height: calc(100vh);
  display: flex;
  flex-direction: column;
  background: #0C0B0B;
  padding: 0 64px 64px;
  ${breakpoint(css`
    height: unset;
    min-height: 120vw;
    padding: 48px 0 0;
  `)}
`;
