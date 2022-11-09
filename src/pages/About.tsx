import React, {useEffect, useState} from "react";
import styled, {css} from "styled-components";
import {breakpoint} from "../mixins/breakpoint";
import {t} from '../i18n/intl';
import {Footer} from './components/Footer';
import {GrayButton, NormalButton} from '../components/Btn';
import CLVIsBacked from './components/CLVBacked';
import { WrapperDesktopOnly, WrapperMobileOnly } from "../CloverLibrary";

const DesktopAndTable = styled.div`
    ${breakpoint({
        mobile: css`
            display: none;
        `,
        tablet_mini: css`
            display: initial;
        `,
        tablet: css`
            display: initial;
        `,
    })};
`

const MobileAndMiniTable = styled.div`
    display: none;
    ${breakpoint({
        mobile: css`
            display: initial;
        `,
        tablet_mini: css`
            display: initial;
        `,
        tablet: css`
            display: none;
        `,
    })};
`

export const About: React.FC = () => {
    const [scrollTop, setScrollTop] = useState(0)
    const handleScroll = () => {
        setScrollTop(window.scrollY)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [location]);

    return (
        <div>
            <Background/>
            <LandingContainer>
                <UniversalInfrastructure>
                    <video autoPlay loop muted src='videos/particles.mp4'></video>
                    <ContentWrapper>
                        <TextWrapper>
                            <DesktopAndTable>
                                {t('universalInfrastructure')}
                                <img src='images/clv_icon1.svg' alt=''/>
                            </DesktopAndTable>
                            <WrapperMobileOnly>
                                <MobileTitle>
                                    {t('aboutTitle')}
                                    <img src='images/clv_icon1.svg' alt=''/>
                                </MobileTitle>
                            </WrapperMobileOnly>
                            <span>{t('universalInfrastructureHint')}</span>
                        </TextWrapper>
                    </ContentWrapper>
                    <WrapperDesktopOnly>
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
                    </WrapperDesktopOnly>
                </UniversalInfrastructure>
                <MobileAndMiniTable>
                    <ContentBottom>
                        <ContentBottomLeft>
                            <h3>{t('technology')}</h3>
                            <span>{t('technologyHint')}</span>
                        </ContentBottomLeft>
                        <ContentBottomRight>
                            <div style={{marginBottom: '12px'}}>
                                <h3>{t('saveTime')}</h3>
                                <span>{t('saveTimeHint')}</span>
                            </div>
                            <div>
                                <NormalButton
                                    width='100%'
                                    height='40px'
                                    onClick={() => {
                                        window.open('https://docs.clv.org/use-clv-chain/beginners-guide', "_blank")
                                    }}
                                >{t('viewDocumentation')}</NormalButton>
                            </div>
                        </ContentBottomRight>
                    </ContentBottom>
                </MobileAndMiniTable>
                <Content>
                    <div>
                        <Progress>
                            <ProgressTitle>
                                <span>{t('roadmap')}</span>
                            </ProgressTitle>
                            <ProgressContent>
                                <ProgressItem
                                    style={{
                                        background: 'url(images/bg-top.svg) no-repeat',
                                    }}
                                >
                                    <ProgressQ0Left>
                                        <div className={scrollTop > 550 ? 'animation1' : ''}>2021</div>
                                    </ProgressQ0Left>
                                    <ProgressQ0Right>
                                        <h3 className={scrollTop > 550 ? 'animation2' : ''}>(Q3)</h3>
                                        <div className={scrollTop > 550 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1_white.svg' alt=''/>
                                            <span>{t('CLVEVMBridge')}</span>
                                        </div>
                                        <div className={scrollTop > 550 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1_white.svg' alt=''/>
                                            <span>{t('walletMultiChain')}</span>
                                        </div>
                                        <div className={scrollTop > 550 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1_white.svg' alt=''/>
                                            <span>{t('walletAuthorizationManagement')}</span>
                                        </div>
                                        <div className={scrollTop > 550 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1_white.svg' alt=''/>
                                            <span>{t('walletSocialAccountLogin')}</span>
                                        </div>
                                        <h3 className={scrollTop > 550 ? 'animation2' : ''}>(Q4)</h3>
                                        <div className={scrollTop > 550 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1_white.svg' alt=''/>
                                            <span>{t('CLVDAppInteractiveProtocol')}</span>
                                        </div>
                                        <div className={scrollTop > 550 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1_white.svg' alt=''/>
                                            <span>{t('CLVCrossChainExplorer')}</span>
                                        </div>
                                        <div className={scrollTop > 550 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1_white.svg' alt=''/>
                                            <span>{t('CLVParachainLaunch')}</span>
                                        </div>
                                        <div className={scrollTop > 550 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1_white.svg' alt=''/>
                                            <span>{t('walletMultiChainNFTSupport')}</span>
                                        </div>
                                    </ProgressQ0Right>
                                </ProgressItem>
                                <ProgressItem
                                    style={{
                                        background: 'url(images/bg-middle.svg) no-repeat',
                                    }}
                                >
                                    <WrapperMobileOnly>
                                        <ProgressQ1Right>
                                            <div className={scrollTop > 1200 ? 'animation1' : ''}>2022</div>
                                        </ProgressQ1Right>
                                    </WrapperMobileOnly>
                                    <ProgressQ1Left>
                                        <h3 className={scrollTop > 1200 ? 'animation2' : ''}>(Q1)</h3>
                                        <div className={scrollTop > 1200 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1.svg' alt=''/>
                                            <span>{t('enableCLVEVM')}</span>
                                        </div>
                                        <div className={scrollTop > 1200 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1.svg' alt=''/>
                                            <span>{t('enableCLVEVMGovernance')}</span>
                                        </div>
                                        <div className={scrollTop > 1200 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1.svg' alt=''/>
                                            <span>{t('CLVBlockchainExplorer')}</span>
                                        </div>
                                        <div className={scrollTop > 1200 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1.svg' alt=''/>
                                            <span>{t('validatorProgram')}</span>
                                        </div>
                                        <div className={scrollTop > 1200 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1.svg' alt=''/>
                                            <span>{t('walletAssetSwap')}</span>
                                        </div>
                                        <h3 className={scrollTop > 1200 ? 'animation2' : ''}>(Q2)</h3>
                                        <div className={scrollTop > 1200 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1.svg' alt=''/>
                                            <span>{t('enableUniversalCrossChain')}</span>
                                        </div>
                                        <div className={scrollTop > 1200 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1.svg' alt=''/>
                                            <span>{t('upgradableSmartContract')}</span>
                                        </div>
                                        <div className={scrollTop > 1200 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1.svg' alt=''/>
                                            <span>{t('upgradeCLVEVMBridge')}</span>
                                        </div>
                                        <div className={scrollTop > 1200 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1.svg' alt=''/>
                                            <span>{t('CLVWalletAssetBridge')}</span>
                                        </div>
                                        <h3 className={scrollTop > 1200 ? 'animation2' : ''}>(Q3)</h3>
                                        <div className={scrollTop > 1200 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1.svg' alt=''/>
                                            <span>{t('powerfulAndStable')}</span>
                                        </div>
                                        <div className={scrollTop > 1200 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1.svg' alt=''/>
                                            <span>{t('nativeParachainAssetSupport')}</span>
                                        </div>
                                        <div className={scrollTop > 1200 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1.svg' alt=''/>
                                            <span>{t('CLVWalletAssetStaking')}</span>
                                        </div>
                                        <div className={scrollTop > 1200 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1.svg' alt=''/>
                                            <span>{t('CLVWalletSupport')}</span>
                                        </div>
                                        <h3 className={scrollTop > 1200 ? 'animation2' : ''}>(Q4)</h3>
                                        <div className={scrollTop > 1200 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1.svg' alt=''/>
                                            <span>{t('supportDApps')}</span>
                                        </div>
                                        <div className={scrollTop > 1200 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1.svg' alt=''/>
                                            <span>{t('XCMMultiAssetSupport')}</span>
                                        </div>
                                        <div className={scrollTop > 1200 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1.svg' alt=''/>
                                            <span>{t('CLVAssetsSwap')}</span>
                                        </div>
                                    </ProgressQ1Left>
                                    <WrapperDesktopOnly>
                                        <ProgressQ1Right>
                                            <div className={scrollTop > 1200 ? 'animation1' : ''}>2022</div>
                                        </ProgressQ1Right>
                                    </WrapperDesktopOnly>
                                </ProgressItem>
                                <ProgressItem
                                    style={{
                                        background: 'url(images/bg-bottom.svg) no-repeat',
                                    }}
                                >
                                    <ProgressQ2Left>
                                        <div className={scrollTop > 2500 ? 'animation1' : ''}>2023</div>
                                    </ProgressQ2Left>
                                    <ProgressQ2Right>
                                        <h3 className={scrollTop > 2500 ? 'animation2' : ''}>(Q1)</h3>
                                        <div className={scrollTop > 2500 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1_white.svg' alt=''/>
                                            <span>Enhanced version of CLV wallet; improved user experience and web3 features</span>
                                        </div>
                                        <div className={scrollTop > 2500 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1_white.svg' alt=''/>
                                            <span>Integration of new blockchains into CLV ecosystem</span>
                                        </div>
                                        <div className={scrollTop > 2500 ? 'animation3' : ''}>
                                            <img src='images/progress_icon1_white.svg' alt=''/>
                                            <span>Continue to build strategic partnerships with Web3 and Defi entities.</span>
                                        </div>
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
                                <NewsUpdateItem onClick={() => {
                                    window.open('https://medium.com/@clv_org/seamless-access-to-all-things-defi-with-clv-8c4002a001b4')
                                }}>
                                    <NewsUpdateItemLeft>
                                        <span>13 Oct 2022</span>
                                        <WrapperDesktopOnly>
                                            <img src="images/news2.svg" alt=""/>
                                        </WrapperDesktopOnly>
                                    </NewsUpdateItemLeft>
                                    <NewsUpdateItemRight>
                                        <div>{t('seamlessAccess')}</div>
                                        <span>{t('seamlessAccessHint')}</span>
                                    </NewsUpdateItemRight>
                                </NewsUpdateItem>
                                <NewsUpdateItem onClick={() => {
                                    window.open('https://medium.com/@clv_org/clv-quarterly-wrap-up-a-look-into-q3-2022-722a7baeae11')
                                }}>
                                    <NewsUpdateItemLeft>
                                        <span>05 Oct 2022</span>
                                        <WrapperDesktopOnly>
                                            <img src="images/news3.svg" alt=""/>
                                        </WrapperDesktopOnly>
                                    </NewsUpdateItemLeft>
                                    <NewsUpdateItemRight>
                                        <div>{t('CLVQuarterly')}</div>
                                        <span>{t('CLVQuarterlyHint')}</span>
                                    </NewsUpdateItemRight>
                                </NewsUpdateItem>
                                <NewsUpdateItem onClick={() => {
                                    window.open('https://medium.com/@clv_org/introducing-clvs-cornerstones-meet-more-clv-team-members-f88fb90900da')
                                }}>
                                    <NewsUpdateItemLeft>
                                        <span>20 Sep 2022</span>
                                        <WrapperDesktopOnly>
                                            <img src="images/news1.svg" alt=""/>
                                        </WrapperDesktopOnly>
                                    </NewsUpdateItemLeft>
                                    <NewsUpdateItemRight>
                                        <div>{t('introducingCLV')}</div>
                                        <span>{t('Q1Hint')}</span>

                                        <WrapperMobileOnly>
                                            <GrayButton
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    window.open('https://medium.com/@clv_org')
                                                }}
                                                height='40px'
                                                margin="24px 0 0 0"
                                            >{t('seeMore')}</GrayButton>
                                        </WrapperMobileOnly>
                                        <WrapperDesktopOnly>
                                            <GrayButton
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    window.open('https://medium.com/@clv_org')
                                                }}
                                                margin="80px 0 0 0"
                                            >{t('seeMore')}</GrayButton>
                                        </WrapperDesktopOnly>
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
                                <WrapperDesktopOnly>
                                    <GlobalPresenseContentBottom>
                                        <IframeWrapper>
                                            <iframe
                                                id='myIframe'
                                                title='map'
                                                src='https://telemetry.polkadot.io/#map/0xe923f1773f4197a862cb4fc4a562f93585b26131dadbc943d524a82bbeecd2eb'
                                                frameBorder='0'
                                                scrolling='no'
                                            ></iframe>
                                        </IframeWrapper>
                                        <span>*By clicking the button you agree to our newsletter</span>
                                    </GlobalPresenseContentBottom>
                                </WrapperDesktopOnly>
                            </GlobalPresenseContent>
                        </GlobalPresense>
                        <CLVIsBacked/>
                    </div>
                </Content>
            </LandingContainer>
            <Footer/>
        </div>
    );
};

const MobileTitle = styled.div`
    font-weight: 600;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    display: inline-block;
    
    img {
        margin-left: 16px;
        width: 24px;
        height: 24px;
    }
`

const Content = styled.div`
  width: 100%;
  background: #000000;

  & > div {
    padding: 0 64px 64px;
    margin: 0 auto;

      ${breakpoint({
          mobile: css`
              padding: 0 24px;
          `,
          tablet: css`
          `,
          tablet_mini: css`
          `
      })};
  }
`

const UniversalInfrastructure = styled.div`
  width: 100%;
  padding-top: 96px;
  position: relative;

    ${breakpoint({
        mobile: css`
            display: flex;
            flex-direction: column;
            height: 280px;
            padding-top: 0;
        `,
        tablet: css`
            height: 500px;
        `,
        tablet_mini: css`
            height: 350px;
        `
    })};

  video {
    position: absolute;
    z-index: -1;
    top: 80px;
    width: 100%;
  }

  & > div {
    padding: 0 64px;
    max-width: 1440px;
    min-width: 1440px;
    margin: 0 auto;

      ${breakpoint({
          mobile: css`
              min-width: unset;
              max-width: unset;
              margin: 0;
              padding: 0;
          `,
          tablet: css`
              min-width: 1024px;
              max-width: 1024px;
          `,
          tablet_mini: css`
              min-width: 744px;
              max-width: 744px;
          `
      })};
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

    ${breakpoint({
        mobile: css`
            position: absolute;
            padding: 40px 20px !important;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};
`;

const TextWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 16px;

    ${breakpoint({
        mobile: css`
            width: 100%;
            margin-right: 0;
        `,
        tablet: css`
        `,
        tablet_mini: css`
            width: 80%;
        `
    })};

  & > div:first-child {
    font-weight: 600;
    font-size: 72px;
    line-height: 76px;
    letter-spacing: 0.008em;
    color: #FFFFFF;

    img {
      margin-left: 10px;
    }
  }

  span {
    font-family: Inter;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    margin: 40px 0 30px;

      ${breakpoint({
          mobile: css`
              font-weight: 400;
              font-size: 12px;
              line-height: 20px;
              letter-spacing: 0.006em;
              color: #FFFFFF;
              margin: 16px 0;
          `,
          tablet: css`
          `,
          tablet_mini: css`
          `
      })};
  }

    ${breakpoint({
        mobile: css`
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};
`;

const ContentBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 80px;
    padding: 0 64px;

    ${breakpoint({
        mobile: css`
            margin-top: 24px;
            flex-direction: column;
            padding: 0 24px;
        `,
        tablet_mini: css`
            margin-top: 24px;
            flex-direction: column;
            padding: 0 24px;
        `,
        tablet: css`
        `,
    })};
`;

const ContentBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  background: #141414;
  border-radius: 32px;
  padding: 48px;
  margin-right: 16px;
  height: 248px;

    ${breakpoint({
        mobile: css`
            border-radius: 16px;
            padding: 12px 16px;
            height: unset;
            margin: 0 0 8px;
        `,
        tablet_mini: css`
            width: 100%;
            border-radius: 16px;
            padding: 12px 16px;
            height: unset;
            margin: 0 0 8px;
        `,
        tablet: css`
        `,
        
    })};

  h3 {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    margin: 0 0 16px;

      ${breakpoint({
          mobile: css`
              font-weight: 590;
              font-size: 16px;
              line-height: 20px;
              letter-spacing: 0.008em;
              margin-bottom: 4px;
          `,
          tablet_mini: css`
              font-weight: 590;
              font-size: 16px;
              line-height: 20px;
              letter-spacing: 0.008em;
              margin-bottom: 4px;
          `,
          tablet: css`
          `,
      })};
  }

  span {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    opacity: 0.6;

      ${breakpoint({
          mobile: css`
              font-weight: 400;
              font-size: 12px;
              line-height: 18px;
              letter-spacing: 0.006em;
              opacity: 0.6;
          `,
          tablet_mini: css`
              font-weight: 400;
              font-size: 12px;
              line-height: 18px;
              letter-spacing: 0.006em;
              opacity: 0.6;
          `,
          tablet: css`
          `,
      })};
  }
`;

const ContentBottomRight = styled.div`
  display: flex;
  background: #141414;
  border-radius: 32px;
  padding: 48px;
  height: 248px;

    ${breakpoint({
        mobile: css`
            border-radius: 16px;
            padding: 12px 16px;
            height: unset;
            display: flex;
            flex-direction: column;
        `,
        tablet: css`
        `,
        tablet_mini: css`
            border-radius: 16px;
            padding: 12px 16px;
            height: unset;
            display: flex;
            flex-direction: column;
        `
    })};

  h3 {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    margin: 0 0 16px;

      ${breakpoint({
          mobile: css`
              font-weight: 600;
              font-size: 16px;
              line-height: 20px;
              letter-spacing: 0.008em;
              margin-bottom: 4px;
          `,
          tablet: css`
          `,
          tablet_mini: css`
              font-weight: 600;
              font-size: 16px;
              line-height: 20px;
              letter-spacing: 0.008em;
              margin-bottom: 4px;
          `
      })};
  }

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    opacity: 0.6;

      ${breakpoint({
          mobile: css`
              font-weight: 400;
              font-size: 12px;
              line-height: 18px;
              letter-spacing: 0.006em;
              opacity: 0.6;
          `,
          tablet: css`
          `,
          tablet_mini: css`
              font-weight: 400;
              font-size: 12px;
              line-height: 18px;
              letter-spacing: 0.006em;
              opacity: 0.6;
          `
      })};
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;

      ${breakpoint({
          mobile: css`
              margin-left: 0;
          `,
          tablet: css`
          `,
          tablet_mini: css`
          `
      })};

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

const Progress = styled.div`
  margin-top: 180px;
  width: 100%;

    ${breakpoint({
        mobile: css`
            margin-top: 64px;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};
`

const ProgressTitle = styled.div`
  width: 50%;
  font-weight: 600;
  font-size: 64px;
  line-height: 68px;
  letter-spacing: 0.008em;

    ${breakpoint({
        mobile: css`
            width: 100%;
            font-size: 32px;
            line-height: 32px;
            font-weight: 600;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};

  h3 {
    color: #FFFFFF;
    font-size: 64px;
    line-height: 68px;

      ${breakpoint({
          mobile: css`
              font-weight: 590;
              font-size: 32px;
              line-height: 32px;
              letter-spacing: 0.008em;
        `,
          tablet: css`
        `,
          tablet_mini: css`
        `
      })};
  }

  span {
    color: #BDFDE2;
  }
`

const ProgressContent = styled.div`
  width: 100%;
  margin-top: 64px;
  opacity: 1;

    ${breakpoint({
        mobile: css`
            margin-top: 0;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};

  .animation1 {
    opacity: 0;
    animation: overScroll 0.5s forwards ease-in-out;
    @keyframes overScroll {
      0% {
        opacity: 0;
        transform: translateY(100px);
      }
      100% {
        opacity: 1 !important;
        transform: translateY(0);
      }
    }
  }

  .animation2 {
    opacity: 0;
    animation: overScroll 0.5s forwards ease-in-out;
    animation-delay: 0.5s;
    @keyframes overScroll {
      0% {
        opacity: 0;
        transform: translateY(100px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .animation3 {
    opacity: 0;
    animation: overScroll 0.5s forwards ease-in-out;
    animation-delay: 1s;

    @keyframes overScroll {
      0% {
        opacity: 0;
        transform: translateY(100px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`

const ProgressItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 48px;
  background-size: cover;

    ${breakpoint({
        mobile: css`
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};
`

const ProgressQ0Left = styled.div`
  padding: 40px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

    ${breakpoint({
        mobile: css`
            padding: 24px 0 0;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};

  div {
    font-weight: 600;
    font-size: 64px;
    line-height: 68px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    margin-bottom: 16px;

      ${breakpoint({
          mobile: css`
              font-weight: 590;
              font-size: 24px;
              line-height: 28px;
          `,
          tablet: css`
          `,
          tablet_mini: css`
          `
      })};
  }
`

const ProgressQ0Right = styled.div`
  border-radius: 32px;
  padding: 48px;
  margin-right: 16px;
  background: #141414;
  margin-top: 16px;

    ${breakpoint({
        mobile: css`
            width: 100%;
            margin: 0;
            border-radius: 16px;
            padding: 24px;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};

  div {
    display: flex;
    align-items: flex-start;
    margin-bottom: 24px;

      ${breakpoint({
          mobile: css`
              margin-bottom: 12px;
          `,
          tablet: css`
          `,
          tablet_mini: css`
          `
      })};

    &:last-child {
      margin: 0 !important;
    }

    img {
      width: 32px;
      margin-right: 16px;

        ${breakpoint({
            mobile: css`
                width: 16px;
                height: 16px;
                margin-right: 8px;
            `,
            tablet: css`
            `,
            tablet_mini: css`
            `
        })};
    }

    span {
      font-family: Inter;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.006em;
      color: #ffffff;

        ${breakpoint({
            mobile: css`
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
          `,
            tablet: css`
          `,
            tablet_mini: css`
          `
        })};
    }
  }

  h3 {
    font-weight: 600;
    font-size: 48px;
    line-height: 52px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    opacity: 0.3;
    margin-bottom: 24px;

      ${breakpoint({
          mobile: css`
              font-weight: 600;
              font-size: 24px;
              line-height: 28px;
              margin-bottom: 12px;
          `,
          tablet: css`
          `,
          tablet_mini: css`
          `
      })};

  }
`

const ProgressQ1Left = styled.div`
  background: linear-gradient(28.19deg, #BDFDE2 -14.72%, #9BDAF6 116.35%);
  border-radius: 32px;
  padding: 48px;
  margin-right: 16px;

    ${breakpoint({
        mobile: css`
            margin: 0;
            padding: 24px;
            width: 100%;
            border-radius: 16px;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};

  h3 {
    font-weight: 600;
    font-size: 48px;
    line-height: 52px;
    text-align: right;
    letter-spacing: 0.008em;
    color: #0C0B0B;
    opacity: 0.7;
    margin-bottom: 24px;

      ${breakpoint({
          mobile: css`
              font-weight: 600;
              font-size: 24px;
              line-height: 28px;
              margin-bottom: 12px;
          `,
          tablet: css`
          `,
          tablet_mini: css`
          `
      })};
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: 24px;

      ${breakpoint({
          mobile: css`
              margin-bottom: 12px;
          `,
          tablet: css`
          `,
          tablet_mini: css`
          `
      })};


      &:last-child {
      margin: 0 !important;
    }

    img {
      width: 32px;
      margin-right: 16px;

        ${breakpoint({
            mobile: css`
                width: 16px;
                height: 16px;
                margin-right: 8px;
            `,
            tablet: css`
            `,
            tablet_mini: css`
            `
        })};
    }

    span {
      font-family: Inter;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.006em;
      color: #0C0B0B;

        ${breakpoint({
            mobile: css`
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
          `,
            tablet: css`
          `,
            tablet_mini: css`
          `
        })};
    }
  }
`

const ProgressQ1Right = styled.div`
  padding: 40px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;

    ${breakpoint({
        mobile: css`
            padding: 0;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};

  div {
    font-weight: 600;
    font-size: 64px;
    line-height: 68px;
    letter-spacing: 0.008em;
    color: #FFFFFF;

      ${breakpoint({
          mobile: css`
              font-weight: 590;
              font-size: 24px;
              line-height: 28px;
          `,
          tablet: css`
          `,
          tablet_mini: css`
          `
      })};
  }
`

const ProgressQ2Left = styled(ProgressQ0Left)``

const ProgressQ2Right = styled(ProgressQ0Right)``

const NewsUpdate = styled.div`
  width: 100%;
  margin-top: 100px;

    ${breakpoint({
        mobile: css`
            margin-top: 64px;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};
`

const NewsUpdateTitle = styled(ProgressTitle)`
  display: flex;

    ${breakpoint({
        mobile: css`
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};
    
  span {
    color: #9BDAF6;
  }
`

const NewsUpdateContent = styled.div`
  margin-top: 64px;

    ${breakpoint({
        mobile: css`
            margin-top: 28px;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};

  & > div:last-child {
    padding-bottom: 0;
  }
`

const NewsUpdateItem = styled.div`
  display: flex;
  padding: 40px 0;
  border-top: 1px solid #333232;
  cursor: pointer;

    ${breakpoint({
        mobile: css`
            flex-direction: column;
            padding: 16px 0;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};
`

const NewsUpdateItemLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 50%;
  margin-right: 48px;

  span {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.026em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);

      ${breakpoint({
          mobile: css`
              font-weight: 400;
              font-size: 12px;
              line-height: 18px;
              margin-bottom: 8px;
          `,
          tablet: css`
          `,
          tablet_mini: css`
          `
      })};
  }

  img {
    height: 152px;
  }
`

const NewsUpdateItemRight = styled.div`
  width: 50%;

    ${breakpoint({
        mobile: css`
            width: 100%;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};

  div:first-child {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    margin-bottom: 16px;

      ${breakpoint({
          mobile: css`
              font-weight: 400;
              font-size: 12px;
              line-height: 20px;
              margin-bottom: 4px;
        `,
          tablet: css`
        `,
          tablet_mini: css`
        `
      })};
  }

  span {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    opacity: 0.6;

      ${breakpoint({
          mobile: css`
              font-weight: 400;
              font-size: 12px;
              line-height: 20px;
        `,
          tablet: css`
        `,
          tablet_mini: css`
        `
      })};
  }
`

const GlobalPresense = styled.div`
  width: 100%;
  margin-top: 180px;

    ${breakpoint({
        mobile: css`
            margin-top: 64px;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};
`

const GlobalPresenseTitle = styled(ProgressTitle)`
  display: flex;
`

const GlobalPresenseContent = styled.div``

const GlobalPresenseContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

    ${breakpoint({
        mobile: css`
            margin-top: 12px;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};

  div {
    width: 50%;

      ${breakpoint({
          mobile: css`
              width: 100%;
          `,
          tablet: css`
          `,
          tablet_mini: css`
          `
      })};

    h3 {
      font-weight: 600;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 0.008em;
      color: #FFFFFF;

        ${breakpoint({
            mobile: css`
                font-weight: 600;
                font-size: 16px;
                line-height: 24px;
            `,
            tablet: css`
            `,
            tablet_mini: css`
            `
        })};
    }

    span {
      font-family: Inter;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.006em;
      color: #FFFFFF;
      opacity: 0.6;

        ${breakpoint({
            mobile: css`
                font-weight: 400;
                font-size: 12px;
                line-height: 20px;
            `,
            tablet: css`
            `,
            tablet_mini: css`
            `
        })};
    }
  }
`

const GlobalPresenseContentBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

    ${breakpoint({
        mobile: css`
            margin-top: 0;
            height: 240px;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};

  & > span {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: right;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    opacity: 0.6;
  }
`

const IframeWrapper = styled.div`
  width: 100%;
  height: 630px;
  margin-top: 64px;
  margin-bottom: -140px;
  position: relative;
  overflow: hidden;
  border-radius: 32px;

    ${breakpoint({
        mobile: css`
            margin-top: 0;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};

  & > iframe {
    border-radius: 32px;
    position: absolute;
    top: -150px;
    width: 100%;
    height: 100%;
    filter: hue-rotate(180deg) saturate(10%) contrast(150%) brightness(400%);

      ${breakpoint({
          mobile: css`
              margin-top: 0;
        `,
          tablet: css`
        `,
          tablet_mini: css`
        `
      })};

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
`;
