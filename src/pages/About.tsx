import React, {useEffect} from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../mixins/breakpoint";
import { t } from '../i18n/intl';
import { Footer } from './components/Footer';
import { GrayButton, NormalButton } from '../components/Btn';
import CLVIsBacked from './components/CLVBacked';

export const About: React.FC = () => {
  // useEffect(() => {
  //   const iframe = document.getElementById("myIframe");
  //   var y = (iframe.contentWindow || iframe.contentDocument);
  //   if (y.document)y=y.document;
  //   y.body.style.backgroundColor="#000000";
  // }, [])
  return (
    <div>
      <Background/>
      <LandingContainer>
        <UniversalInfrastructure>
          <video autoPlay loop muted src='videos/particles.mp4'></video>
          <div>
            <ContentWrapper>
              <TextWrapper>
                <div>
                  {t('universalInfrastructure')}
                  <img src='images/clv_icon1.svg' alt='' />
                </div>
                <span>{t('universalInfrastructureHint')}</span>
              </TextWrapper>
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
                  <NormalButton
                    width='290px'
                    onClick={() => {
                      window.open('https://docs.clv.org/use-clv-chain/beginners-guide', "_blank")
                    }}
                  >{t('viewDocumentation')}</NormalButton>
                </div>
              </ContentBottomRight>
            </ContentBottom>
          </div>
        </UniversalInfrastructure>
        <Content>
          <div>
            <Progress>
              <ProgressTitle>
                <h3>{t('progress')}</h3>
                <span>{t('roadmap')}</span>
              </ProgressTitle>
              <ProgressContent>
                <ProgressItem>
                  <ProgressQ0Left>
                    <div><sup>2021</sup>(Q3&4)</div>
                  </ProgressQ0Left>
                  <ProgressQ0Right>
                    <div>
                      <img src='images/progress_icon1_white.svg' alt='' />
                      <span>{t('CLVEVMBridge')}</span>
                    </div>
                    <div>
                      <img src='images/progress_icon1_white.svg' alt='' />
                      <span>{t('walletMultiChain')}</span>
                    </div>
                    <div>
                      <img src='images/progress_icon1_white.svg' alt='' />
                      <span>{t('walletAuthorizationManagement')}</span>
                    </div>
                    <div>
                      <img src='images/progress_icon1_white.svg' alt='' />
                      <span>{t('walletSocialAccountLogin')}</span>
                    </div>
                    <div>
                      <img src='images/progress_icon1_white.svg' alt='' />
                      <span>{t('CLVDAppInteractiveProtocol')}</span>
                    </div>
                    <div>
                      <img src='images/progress_icon1_white.svg' alt='' />
                      <span>{t('CLVCrossChainExplorer')}</span>
                    </div>
                    <div>
                      <img src='images/progress_icon1_white.svg' alt='' />
                      <span>{t('CLVParachainLaunch')}</span>
                    </div>
                    <div>
                      <img src='images/progress_icon1_white.svg' alt='' />
                      <span>{t('walletMultiChainNFTSupport')}</span>
                    </div>
                  </ProgressQ0Right>
                </ProgressItem>
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
                      <span>{t('validatorProgram')}</span>
                    </div>
                    <div style={{margin: '0'}}>
                      <img src='images/progress_icon1.svg' alt='' />
                      <span>{t('walletAssetSwap')}</span>
                    </div>
                    <img src='images/progress_icon2.svg' alt='' />
                  </ProgressQ1Left>
                  <ProgressQ1Right>
                    <div>(Q1)<sup>2022</sup></div>
                  </ProgressQ1Right>
                </ProgressItem>
                <ProgressItem>
                  <ProgressQ2Left>
                    <div>
                      <img src='images/progress_icon1_white.svg' alt='' />
                      <span>{t('enableUniversalCrossChain')}</span>
                    </div>
                    <div>
                      <img src='images/progress_icon1_white.svg' alt='' />
                      <span>{t('upgradableSmartContract')}</span>
                    </div>
                    <div>
                      <img src='images/progress_icon1_white.svg' alt='' />
                      <span>{t('upgradeCLVEVMBridge')}</span>
                    </div>
                    <div>
                      <img src='images/progress_icon1_white.svg' alt='' />
                      <span>{t('CLVWalletAssetBridge')}</span>
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
                      <span>{t('powerfulAndStable')}</span>
                    </div>
                    <div>
                      <img src='images/progress_icon1_white.svg' alt='' />
                      <span>{t('nativeParachainAssetSupport')}</span>
                    </div>
                    <div>
                      <img src='images/progress_icon1_white.svg' alt='' />
                      <span>{t('CLVWalletAssetStaking')}</span>
                    </div>
                    <div>
                      <img src='images/progress_icon1_white.svg' alt='' />
                      <span>{t('CLVWalletSupport')}</span>
                    </div>
                  </ProgressQ3Right>
                </ProgressItem>
                <ProgressItem>
                  <ProgressQ4Left>
                    <div><sup>2022</sup>(Q4)</div>
                  </ProgressQ4Left>
                  <ProgressQ4Right>
                    <div>
                      <img src='images/progress_icon1_white.svg' alt='' />
                      <span>{t('supportDApps')}</span>
                    </div>
                    <div>
                      <img src='images/progress_icon1_white.svg' alt='' />
                      <span>{t('XCMMultiAssetSupport')}</span>
                    </div>
                    <div>
                      <img src='images/progress_icon1_white.svg' alt='' />
                      <span>{t('CLVAssetsSwap')}</span>
                    </div>
                  </ProgressQ4Right>
                </ProgressItem>
                <ProgressItem>
                  <ProgressQ2Left>
                    <div>
                      <span>Comming Soon</span>
                    </div>
                  </ProgressQ2Left>
                  <ProgressQ2Right>
                    <div>(Q1)<sup>2023</sup></div>
                  </ProgressQ2Right>
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
                    <div style={{fontSize: '48px',lineHeight: '60px'}}>{t('preparations')}</div>
                    <span style={{fontSize: '20px',lineHeight: '32px'}}>{t('Q1Hint')}</span>
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
                <GlobalPresenseContentTop>
                  <div>
                    <h3>{t('globalPresense')}</h3>
                    <span>{t('globalPresenseHint')}</span>
                  </div>
                </GlobalPresenseContentTop>
                <GlobalPresenseContentBottom>
                  <iframe
                    id='myIframe'
                    src='https://telemetry.polkadot.io/#map/0xe923f1773f4197a862cb4fc4a562f93585b26131dadbc943d524a82bbeecd2eb'
                    frameBorder='0'
                    scrolling='no'
                  ></iframe>
                </GlobalPresenseContentBottom>
              </GlobalPresenseContent>
            </GlobalPresense>
            <CLVIsBacked />
          </div>
        </Content>
      </LandingContainer>
      <Footer />
    </div>
  );
};

const Content = styled.div`
  width: 100%;
  background: #000000;
  
  & > div {
    max-width: 1440px;
    min-width: 1440px;
    padding: 0 64px 64px;
    margin: 0 auto;
  }
`

const UniversalInfrastructure = styled.div`
  width: 100%;
  padding-top: 96px;
  position: relative;
  video {
    position: absolute;
    z-index: -1;
    top: 0;
    width: 100%;
  }
  & > div {
    padding: 0 64px;
    max-width: 1440px;
    min-width: 1440px;
    margin: 0 auto;
  }
`

const Background = styled.div`
  background: #000000;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
`

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 240px;

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
    justify-content: flex-end;
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
  line-height: 68px;
  letter-spacing: 0.008em;
  h3 {
    color: #FFFFFF;
    font-size: 64px;
    line-height: 68px;
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
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 16px;
  align-items: center;
`

const ProgressQ1Left = styled.div`
  background: linear-gradient(28.19deg, #BDFDE2 -14.72%, #9BDAF6 116.35%);
  border-radius: 32px;
  padding: 48px;
  position: relative;
  margin-right: 16px;

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
      margin: 0!important;
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
  background: #141414;
  margin-top: 16px;
  
  span {
    color: #ffffff!important;
  }
`

const ProgressQ2Right = styled(ProgressQ1Right)``

const ProgressQ0Left = styled(ProgressQ1Right)`
  align-items: flex-end;
`

const ProgressQ0Right = styled(ProgressQ2Left)`
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
const ProgressQ3Left = styled(ProgressQ0Left)``

const ProgressQ3Right = styled(ProgressQ0Right)``

const ProgressQ4Left = styled(ProgressQ3Left)``

const ProgressQ4Right = styled(ProgressQ2Left)``

const NewsUpdate = styled.div`
  width: 100%;
  margin-top: 100px;
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
  border-top: 1px solid #333232;
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
      font-size: 24px;
      line-height: 38px;
      text-transform: unset;
    }
  }
`

const NewsUpdateItemRight = styled.div`
  width: 50%;
  
  div:first-child {
    font-weight: 590;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    margin-bottom: 16px;
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

const GlobalPresense = styled.div`
  width: 100%;
  margin-top: 180px;
  margin-bottom: -180px;
`

const GlobalPresenseTitle = styled(ProgressTitle)`
  display: flex;
`

const GlobalPresenseContent = styled.div``

const GlobalPresenseContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  div {
    width: 50%;
    h3 {
      font-weight: 590;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 0.008em;
      color: #FFFFFF;
    }
    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.006em;
      color: #FFFFFF;
      opacity: 0.6;
    }
  }
`

const GlobalPresenseContentBottom = styled.div`
  width: 100%;
  height: 630px;
  margin-top: 64px;
  position: relative;
  overflow: hidden;
  border-radius: 32px;
  &>iframe {
    border-radius: 32px;
    position: absolute;
    top: -150px;
    width: 100%;
    height: 100%;

    .Chain-content {
      background: #000000 !important;
    }
  }
`

// this is a full height container that contains the Navbar, the Hero, and the bitcoin price
// when a user first visits the site this portion should take up 100% height
const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoint(css`
    height: unset;
    min-height: 120vw;
    padding: 48px 0 0;
  `)}
`;
