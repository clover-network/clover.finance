import React, {useState, useEffect} from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../mixins/breakpoint";
import { t } from '../i18n/intl';
import { Footer } from './components/Footer';
import { GrayButton, NormalButton } from '../components/Btn';
import { useRouter } from 'next/router';

export const CLVChain: React.FC = () => {
  const location = useRouter();
  const [selectFaq, setSelectFaq] = useState(0)
  const [play, setPlay] = useState(false)
  let intervalRewind: any;

  const rewind = (rewindSpeed: any) => {
    const playVideo: any = document.getElementById('playVideo')
    clearInterval(intervalRewind);
    const startSystemTime = new Date().getTime();
    const startVideoTime = playVideo.currentTime;

    intervalRewind = setInterval(function(){
      playVideo.playbackRate = 1.0;
      if(playVideo.currentTime == 0){
        clearInterval(intervalRewind);
        playVideo.pause();
      } else {
        const elapsed = new Date().getTime()-startSystemTime;
        playVideo.currentTime = Math.max(startVideoTime - elapsed*rewindSpeed/1000.0, 0);
      }
    }, 30);
  }

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
      title: "Why did my CLV Wallet swap fail?",
      content: <div>
        <span>When you execute a swap through CLV Wallet, you interact directly with the liquidity source that offered the best price for your requested trade. The main reason why your swap might have failed is likely to be slippage. When you perform a swap, you agree to a price quote. If the price of the swap goes outside of the allowed slippage set (typically 2.5%), it will fail, in order to prevent you from seeing a huge variance in value when completed. There is a higher risk of slippage if you're trading a pair that includes a volatile asset, as its price is more likely to change while processing the transaction. If your swap fails, you can retry the swap, but this time, input a higher slippage percentage.</span>
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
    let mouseDown
    const isFirefox = navigator.userAgent.indexOf('Firefox') !== -1
    if (isFirefox) {
      if (e.detail > 0) {
        mouseDown = true
      } else {
        mouseDown = false
      }
    } else {
      if (e.wheelDelta > 0) {
        mouseDown = true
      } else {
        mouseDown = false
      }
    }
    if (mouseDown) {
      rewind(1.0)
      return
    }
    const playVideo: any = document.getElementById('playVideo')
    if (window.scrollY > 920 && window.scrollY < 2500 && playVideo.currentTime === 0) {
      setPlay(true)
      playVideo.play()
    }
  }

  useEffect(() => {
    const isFirefox = navigator.userAgent.indexOf('Firefox') !== -1
    const mousewheel = isFirefox ? 'DOMMouseScroll' : 'mousewheel'
    window.addEventListener(mousewheel, handleScroll)
    return () => {
      window.removeEventListener(mousewheel, handleScroll)
    }
  }, [location]);

  return (
      <div id='CLVChain'>
        <Background />
        <LandingContainer>
          <IntrodusingTheCLV>
            <video autoPlay loop muted src='videos/particles.mp4'></video>
            <div>
              <ContentWrapper>
                <TextWrapper>
                  <div>
                    {t('introdusingTheCLV')}
                    <img src='images/clv_icon1.svg' alt='' />
                  </div>
                  <span>{t('introdusingTheCLVHint')}</span>
                </TextWrapper>
              </ContentWrapper>
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
            </div>
          </IntrodusingTheCLV>
          <Content>
            <div>
              <Features>
                <FeaturesTitle>
                  <span>{t('features')}</span>
                  <h3>{t('thatMakesTheDifference')}</h3>
                </FeaturesTitle>
                <FeaturesContent>
                  <FeaturesLeft>
                    <video id='playVideo' autoPlay={play} muted src='videos/CLVDevPageSequence.mp4'></video>
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
                      <FeaturesRightItem>
                        <h3>{t('highStakingReturn')}</h3>
                        <p>Current avg. APY <span>26.62%</span></p>
                        <span>{t('highStakingReturnHint')}</span>
                        <Btns>
                          <NormalButton
                              width='316px'
                              onClick={() => {
                                window.open('https://apps.apple.com/app/clover-wallet/id1570072858', "_blank")
                              }}
                          >{t('stakeOnMobile')}</NormalButton>
                          <GrayButton width='316px'>{t('enterCLVPortal')}</GrayButton>
                        </Btns>
                      </FeaturesRightItem>
                      <FeaturesRightItem>
                        <h3>{t('smartContractsGovernance')}</h3>
                        <span>{t('smartContractsGovernanceHint')}</span>
                      </FeaturesRightItem>
                    </div>
                  </FeaturesRight>
                </FeaturesContent>
              </Features>
              <ClvToken>
                <ClvTokenTop>
                  <div>
                    <div>
                      <span>{t('CLVToken')}</span>
                      <img src='images/clv_icon_green.svg' alt='' />
                    </div>
                    <h3>{t('CLVTokenTitle')}</h3>
                    <span>{t('CLVTokenHint')}</span>
                  </div>
                  <img src='images/clv_token_img.svg' alt='' />
                </ClvTokenTop>
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
                    <NormalButton onClick={() => window.open('https://portal.clv.org')}>{t('visitCLVPortal')}</NormalButton>
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
  }
`

const IntrodusingTheCLV = styled.div`
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
  img {
    width: 68px;
    height: 70px;
    margin-right: 32px;
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
`

const FeaturesTitle = styled.div`
  width: 50%;
  font-weight: 600;
  font-size: 64px;
  line-height: 68px;
  letter-spacing: 0.008em;
  h3 {
    font-size: 64px;
    line-height: 68px;
    color: #FFFFFF;
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

  video {
    width: 100%;
    max-width: 630px;
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
  //background: #0c0b0b;
  border-radius: 32px;
  padding: 48px;
  margin-top: 180px;
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
  }
  &>div {
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: center;
    gap: 20px;
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
`

const Ecosystem = styled.div`
  margin-top: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const EcosystemTitle = styled.div`
  width: 50%;
  font-weight: 600;
  font-size: 64px;
  line-height: 68px;
  letter-spacing: 0.008em;
  text-align: right;

  h3 {
    font-size: 64px;
    line-height: 68px;
    color: #FFFFFF;
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
`

const EcosystemItem = styled.div`
  padding: 48px;
  height: 332px;
  background: #141414;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &>div:first-child {
    div {
      display: flex;
      align-items: center;
      img {
        width: 32px;
        margin-right: 16px;
      }
      h3 {
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        letter-spacing: 0.008em;
        color: #FFFFFF;
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
  }
`

const FAQs = styled.div`
  margin-top: 180px;
  width: 100%;
`

const FAQsTitle = styled.div`
  width: 50%;
  font-weight: 600;
  font-size: 64px;
  line-height: 80px;
  letter-spacing: 0.008em;
  color: #FFFFFF;
`

const FAQsContent = styled.div`
  margin-top: 64px;
`

const FAQsItem = styled.div`
  border-top: 1px solid #333232;
  padding: 34px 0;
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
    }
    img {
      opacity: 0.5;
      &.selected {
        opacity: 1!important;
      }
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
  }
`

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoint(css`
    height: unset;
    min-height: 120vw;
    padding: 48px 0 0;
  `)}
`;
