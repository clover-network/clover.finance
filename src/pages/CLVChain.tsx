import React, {useState, useEffect, useCallback, useRef} from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../mixins/breakpoint";
import { t } from '../i18n/intl';
import { Footer } from './components/Footer';
import {CLVPortalButton, GrayButton, NormalButton} from '../components/Btn';
import { useRouter } from 'next/router';
import {WrapperDesktopOnly, WrapperMobileOnly } from "../CloverLibrary";
import {isMobile} from "react-device-detect";
// @ts-ignore
import enableInlineVideo from 'iphone-inline-video';
import {ScreenScrollDirection} from "./Main";

const ContentInfo = styled.div`
  
`

const FeaturesContentMobile = styled.div`
  position: relative;
  height: 1000px;
`

const FeaturesLeftMobile = styled.div`
  top: 0;
  left: 0;
  right: 0;
  display: inline-flex;
  justify-content: center;
  
  video {
    width: 200px;
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }
`

const FeaturesRightItemMobile = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 320px;

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    margin-bottom: 8px;
  }

  & > h3:last-child {
    color: #BDFDE2;
  }

  & > span {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
  }

  & > p {
    font-family: Inter;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #FFFFFF;
    margin-bottom: 8px;
    span {
      color: #A9FFE0;
    }
  }
`

const ClvTokenTopMobile = styled.div`
  position: relative;
  height: 370px;

  & > img:first-child {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    margin-top: 16px;
  }
`

const ClvTokenTopMobileTitle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 144px;
  
  h3 {
    font-weight: 600;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: 0.008em;
    color: #BDFDE2;
    margin-bottom: 0;
  }
  
  img {
    width: 32px;
    height: 32px;
    margin-left: 12px;
  }
`

const ClvTokenTopMobileSenTitle = styled.div`
  position: absolute;
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: 0.008em;
  color: #FFFFFF;
  top: 184px;
`

const ClvTokenTopMobileSubtitle = styled.div`
  position: absolute;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.006em;
  color: #FFFFFF;
  opacity: 0.6;
  top: 280px;
`

export const CLVChain: React.FC = () => {
  const location = useRouter();
  const [selectFaq, setSelectFaq] = useState(0)
  const [isReverse, setIsReserve] = useState(false)
  let videoStatus = 'start'
  const [y, setY] = useState(window.scrollY);
  const direction = useRef<ScreenScrollDirection>(ScreenScrollDirection.Down);
  const isReverseRef = useRef<boolean>(false);

  useEffect(() => {
    isReverseRef.current = isReverse;
  }, [isReverse])

  const handleNavigation = useCallback((e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      direction.current = ScreenScrollDirection.Up;
    } else if (y < window.scrollY) {
      direction.current = ScreenScrollDirection.Down;
    }
    setY(window.scrollY);
  }, [y])

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);


  const faqsList = [
    {
      title: "What is the difference between the CLV M-chain and the CLV P-chain?",
      content: <div>
        <span>The M-chain is the CLV mainnet, used for governance and exchange purposes, while the P-Chain is the CLV Parachain. CLV P-Chain is an EVM-compatible smart contract chain currently connected to Polkadot Mainnet as one of the Parachains. Both blockchains are validated and secured by the Substrate framework. </span>
      </div>
    },
    {
      title: "How do I claim my staking rewards using the CLV wallet on mobile?",
      content: <div>
        <span>All claims are made automatically. There is no need to do anything manually.</span>
      </div>
    },
    {
      title: "Sr25519 ＆ Sd25519 （For Polkadot network only）",
      content: <div>
        <span>Using different Keypair Crypto Type will create different addresses under Polkadot network in one account. Currently in CLV Wallet, the displayed address in Polkadot network is using Sr25519 to create.</span>
        <span>The default choice for most wallets is Sr25519 as well. If your token disappears in Polkadot network, try to import the same wallet again by choosing the other Keypair Crypto Type.</span>
      </div>
    },
    {
      title: "Why did my CLV Wallet bridge fail?",
      content: <div>
        <span>The most common reason why bridging fails is due to an insufficient balance of native tokens in your account. Therefore, you must ensure you own sufficient native tokens to pay the cross-chain and transaction fees.</span>
      </div>
    },
  ]

  const handleScroll = (e: any) => {
    if (videoStatus === 'playing') return;

    let playVideo1: any = document.getElementById('playVideo1')
    let playVideo2: any = document.getElementById('playVideoReverse1')
    if (isMobile) {
      playVideo1 = document.getElementById('playVideoMobile1')
      playVideo2 = document.getElementById('playVideoReverseMobile1')
    }
    const rev = isReverseRef.current
    const dir = direction.current;
    const isScrollDown = dir === ScreenScrollDirection.Down;
    let startY = 900;
    let endY = 2500;

    if (isMobile) {
      startY = 300;
      endY = 680;
    }
    if (!rev && isScrollDown && window.scrollY > startY && window.scrollY < endY) {
      playVideo1.play()
    }
    if (rev && !isScrollDown && window.scrollY < endY) {
      playVideo2.play()
    }
  }

  useEffect(() => {
    if (isMobile) {
      window.addEventListener('scroll', handleScroll)
    } else {
      const isFirefox = navigator.userAgent.indexOf('Firefox') !== -1
      const mousewheel = isFirefox ? 'DOMMouseScroll' : 'mousewheel'
      window.addEventListener(mousewheel, handleScroll)
    }

    return () => {
      if (isMobile) {
        window.removeEventListener('scroll', handleScroll)
      } else {
        const isFirefox = navigator.userAgent.indexOf('Firefox') !== -1
        const mousewheel = isFirefox ? 'DOMMouseScroll' : 'mousewheel'
        window.removeEventListener(mousewheel, handleScroll)
      }
    }
  }, []);


  useEffect(() => {
    let playVideo1: any = document.getElementById('playVideo1')
    let playVideo2: any = document.getElementById('playVideoReverse1')
    if (isMobile) {
      playVideo1 = document.getElementById('playVideoMobile1')
      playVideo2 = document.getElementById('playVideoReverseMobile1')
    }
    if (isMobile) {
      playVideo2.play();
      playVideo2.pause();
      playVideo2.currentTime = 0;
    }
    playVideo1.addEventListener('playing', () => videoStatus = 'playing')
    playVideo2.addEventListener('playing', () => videoStatus = 'playing')

    playVideo1.addEventListener('ended', () => {
      videoStatus = 'start'
      setIsReserve(true)
      playVideo1.currentTime = 0
    })
    playVideo2.addEventListener('ended', () => {
      videoStatus = 'start'
      setIsReserve(false)
      playVideo2.currentTime = 0
    })
  }, []);

  useEffect(() => {
    if (isMobile) {
      const video = document.querySelector('video');
      enableInlineVideo(video);
    }
  })

  return (
      <div id='CLVChain'>
        <Background />
        <LandingContainer>
          <IntrodusingTheCLV>
            <video playsInline autoPlay loop muted src='videos/particles.mp4'></video>
            <div>
              <ContentWrapper>
                <TextWrapper>
                  <div>
                    <h3>{t('introdusingTheCLV')}</h3>
                    <img src='images/clv_icon1.svg' alt='' />
                  </div>
                  <span>{t('introdusingTheCLVHint')}</span>
                </TextWrapper>
              </ContentWrapper>
              <WrapperMobileOnly>
                <ContentBottom>
                  <img className="img-top" src='images/mobile_clv_chain_left.svg' alt='' />
                  <ContentInfo>
                    <ContentBottomItem>
                      <img src='images/introdusing_icon1.svg' alt='' />
                      <span>{t('CLVMainnet')}</span>
                    </ContentBottomItem>
                    <ContentBottomItemNormal>
                      <img src='images/introdusing_icon2.svg' alt='' />
                      <span>{t('governanceExchange')}</span>
                    </ContentBottomItemNormal>
                    <ContentBottomItemNormal>
                      <img src='images/introdusing_icon3.svg' alt='' />
                      <span>{t('bridgingTechnology')}</span>
                    </ContentBottomItemNormal>
                    <ContentBottomItemNormal>
                      <img src='images/introdusing_icon4.svg' alt='' />
                      <span>{t('dAppDevelopment')}</span>
                    </ContentBottomItemNormal>
                    <ContentBottomItem>
                      <img src='images/introdusing_icon5.svg' alt='' />
                      <span>{t('CLVParachain')}</span>
                    </ContentBottomItem>
                    <ContentBottomItemNormal>
                      <img src='images/introdusing_icon6.svg' alt='' />
                      <span>{t('smartContract')}</span>
                    </ContentBottomItemNormal>
                  </ContentInfo>
                  <img className="img-top" src='images/mobile_clv_chain_right.svg' alt='' />
                </ContentBottom>
              </WrapperMobileOnly>
              <WrapperDesktopOnly>
                <ContentBottom>
                  <ContentBottomLeft>
                    <img className="img-top" src='images/introdusing_top.svg' alt='' />
                    <ContentBottomItem>
                      <img src='images/introdusing_icon1.svg' alt='' />
                      <span>{t('CLVMainnet')}</span>
                    </ContentBottomItem>
                    <ContentBottomItemNormal style={{margin: '0'}}>
                      <img src='images/introdusing_icon2.svg' alt='' />
                      <span>{t('governanceExchange')}</span>
                    </ContentBottomItemNormal>
                    <img className="img-bottom" src='images/introdusing_bottom.svg' alt='' />
                  </ContentBottomLeft>
                  <ContentBottomCenter>
                    <img src='images/introdusing_icon3.svg' alt='' />
                    <span>{t('bridgingTechnology')}</span>
                  </ContentBottomCenter>
                  <ContentBottomRight>
                    <ContentBottomItemNormal>
                      <img src='images/introdusing_icon4.svg' alt='' />
                      <span>{t('dAppDevelopment')}</span>
                    </ContentBottomItemNormal>
                    <ContentBottomItem>
                      <img src='images/introdusing_icon5.svg' alt='' />
                      <span>{t('CLVParachain')}</span>
                    </ContentBottomItem>
                    <ContentBottomItemNormal style={{margin: '0'}}>
                      <img src='images/introdusing_icon6.svg' alt='' />
                      <span>{t('smartContract')}</span>
                    </ContentBottomItemNormal>
                  </ContentBottomRight>
                </ContentBottom>
              </WrapperDesktopOnly>
            </div>
          </IntrodusingTheCLV>
          <Content>
            <div>
              <Features>
                <FeaturesTitle>
                  <h3>{t('features')}</h3>
                  <h3>{t('thatMakesTheDifference')}</h3>
                </FeaturesTitle>
                <WrapperDesktopOnly>
                  <FeaturesContent>
                    <FeaturesLeft>
                      <video playsInline style={{display: isReverse ? 'none' : 'inline-block'}}  id='playVideo1' muted src='videos/CLVDevPageSequence.mp4'></video>
                      <video playsInline style={{display: !isReverse ? 'none' : 'inline-block'}} id='playVideoReverse1' muted src='videos/CLVDevPageSequence2.mp4'></video>
                    </FeaturesLeft>
                    <FeaturesRight>
                      <div>
                        <FeaturesRightItem>
                          <h3>{t('etheriumCompatible')}</h3>
                          <span>{t('etheriumCompatibleHint')}</span>
                          <GrayButton
                              onClick={() => {
                                window.open('https://docs.clv.org/clv-chain-developer-guide/dapp-example/setup-dapp-project', "_blank")
                              }}
                          >{t('learnMore')}</GrayButton>
                        </FeaturesRightItem>
                        <FeaturesRightItem>
                          <h3>{t('EconomicIncentive')}</h3>
                          <span>{t('EconomicIncentiveHint')}</span>
                          <GrayButton
                              onClick={() => {
                                window.open('https://docs.clv.org/clover-ecosystem/incentive-programs', "_blank")
                              }}
                          >{t('learnMore')}</GrayButton>
                        </FeaturesRightItem>
                        {/*<FeaturesRightItem>*/}
                        {/*  <h3>{t('highStakingReturn')}</h3>*/}
                        {/*  <p>Current avg. APY <span>26.62%</span></p>*/}
                        {/*  <span>{t('highStakingReturnHint')}</span>*/}
                        {/*  <Btns>*/}
                        {/*    <NormalButton*/}
                        {/*        width='316px'*/}
                        {/*        onClick={() => {*/}
                        {/*          window.open('https://apps.apple.com/app/clover-wallet/id1570072858', "_blank")*/}
                        {/*        }}*/}
                        {/*    >{t('stakeOnMobile')}</NormalButton>*/}
                        {/*    <GrayButton*/}
                        {/*      width='316px'*/}
                        {/*      onClick={()=>{window.open('https://portal.clv.org/','_blank')}}>*/}
                        {/*      {t('enterCLVPortal')}*/}
                        {/*    </GrayButton>*/}
                        {/*  </Btns>*/}
                        {/*</FeaturesRightItem>*/}
                        <FeaturesRightItem>
                          <h3>{t('smartContractsGovernance')}</h3>
                          <span>{t('smartContractsGovernanceHint')}</span>
                        </FeaturesRightItem>
                      </div>
                    </FeaturesRight>
                  </FeaturesContent>
                </WrapperDesktopOnly>
                <WrapperMobileOnly>
                  <FeaturesContentMobile>
                    <FeaturesLeftMobile>
                      <video playsInline style={{visibility: isReverse ? 'hidden' : 'initial'}}  id='playVideoMobile1' muted src='videos/CLVDevPageSequence.mp4'></video>
                      <video playsInline style={{visibility: !isReverse ? 'hidden' : 'initial'}} id='playVideoReverseMobile1' muted src='videos/CLVDevPageSequence2.mp4'></video>
                    </FeaturesLeftMobile>
                    <FeaturesRightItemMobile>
                      <h3>{t('etheriumCompatible')}</h3>
                      <span>{t('etheriumCompatibleHint')}</span>
                      <GrayButton
                          margin='8px 0'
                          height='40px'
                          onClick={() => {
                            window.open('https://docs.clv.org/clv-chain-developer-guide/dapp-example/setup-dapp-project', "_blank")
                          }}
                      >{t('learnMore')}</GrayButton>
                      <h3 style={{marginTop: '16px'}}>{t('EconomicIncentive')}</h3>
                      <span>{t('EconomicIncentiveHint')}</span>
                      <GrayButton
                          margin='8px 0'
                          height='40px'
                          onClick={() => {
                            window.open('https://docs.clv.org/clover-ecosystem/incentive-programs', "_blank")
                          }}
                      >{t('learnMore')}</GrayButton>
                      <h3 style={{marginTop: '16px'}}>{t('highStakingReturn')}</h3>
                      <p>Current avg. APY <span>26.62%</span></p>
                      <span style={{marginBottom: '8px'}}>{t('highStakingReturnHint')}</span>
                      <NormalButton
                          margin='8px 0'
                          height='40px'
                          onClick={() => {
                            window.open('https://apps.apple.com/app/clover-wallet/id1570072858', "_blank")
                          }}
                      >{t('stakeOnMobile')}</NormalButton>
                      <GrayButton
                          margin='8px 0'
                          height='40px'
                      >{t('enterCLVPortal')}</GrayButton>
                      <h3>{t('smartContractsGovernance')}</h3>
                      <span>{t('smartContractsGovernanceHint')}</span>
                    </FeaturesRightItemMobile>
                  </FeaturesContentMobile>
                </WrapperMobileOnly>
              </Features>
              <ClvToken>
                <WrapperDesktopOnly>
                  <ClvTokenTop>
                    <div>
                      <div>
                        <h3>{t('CLVToken')}</h3>
                        <img src='images/clv_icon_green.svg' alt='' />
                      </div>
                      <h3>{t('CLVTokenTitle')}</h3>
                      <span>{t('CLVTokenHint')}</span>
                    </div>
                    <img src='images/clv_token_img.svg' alt='' />
                  </ClvTokenTop>
                </WrapperDesktopOnly>
                <WrapperMobileOnly>
                  <ClvTokenTopMobile>
                    <img src='images/clv_token_img.svg' alt='' />
                    <ClvTokenTopMobileTitle>
                      <h3>{t('CLVToken')}</h3>
                      <img src='images/clv_icon_green.svg' alt='' />
                    </ClvTokenTopMobileTitle>
                    <ClvTokenTopMobileSenTitle>{t('CLVTokenTitle')}</ClvTokenTopMobileSenTitle>
                    <ClvTokenTopMobileSubtitle>{t('CLVTokenHint')}</ClvTokenTopMobileSubtitle>
                  </ClvTokenTopMobile>
                </WrapperMobileOnly>
                <ClvTokenBottom>
                  <span>{t('CLVIsAvailable')}</span>
                  <div>
                    <ClvTokenBottomItem>
                      <span>Ethereum Mainnet</span>
                      <span>(ERC20)</span>
                    </ClvTokenBottomItem>
                    <ClvTokenBottomItem>
                      <span>BNB Smart Chain</span>
                      <span>(BEP20)</span>
                    </ClvTokenBottomItem>
                    <ClvTokenBottomItem>
                      <span>CLV Mainnet</span>
                      <span>(Substrate native)</span>
                    </ClvTokenBottomItem>
                    <ClvTokenBottomItem>
                      <span>CLV Parachain</span>
                      <span>(EVM native)</span>
                    </ClvTokenBottomItem>
                  </div>
                </ClvTokenBottom>
              </ClvToken>
              <Ecosystem>
                <EcosystemTitle>
                  <span>{t('anEcosystem')}</span>
                  <h3>{t('thatProvidesTransparency')}</h3>
                </EcosystemTitle>
                <EcosystemContent>
                  <EcosystemItem>
                    <div>
                      <div>
                        <h3>{t('CLVPortal')}</h3>
                      </div>
                      <span>{t('CLVPortalHint')}</span>
                    </div>
                    <CLVPortalButton onClick={() => window.open('https://portal.clv.org')}>{t('visitCLVPortal')}</CLVPortalButton>
                  </EcosystemItem>
                  <EcosystemItem>
                    <div>
                      <div>
                        <h3>{t('EVMBridge')}</h3>
                      </div>
                      <span>{t('EVMBridgeHint')}</span>
                    </div>
                    <GrayButton
                        onClick={() => {
                          window.open('https://bridge.clv.org/#/', "_blank")
                        }}
                    >{t('visitTheSolution')}</GrayButton>
                  </EcosystemItem>
                  <EcosystemItem>
                    <div>
                      <div>
                        <img src='images/clv_icon1.svg' alt='' />
                        <h3>{t('crossChainExplorer')}</h3>
                      </div>
                      <span>{t('crossChainExplorerHint')}</span>
                    </div>
                    <GrayButton
                        onClick={() => {
                          window.open('https://tx.clover.finance/#/', "_blank")
                        }}
                    >{t('visitTheSolution')}</GrayButton>
                  </EcosystemItem>
                  <EcosystemItem>
                    <div>
                      <div>
                        <h3>{t('CLVScan')}</h3>
                      </div>
                      <span>{t('CLVScanHint')}</span>
                    </div>
                    <GrayButton
                        onClick={() => {
                          window.open('https://clvscan.com/', "_blank")
                        }}
                    >{t('visitTheSolution')}</GrayButton>
                  </EcosystemItem>
                </EcosystemContent>
              </Ecosystem>
              <FAQs>
                <FAQsTitle>{t('FAQ’s')}</FAQsTitle>
                <FAQsContent>
                  {faqsList.map((faq, index) => (
                      <FAQsItem
                          key={`faq_${index}`}
                          onClick={() => setSelectFaq(index)}
                      >
                        <div>
                          <h3>{faq.title}</h3>
                          <img
                              src={selectFaq === index ? 'images/arrow_to_up.svg' : 'images/arrow_to_down.svg'}
                              className={selectFaq === index ? 'selected' : ''}
                              alt=''
                          />
                        </div>
                        {selectFaq === index && <FAQsItemContent>{faq.content}</FAQsItemContent>}
                      </FAQsItem>
                  ))}
                </FAQsContent>
              </FAQs>
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
    padding: 0 64px 180px;
    margin: 0 auto;

    ${breakpoint({
      mobile: css`
        max-width: unset;
        min-width: unset;
        padding: 0 24px;
      `,
      tablet: css`
        max-width: unset;
        min-width: unset;
      `,
      tablet_mini: css`
        max-width: unset;
        min-width: unset;
      `
    })};
  }
`

const IntrodusingTheCLV = styled.div`
  width: 100%;
  padding-top: 96px;
  position: relative;

  ${breakpoint({
    mobile: css`
      padding-top: 0;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};
  
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

    ${breakpoint({
      mobile: css`
        max-width: unset;
        min-width: unset;
        padding: 40px 24px;
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
      padding-top: 0;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};
`;

const TextWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 16px;

  ${breakpoint({
    mobile: css`
      width: 100%;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};

  & > div:first-child {
    font-weight: 600;
    font-size: 72px;
    line-height: 76px;
    letter-spacing: 0.008em;
    color: #FFFFFF;

    ${breakpoint({
      mobile: css`
        font-weight: 600;
        font-size: 40px;
        line-height: 40px;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })};
    
    img {
      margin-left: 10px;

      ${breakpoint({
        mobile: css`
          width: 24px;
          height: 24px;
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
    font-size: 72px;
    line-height: 76px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    display: initial;
    width: 50%;

    ${breakpoint({
      mobile: css`
        font-weight: 500;
        font-size: 40px;
        line-height: 40px;
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
    color: #FFFFFF;
    margin: 40px 0 30px;

    ${breakpoint({
      mobile: css`
        margin: 16px 0;
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
`;

const ContentBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;

  ${breakpoint({
    mobile: css`
      flex-direction: row;
      margin-top: 64px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};
`;

const ContentBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .img-top {
    height: 37px;
    position: absolute;
    top: -40px;
    left: 50%;
  }
  .img-bottom {
    height: 37px;
    position: absolute;
    bottom: -40px;
    left: 50%;
  }
`;

const ContentBottomItem = styled.div`
  width: 426.67px;
  padding: 24px 20px;
  background: linear-gradient(39.66deg, #BDFDE2 -8.36%, #9BDAF6 143.89%);
  border: 1px solid #333232;
  border-radius: 32px;
  display: flex;
  align-items: center;
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.006em;
  color: #0C0B0B;
  margin-bottom: 16px;

  ${breakpoint({
    mobile: css`
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      border-radius: 16px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};

  ${breakpoint({
    mobile: css`
      width: 100%;
      height: 80px;
      margin-bottom: 8px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};
  
  img {
    width: 68px;
    height: 70px;
    margin-right: 32px;

    ${breakpoint({
      mobile: css`
        margin-right: 12px;
        width: 48px;
        height: 48px;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })};
  }
`

const ContentBottomItemNormal = styled(ContentBottomItem)`
  background: #0C0B0B;
  color: #FFFFFF;
`

const ContentBottomCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Inter;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.006em;
  color: #FFFFFF;
  padding: 28px 90px;
  background: #141414;
  border: 1px solid #333232;
  border-radius: 32px;
  margin: 0 16px;
  img {
    width: 140px;
    height: 140px;
    margin-bottom: 24px;
  }
`

const ContentBottomRight = styled.div`
  display: flex;
  flex-direction: column;
`

const Btns = styled.div`
  display: flex;
  align-items: center;
  div:first-child {
    margin-right: 16px;
    -webkit-text-fill-color: #0C0B0B!important;;
  }
`

const Features = styled.div`
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

const FeaturesTitle = styled.div`
  width: 50%;
  font-weight: 600;
  font-size: 64px;
  line-height: 68px;
  letter-spacing: 0.008em;

  ${breakpoint({
    mobile: css`
      width: unset;
      font-weight: 600;
      font-size: 32px;
      line-height: 32px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};


  h3:first-child {
    color: #9BDAF6;
    margin-bottom: 0;
  }
  
  h3 {
    font-size: 64px;
    line-height: 68px;
    color: #FFFFFF;

    ${breakpoint({
      mobile: css`
        font-weight: 500;
        font-size: 32px;
        line-height: 32px;
      `,
      tablet: css`
        font-weight: 500;
        font-size: 32px;
        line-height: 32px;
      `,
      tablet_mini: css`
        font-weight: 500;
        font-size: 32px;
        line-height: 32px;
      `
    })};
  }
  
  span {
    color: #9BDAF6;
  }
`

const FeaturesContent = styled.div`
  width: 100%;
  display: flex;
  margin-top: 64px;
`

const FeaturesLeft = styled.div`
  width: 50%;
  margin-right: 16px;

  ${breakpoint({
    mobile: css`
      width: 50%;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};

  video {
    width: 100%;
    max-width: 630px;

    ${breakpoint({
      mobile: css`
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })};
  }
`

const FeaturesRight = styled.div`
  width: 50%;
  &>div {
    &>div:last-child {
      margin-bottom: 0;
    }
  }
`

const FeaturesRightItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
  h3 {
    font-weight: 600;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    margin-bottom: 32px;
  }

  & > p {
    font-family: Inter;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 32px;
    span {
      color: #A9FFE0;
    }
  }

  & > span {
    font-family: Inter;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    margin-bottom: 20px;
    &:last-child {
      margin: 0!important;
    }
  }

  & > div {
    margin-top: 12px;
  }
`

const ClvToken = styled.div`
  background: #141414;
  border-radius: 32px;
  padding: 48px;
  margin-top: 180px;

  ${breakpoint({
    mobile: css`
      padding: 16px;
      border-radius: 16px;
      margin-top: 72px;
    `,
    tablet: css`
      margin-top: 72px;
    `,
    tablet_mini: css`
      margin-top: 72px;
    `
  })};
`

const ClvTokenTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &>div {
    flex: 0 0 50%;
    div {
      display: flex;
      align-items: center;
      h3 {
        font-weight: 600;
        font-size: 64px;
        line-height: 68px;
        letter-spacing: 0.008em;
        color: #BDFDE2;
        letter-spacing: 0.008em;
      }
      span {
        font-weight: 600;
        font-size: 64px;
        line-height: 68px;
        letter-spacing: 0.008em;
        color: #BDFDE2;
        letter-spacing: 0.008em;
      }
      img {
        margin-left: 12px;
        width: 46px;
      }
    }
    h3 {
      font-weight: 600;
      font-size: 48px;
      line-height: 60px;
      letter-spacing: 0.008em;
      color: #FFFFFF;
      margin: 32px 0;
    }
    &>span {
      font-family: Inter;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.006em;
      color: #FFFFFF;
    }
  }

  &>img {
    flex: 0 0 50%;
    height: 380px;
  }
`

const ClvTokenBottom = styled.div`
  &>span {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.026em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
    padding: 22px 0;
    display: inline-block;

    ${breakpoint({
      mobile: css`
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.026em;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })};
  }
  &>div {
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: center;
    gap: 20px;

    ${breakpoint({
      mobile: css`
        display: flex;
        flex-direction: column;
      `,
      tablet: css`
        display: flex;
        flex-direction: column;
      `,
      tablet_mini: css`
        display: flex;
        flex-direction: column;
      `
    })};
  }
`

const ClvTokenBottomItem = styled.div`
  width: 289px;
  height: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  word-break: break-word;
  background: linear-gradient(39.66deg, rgba(189, 253, 226, 0.4) -8.36%, rgba(155, 218, 246, 0.4) 143.89%);
  border-radius: 80px;
  font-family: Inter;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.006em;
  color: #0C0B0B;
  padding: 16px;
  border: 1px solid #BDFDE2;

  ${breakpoint({
    mobile: css`
      height: 60px;
      width: 100%;
      font-size: 12px;
      line-height: 14px;
    `,
    tablet: css`
      width: 100%;
    `,
    tablet_mini: css`
      width: 100%;
    `
  })};
`

const Ecosystem = styled.div`
  margin-top: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

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

const EcosystemTitle = styled.div`
  width: 50%;
  font-weight: 600;
  font-size: 64px;
  line-height: 68px;
  letter-spacing: 0.008em;
  text-align: right;

  ${breakpoint({
    mobile: css`
      width: 100%;
      text-align: left;
      font-weight: 600;
      font-size: 32px;
      line-height: 32px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};

  h3 {
    font-size: 64px;
    line-height: 68px;
    color: #FFFFFF;

    ${breakpoint({
      mobile: css`
        font-weight: 500;
        font-size: 32px;
        line-height: 32px;
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

const EcosystemContent = styled.div`
  width: 100%;
  margin-top: 64px;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 16px;
  align-items: center;
  //flex-wrap: wrap;

  ${breakpoint({
    mobile: css`
      display: flex;
      flex-direction: column;
      margin-top: 24px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};
`

const EcosystemItem = styled.div`
  padding: 48px;
  height: 332px;
  background: #141414;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${breakpoint({
    mobile: css`
      padding: 16px;
      height: unset;
      border-radius: 16px;
    `,
    tablet: css`
      padding: 16px;
    `,
    tablet_mini: css`
      padding: 16px;
    `
  })};

  &>div:last-child {
    ${breakpoint({
      mobile: css`
        height: 40px;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })};
  }
  
  &>div:first-child {
    div {
      display: flex;
      align-items: center;
      img {
        width: 32px;
        margin-right: 16px;

        ${breakpoint({
          mobile: css`
            width: 24px;
            height: 24px;
            margin-right: 12px;
            justify-content: center;
          `,
          tablet: css`
          `,
          tablet_mini: css`
          `
        })};
      }
      h3 {
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        letter-spacing: 0.008em;
        color: #FFFFFF;

        ${breakpoint({
          mobile: css`
            font-weight:500;
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 0;
          `,
          tablet: css`
            font-weight:500;
            font-size: 22px;
            line-height: 24px;
            margin-bottom: 0;
          `,
          tablet_mini: css`
            font-weight:500;
            font-size: 22px;
            line-height: 24px;
            margin-bottom: 0;
          `
        })};
      }
    }
  }

  span {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    opacity: 0.6;
    display: inline-block;
    margin: 24px 0;

    ${breakpoint({
      mobile: css`
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        margin: 8px 0 12px;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })};
  }
`

const FAQs = styled.div`
  margin-top: 180px;
  width: 100%;

  ${breakpoint({
    mobile: css`
      margin-top: 64px;
      margin-bottom: 64px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};
`

const FAQsTitle = styled.div`
  width: 50%;
  font-weight: 600;
  font-size: 64px;
  line-height: 80px;
  letter-spacing: 0.008em;
  color: #FFFFFF;

  ${breakpoint({
    mobile: css`
      font-weight: 590;
      font-size: 32px;
      line-height: 32px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};
`

const FAQsContent = styled.div`
  margin-top: 64px;

  ${breakpoint({
    mobile: css`
      margin-top: 24px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};
`

const FAQsItem = styled.div`
  border-top: 1px solid #333232;
  padding: 34px 0;

  ${breakpoint({
    mobile: css`
      padding: 16px 0;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};
  
  &>div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    h3 {
      font-weight: 500;
      font-size: 28px;
      line-height: 36px;
      letter-spacing: 0.008em;
      color: #FFFFFF;

      ${breakpoint({
        mobile: css`
          font-weight: 500;
          font-size: 12px;
          line-height: 20px;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
      })};
    }
    img {
      opacity: 0.5;
      &.selected {
        opacity: 1!important;
      }

      ${breakpoint({
        mobile: css`
          width: 20px;
          height: 20px;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
      })};
    }
  }
`

const FAQsItemContent = styled.div`
  div {
    display: flex;
    flex-direction: column;
  }
  span {
    font-family: Inter;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    opacity: 0.6;
    margin-top: 26px;
    display: inline-block;

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

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
