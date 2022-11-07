import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from "styled-components";
import { breakpoint } from "../mixins/breakpoint";
import { t } from '../i18n/intl';
import { NormalButton, GrayButton } from '../components/Btn';
import CLVIsBacked from './components/CLVBacked';
import { Footer } from './components/Footer';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import {WrapperDesktopOnly, WrapperMobileOnly} from '../CloverLibrary';
import {HeaderMobileMenu} from "../components/newHeader/HeaderMobileMenu";

interface TypeProps {
  startBuild: () => void;
}

export const Main = ({ startBuild }: TypeProps) => {
  const location = useRouter();
  const [isReverse, setIsReserve] = useState(false)
  let videoStatus = 'start'

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
    let playVideo1: any = document.getElementById('playVideo')
    let playVideo2: any = document.getElementById('playVideoReverse')
    const display = playVideo1.style.display
    let playVideo: any = display === 'none' ? playVideo2 : playVideo1

    if (!mouseDown && videoStatus === 'start' && playVideo != playVideo2 && window.scrollY > 1000) {
      playVideo.play()
    }
    if (mouseDown && videoStatus === 'start' && playVideo != playVideo1 && window.scrollY > 1000 && window.scrollY < 2300) {
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


  useEffect(() => {
    let playVideo1: any = document.getElementById('playVideo')
    let playVideo2: any = document.getElementById('playVideoReverse')
    const display = playVideo1.style.display
    let playVideo: any = display === 'none' ? playVideo2 : playVideo1

    playVideo.addEventListener('playing', () => {
      videoStatus = 'playing'
    })
    playVideo.addEventListener('ended', () => {
      videoStatus = 'start'
      setIsReserve(!isReverse)
      playVideo.currentTime = 0
    })
  }, [document, isReverse]);

  return (
    <Wrapper>
      {/*<div style={{width: '200px', height: '200px', background: "red"}}/>*/}
      <LandingContainer>
        <SeamlesslyCompatible>
          <ContentWrapper>
            <TextWrapper>
              <div>
                {t('seamlesslyCompatible')}
                <img src='images/clv_icon1.svg' alt='' />
              </div>
              <span>{t('seamlesslyCompatibleHint')}</span>
              <Btns>
                <NormalButton
                    onClick={() =>
                        startBuild()
                    }
                >{t('startBuilding')}</NormalButton>
                <GrayButton
                    onClick={() =>
                        window.open(
                            "https://docs.clv.org/",
                            "_blank"
                        )
                    }
                >{t('viewDocumentation')}</GrayButton>
              </Btns>
            </TextWrapper>
            <VideoWrapper>
              <video autoPlay loop muted src='videos/heroAnimation.mp4'></video>
            </VideoWrapper>
          </ContentWrapper>
          <BalanceWrapper>
            <BalanceItem>
              <AnimationTextWrapper>
                <span>19,96</span>
                <AnimationTextItem>7</AnimationTextItem>
                <span>,</span>
                <AnimationTextItem delay='0.3s'>9</AnimationTextItem>
                <AnimationTextItem delay='0.5s'>0</AnimationTextItem>
                <AnimationTextItem delay='0.8s'>6</AnimationTextItem>
              </AnimationTextWrapper>
              <span>Total Transactions</span>
            </BalanceItem>
            <BalanceItem>
              <AnimationTextWrapper>
                <span>4,8</span>
                <AnimationTextItem>6</AnimationTextItem>
                <AnimationTextItem delay='0.3s'>7</AnimationTextItem>
              </AnimationTextWrapper>
              <span>Transactions per second</span>
            </BalanceItem>
            <BalanceItem>
              <AnimationTextWrapper>
                <span>$0.00025</span>
              </AnimationTextWrapper>
              <span>Avg. cost per transaction</span>
            </BalanceItem>
            <BalanceItem>
              <AnimationTextWrapper>
                <span>15</span>
                <AnimationTextItem>3</AnimationTextItem>
              </AnimationTextWrapper>
              <span>Validator nodes</span>
            </BalanceItem>
          </BalanceWrapper>
        </SeamlesslyCompatible>
        <Advantages>
          <AdvantagesTitle>
            <h3>{t('AdvantagesForEveryone')}</h3>
            <span>{t('allAtOnce')}</span>
          </AdvantagesTitle>
          <AdvantagesContent>
            <AdvantagesLeft>
              <video style={{ display: isReverse ? 'none' : 'inline-block' }} id='playVideo' muted
                src='videos/CLVMainInteractiveAnimation.mp4'></video>
              <video style={{ display: !isReverse ? 'none' : 'inline-block' }} id='playVideoReverse' muted
                src='videos/CLVMainInteractiveAnimation2.mp4'></video>
            </AdvantagesLeft>
            <AdvantagesRight>
              <div>
                <AdvantagesRightItem>
                  <WrapperMobileOnly>
                    <h3>{t('gasFeeRedistributionTitle')}</h3>
                  </WrapperMobileOnly>
                  <span>{t('gasFeeRedistributionHint1')}</span>
                  <span>{t('gasFeeRedistributionHint2')}</span>
                </AdvantagesRightItem>
                <AdvantagesRightItem>
                  <h3>{t('inventorOfFeeEconomics')}</h3>
                  <span>{t('inventorOfFeeEconomicsHint')}</span>
                </AdvantagesRightItem>
                <AdvantagesRightItem>
                  <h3>{t('EVMCompatible')}</h3>
                  <span>{t('EVMCompatibleHint1')}</span>
                  <span>{t('EVMCompatibleHint2')}</span>
                  <span>{t('EVMCompatibleHint3')}</span>
                </AdvantagesRightItem>
              </div>
            </AdvantagesRight>
            <ForegroundShadow/>
          </AdvantagesContent>
        </Advantages>
        <ToolsOnCLV>
          <ToolsOnCLVTitle>
            <div>
              <h3>{t('toolsOnCLV')}</h3>
              <span>{t('ecosystem')}</span>
            </div>
          </ToolsOnCLVTitle>
          <ToolsOnCLVContent>
            <ToolsOnCLVContentLeft>
              <div>
                <div>{t('forBuilders')}</div>
                <span>{t('forBuildersHint')}</span>
              </div>
              <ToolBtns>
                <WrapperDesktopOnly>
                  <GrayButton
                      margin='0 0 24px'
                      color="#0C0B0B"
                      hoverBackground='#ffffff'
                      disabledBackground='rgba(255, 255, 255, 0.8)'
                      onClick={() =>
                          window.open("https://docs.clv.org/clv-chain-developer-guide/introduction", "_blank")
                      }
                  >{t('readDocs')}</GrayButton>
                  <GrayButton
                      margin='0 0 24px'
                      color="#0C0B0B"
                      hoverBackground='#ffffff'
                      disabledBackground='rgba(255, 255, 255, 0.8)'
                      onClick={() =>
                          window.open("https://github.com/clover-network", "_blank")
                      }
                  >{t('getGithubRepo')}</GrayButton>
                  <GrayButton
                      color="#0C0B0B"
                      hoverBackground='#ffffff'
                      disabledBackground='rgba(255, 255, 255, 0.8)'
                      onClick={() =>
                          window.open("https://docs.clv.org/clv-chain-developer-guide/using-testnet", "_blank")
                      }
                  >{t('viewTestnet')}</GrayButton>
                </WrapperDesktopOnly>
                <WrapperMobileOnly>
                  <GrayButton
                      height='40px'
                      margin='0 0 8px'
                      color="#0C0B0B"
                      hoverBackground='#ffffff'
                      disabledBackground='rgba(255, 255, 255, 0.8)'
                      onClick={() =>
                          window.open("https://docs.clv.org/clv-chain-developer-guide/introduction", "_blank")
                      }
                  >{t('readDocs')}</GrayButton>
                  <GrayButton
                      height='40px'
                      margin='0 0 8px'
                      color="#0C0B0B"
                      hoverBackground='#ffffff'
                      disabledBackground='rgba(255, 255, 255, 0.8)'
                      onClick={() =>
                          window.open("https://github.com/clover-network", "_blank")
                      }
                  >{t('getGithubRepo')}</GrayButton>
                  <GrayButton
                      height='40px'
                      color="#0C0B0B"
                      hoverBackground='#ffffff'
                      disabledBackground='rgba(255, 255, 255, 0.8)'
                      onClick={() =>
                          window.open("https://docs.clv.org/clv-chain-developer-guide/using-testnet", "_blank")
                      }
                  >{t('viewTestnet')}</GrayButton>
                </WrapperMobileOnly>
              </ToolBtns>
            </ToolsOnCLVContentLeft>
            <ToolsOnCLVContentRight>
              <ToolsOnCLVItem>
                <div>
                  <img src='images/clv_icon1.svg' alt='' />
                  <span>{t('integrateCLVWallet')}</span>
                </div>
                <span>{t('integrateCLVWalletHint')}</span>
                <WrapperDesktopOnly>
                  <GrayButton
                      onClick={() => {
                        window.open('https://docs.clv.org/use-clv-wallet/clv-extension-wallet', "_blank")
                      }}
                  >{t('CLVWalletInforamtion')}</GrayButton>
                </WrapperDesktopOnly>
                <WrapperMobileOnly>
                  <GrayButton
                      height='40px'
                      onClick={() => {
                        window.open('https://docs.clv.org/use-clv-wallet/clv-extension-wallet', "_blank")
                      }}
                  >{t('CLVWalletInforamtion')}</GrayButton>
                </WrapperMobileOnly>
              </ToolsOnCLVItem>
              <ToolsOnCLVItem>
                <div>{t('partnerWithCLV')}</div>
                <span>{t('partnerWithCLVHint')}</span>
                <WrapperDesktopOnly>
                  <GrayButton
                      onClick={() => {
                        window.open('https://docs.google.com/forms/d/e/1FAIpQLSfQevVEw_hL44vvbcMkYB8kKdzTFAbtD1pR-QVraaA7h4jpKg/viewform', "_blank")
                      }}
                  >{t('contactUs')}</GrayButton>
                </WrapperDesktopOnly>
                <WrapperMobileOnly>
                  <GrayButton
                      height='40px'
                      onClick={() => {
                        window.open('https://docs.google.com/forms/d/e/1FAIpQLSfQevVEw_hL44vvbcMkYB8kKdzTFAbtD1pR-QVraaA7h4jpKg/viewform', "_blank")
                      }}
                  >{t('contactUs')}</GrayButton>
                </WrapperMobileOnly>

              </ToolsOnCLVItem>
            </ToolsOnCLVContentRight>
          </ToolsOnCLVContent>
        </ToolsOnCLV>
        <CLVIsBacked />
      </LandingContainer>
      {/*<Footer />*/}
    </Wrapper>
  );
};

const ForegroundShadow = styled.div`
  ${breakpoint({
    mobile: css`
      position: absolute;
      height: 90px;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg, rgba(57, 57, 57, 0) -8.93%, #000000 100%);
      flex: none;
      order: 3;
      flex-grow: 0;
      z-index: 3;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};
`

const SeamlesslyCompatible = styled.div`
  width: 100%;
  position: relative;
  background-color: #000000;

  ${breakpoint({
    mobile: css`
      display: flex;
      flex-direction: column;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};
`
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  height: 100%;

  ${breakpoint({
    mobile: css`
      flex-direction: column;
      padding-top: 0;
      height: 560px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};
`;

const TextWrapper = styled.div`
  width: 50%;
  padding-top: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 16px;
  min-height: 680px;

  ${breakpoint({
    mobile: css`
      min-height: 0;
      width: 100%;
      padding: 0 24px;
      position: absolute;
      left: 0;
      right: 0;
      top: 160px;
      z-index: 1;
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
        font-weight: 590;
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
        margin: 80px 0 24px;
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

const Btns = styled.div`
  display: flex;
  align-items: center;

  ${breakpoint({
    mobile: css`
      flex-direction: column;
    `,
    tablet: css`
      flex: 1;
    `,
    tablet_mini: css`
    `
  })};
  
  div {
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

  div:first-child {
    margin-right: 16px;

    ${breakpoint({
      mobile: css`
        margin-bottom: 16px;
        margin-right: 0;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })};
  }
`

const BalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;

  ${breakpoint({
    mobile: css`
      margin-top: 40px;
      padding: 0 24px;
      flex-direction: column;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};
`;

const BalanceItem = styled.div`
  display: flex;
  flex-direction: column;
  background: #141414;
  border-radius: 32px;
  padding: 20px;
  margin-right: 16px;
  flex: 1;
  border: 2px solid transparent;

  ${breakpoint({
    mobile: css`
      flex: 1;
      width: 100%;
      margin: 4px 0;
      padding: 21px 16px;
      border-radius: 16px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};

  &:hover {
    border: 2px solid #0C0B0B;
  }

  &:last-child {
    margin: 0;

    ${breakpoint({
      mobile: css`
        margin: 4px 0;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })};
  }

  h3 {
    font-family: RobotoFlex;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    margin: 0;
  }

  & > span {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    opacity: 0.6;

    ${breakpoint({
      mobile: css`
        font-size: 12px;
        margin-top: 4px;
        line-height: 12px;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })};
  }
`;

const AnimationTextWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;

  span, div {
    font-weight: 590;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.008em;
    color: #FFFFFF;

    ${breakpoint({
      mobile: css`
        font-size: 16px;
        line-height: 16px;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })};

  }
`

const AnimationTextItem = styled.div<{
  delay?: string
}>`
  animation: textUp 0.3s ease-in-out both;
  animation-delay: ${({ delay }) => (delay ? delay : 0)};

  @keyframes textUp {
    0% {
      transform: translateY(40px);
    }

    100% {
      transform: translateY(0);
    }
  }
`

const VideoWrapper = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;

  video {
    width: 100%;
    max-width: 630px;
  }

  ${breakpoint({
    mobile: css`
      top: 0;
      width: 100%;
      padding: 24px;
    `,
    tablet: css`
      width: 50%;
    `,
    tablet_mini: css`
      width: 50%;
    `
  })};
`;

const Advantages = styled.div`
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

const AdvantagesTitle = styled.div`
  width: 50%;
  font-weight: 600;
  font-size: 64px;
  line-height: 68px;
  letter-spacing: 0.008em;

  ${breakpoint({
    mobile: css`
      width: 100%;
      padding-left: 24px;
      font-size: 32px;
      line-height: 32px;
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
    color: #9BDAF6;
  }
`

const AdvantagesContent = styled.div`
  width: 100%;
  display: flex;
  margin-top: 64px;

  ${breakpoint({
    mobile: css`
      position: relative;
      height: 470px;
      justify-content: center;
      margin-top: 0;
      overflow: hidden;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};
`

const AdvantagesLeft = styled.div`
  width: 50%;
  margin-right: 16px;

  ${breakpoint({
    mobile: css`
      position: absolute;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};

  video {
    width: 100%;
    max-width: 630px;
  }
`

const AdvantagesRight = styled.div`
  width: 50%;

  ${breakpoint({
    mobile: css`
      width: 100%;
      top: 230px;
      position: absolute;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};

  & > div {
    & > div:last-child {
      margin-bottom: 0;
    }
  }
`

const AdvantagesRightItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;

  ${breakpoint({
    mobile: css`
      padding: 0 24px;
      margin-bottom: 16px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};

  h3 {
    font-weight: 600;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    margin-bottom: 32px;

    ${breakpoint({
      mobile: css`
        font-weight: 590;
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 8px;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })};
  }

  & > span {
    font-family: Inter;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    margin-bottom: 20px;

    ${breakpoint({
      mobile: css`
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 0px;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })};

    &:last-child {
      margin: 0 !important;
    }
  }

  & > div {
    margin-top: 12px;

    ${breakpoint({
      mobile: css`
        margin-top: 8px;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })};
  }
`

const ToolsOnCLV = styled.div`
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

const ToolsOnCLVTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  ${breakpoint({
    mobile: css`
      flex-direction: column;
      justify-content: flex-start;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};

  & > div {
    width: 50%;
    font-weight: 600;
    font-size: 64px;
    line-height: 68px;
    letter-spacing: 0.008em;
    margin-bottom: 64px;
    text-align: right;

    ${breakpoint({
      mobile: css`
        width: 100%;
        font-size: 32px;
        line-height: 32px;
        text-align: start;
        padding-left: 24px;
        margin-bottom: 24px;
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
  }
`

const ToolsOnCLVContent = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;

  ${breakpoint({
    mobile: css`
      flex-direction: column;
      padding: 0 24px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};
`

const ToolsOnCLVContentLeft = styled.div`
  margin-right: 16px;
  flex: 0 0 50%;
  padding: 48px;
  background: #141414;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(28.19deg, #BDFDE2 -14.72%, #9BDAF6 116.35%);

  ${breakpoint({
    mobile: css`
      margin: 0 0 8px;
      padding: 16px;
      border-radius: 16px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};

  & > div:first-child {
    div {
      color: #141414;
      font-weight: 600;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 0.008em;

      ${breakpoint({
        mobile: css`
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
      color: #141414;
      opacity: 0.6;
      margin: 24px 0;
      display: inline-block;

      ${breakpoint({
        mobile: css`
          margin: 8px 0;
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

const ToolsOnCLVContentRight = styled.div`
  flex: 0 0 50%;

  & > div:first-child {
    margin-bottom: 16px;

    ${breakpoint({
      mobile: css`
        margin-bottom: 8px;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })};
  }
`

const ToolsOnCLVItem = styled.div`
  background: #141414;
  border-radius: 32px;
  padding: 48px;
  min-height: 304px;

  ${breakpoint({
    mobile: css`
      border-radius: 16px;
      padding: 16px;
      min-height: 0px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};

  & > div:first-child {
    display: flex;
    align-items: center;

    img {
      width: 32px;
      margin-right: 16px;

      ${breakpoint({
        mobile: css`
          width: 24px;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
      })};
    }

    color: #FFFFFF;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.008em;

    ${breakpoint({
      mobile: css`
        font-size: 16px;
        line-height: 24px;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })};
  }

  & > span {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    opacity: 0.6;
    margin: 24px 0;
    display: inline-block;

    ${breakpoint({
      mobile: css`
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        margin: 8px 0;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })};
  }
`

const ToolBtns = styled.div`
  display: flex;
  flex-direction: column;
`

// this is a full height container that contains the Navbar, the Hero, and the bitcoin price
// when a user first visits the site this portion should take up 100% height

const Wrapper = styled.div`
  background: #000000;
  height: 100vh;
  width: 100%;
`

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 64px 64px;
  margin: 0 auto;
  background: #000000;

  ${breakpoint({
    mobile: css`
      padding: 0;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })}
`;
