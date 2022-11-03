import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from "styled-components";
import { breakpoint } from "../mixins/breakpoint";
import { t } from '../i18n/intl';
import { NormalButton, GrayButton } from '../components/Btn';
import CLVIsBacked from './components/CLVBacked';
import { Footer } from './components/Footer';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <LandingContainer>
        <SeamlesslyCompatible>
          <div>
            <ContentWrapper>
              <TextWrapper>
                <div>
                  {t('seamlesslyCompatible')}
                  <img src='images/clv_icon1.svg' alt='' />
                </div>
                <span>{t('seamlesslyCompatibleHint')}</span>
                <Btns>
                  <NormalButton
                    width='316px'
                    onClick={() =>
                      startBuild()
                    }
                  >{t('startBuilding')}</NormalButton>
                  <GrayButton
                    width='316px'
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
          </div>
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
              </ToolBtns>
            </ToolsOnCLVContentLeft>
            <ToolsOnCLVContentRight>
              <ToolsOnCLVItem>
                <div>
                  <img src='images/clv_icon1.svg' alt='' />
                  <span>{t('integrateCLVWallet')}</span>
                </div>
                <span>{t('integrateCLVWalletHint')}</span>
                <GrayButton
                  onClick={() => {
                    window.open('https://docs.clv.org/use-clv-wallet/clv-extension-wallet', "_blank")
                  }}
                >{t('CLVWalletInforamtion')}</GrayButton>
              </ToolsOnCLVItem>
              <ToolsOnCLVItem>
                <div>{t('partnerWithCLV')}</div>
                <span>{t('partnerWithCLVHint')}</span>
                <GrayButton
                  onClick={() => {
                    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfQevVEw_hL44vvbcMkYB8kKdzTFAbtD1pR-QVraaA7h4jpKg/viewform', "_blank")
                  }}
                >{t('contactUs')}</GrayButton>
              </ToolsOnCLVItem>
            </ToolsOnCLVContentRight>
          </ToolsOnCLVContent>
        </ToolsOnCLV>
        <CLVIsBacked />
      </LandingContainer>
      <Footer />
    </Wrapper>
  );
};

const SeamlesslyCompatible = styled.div`
  width: 100%;
  position: relative;

`
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 100px;
  position: relative;

  ${breakpoint(css`
    width: unset;
    flex-direction: column;
    margin-left: 0;
  `)};
`;

const TextWrapper = styled.div`
  width: 50%;
  padding-top: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 16px;
  min-height: 680px;

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

const Btns = styled.div`
  display: flex;
  align-items: center;

  div:first-child {
    margin-right: 16px;
  }
`

const BalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
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

  &:hover {
    border: 2px solid #0C0B0B;
  }

  &:last-child {
    margin: 0;
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

// export const AnimationText = styled.div<{
//     height?: string,
// }>`
//   height: ${({height}) => (height ? height : '40px')};
//
//   & > div:nth-child(odd) {
//     &.down.go .front:before {
//       animation-delay: 0.4s;
//     }
//
//     &.down.go .back:after {
//       animation-delay: 0.4s;
//     }
//   }
//
//   & > div:last-child, & > div:first-child {
//     &.down.go .front:before {
//       animation-delay: 0.2s;
//     }
//
//     &.down.go .back:after {
//       animation-delay: 0.2s;
//     }
//   }
// `
//
// export const AnimationItem = styled.div<{
//     color?: string,
//     height?: string,
//     width?: string,
//     fontSize?: string
//     background?: string
// }>`
//   display: inline-block;
//   position: relative;
//   width: ${({width}) => (width ? width : '20px')};
//   height: ${({height}) => (height ? height : '40px')};
//   line-height: ${({height}) => (height ? height : '40px')};
//   color: ${({color}) => (color ? color : '#fff')};
//   font-size: ${({fontSize}) => (fontSize ? fontSize : '32px')};
//   text-align: center;
//
//   .digital:before,
//   .digital:after {
//     content: "";
//     position: absolute;
//     left: 0;
//     right: 0;
//     background: ${({background}) => (background ? background : '#141414')};
//     overflow: hidden;
//     box-sizing: border-box;
//   }
//
//   .digital:before {
//     top: 0;
//     bottom: 50%;
//   }
//
//   .digital:after {
//     top: 50%;
//     bottom: 0;
//     line-height: 0;
//   }
//
//   .null:before,
//   .null:after {
//     content: " ";
//   }
//
//   .number0:before,
//   .number0:after {
//     content: "0";
//   }
//
//   .number1:before,
//   .number1:after {
//     content: "1";
//   }
//
//   .number2:before,
//   .number2:after {
//     content: "2";
//   }
//
//   .number3:before,
//   .number3:after {
//     content: "3";
//   }
//
//   .number4:before,
//   .number4:after {
//     content: "4";
//   }
//
//   .number5:before,
//   .number5:after {
//     content: "5";
//   }
//
//   .number6:before,
//   .number6:after {
//     content: "6";
//   }
//
//   .number7:before,
//   .number7:after {
//     content: "7";
//   }
//
//   .number8:before,
//   .number8:after {
//     content: "8";
//   }
//
//   .number9:before,
//   .number9:after {
//     content: "9";
//   }
//
//   .point:before,
//   .point:after {
//     content: ".";
//   }
//
//   .comma:before,
//   .comma:after {
//     content: ",";
//   }
//
//   .dollar:before,
//   .dollar:after {
//     content: "$";
//   }
//
//   &.down .front:before {
//     z-index: 3;
//   }
//
//   &.down .back:after {
//     z-index: 2;
//     transform-origin: 50% 0%;
//     transform: perspective(160px) rotateX(180deg);
//   }
//
//   &.down .front:after,
//   &.down .back:before {
//     z-index: 1;
//   }
//
//   &.down.go .front:before {
//     transform-origin: 50% 100%;
//     animation: frontFlipDown 0.4s ease-in-out both;
//     box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
//     backface-visibility: hidden;
//     animation-iteration-count: 3;
//   }
//
//   &.down.go .back:after {
//     animation: backFlipDown 0.4s ease-in-out both;
//     animation-iteration-count: 3;
//
//   }
//
//   @keyframes frontFlipDown {
//     0% {
//       transform: perspective(160px) rotateX(0deg);
//     }
//
//     100% {
//       transform: perspective(160px) rotateX(-180deg);
//     }
//   }
//
//   @keyframes backFlipDown {
//     0% {
//       transform: perspective(160px) rotateX(180deg);
//     }
//
//     100% {
//       transform: perspective(160px) rotateX(0deg);
//     }
//   }
// `

const VideoWrapper = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  top: 100px;

  video {
    width: 100%;
    max-width: 630px;
  }
`;

const Advantages = styled.div`
  margin-top: 180px;
  width: 100%;
`

const AdvantagesTitle = styled.div`
  width: 50%;
  font-weight: 600;
  font-size: 64px;
  line-height: 68px;
  letter-spacing: 0.008em;

  h3 {
    color: #FFFFFF;
    font-size: 64px;
    line-height: 68px;
  }

  span {
    color: #9BDAF6;
  }
`

const AdvantagesContent = styled.div`
  width: 100%;
  display: flex;
  margin-top: 64px;
`

const AdvantagesLeft = styled.div`
  width: 50%;
  margin-right: 16px;

  video {
    width: 100%;
    max-width: 630px;
  }
`

const AdvantagesRight = styled.div`
  width: 50%;

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

  h3 {
    font-weight: 600;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    margin-bottom: 32px;
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
      margin: 0 !important;
    }
  }

  & > div {
    margin-top: 12px;
  }
`

const ToolsOnCLV = styled.div`
  margin-top: 180px;
  width: 100%;
`

const ToolsOnCLVTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & > div {
    width: 50%;
    font-weight: 600;
    font-size: 64px;
    line-height: 68px;
    letter-spacing: 0.008em;
    margin-bottom: 64px;
    text-align: right;

    h3 {
      color: #FFFFFF;
      font-size: 64px;
      line-height: 68px;
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

  & > div:first-child {
    div {
      color: #141414;
      font-weight: 600;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 0.008em;
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
    }
  }
`

const ToolsOnCLVContentRight = styled.div`
  flex: 0 0 50%;

  & > div:first-child {
    margin-bottom: 16px;
  }
`

const ToolsOnCLVItem = styled.div`
  background: #141414;
  border-radius: 32px;
  padding: 48px;
  min-height: 304px;

  & > div:first-child {
    display: flex;
    align-items: center;

    img {
      width: 32px;
      margin-right: 16px;
    }

    color: #FFFFFF;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.008em;
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
`
const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 64px 64px;
  //max-width: 1440px;
  //min-width: 1440px;
  margin: 0 auto;

  ${breakpoint({
  mobile: css`
    height: unset;
    min-height: 120vw;
    padding: 48px 0 0;
    max-width: 375px;
  `,
  tablet: css`
    max-width: 1024px;
    `,
  tablet_mini: css`
    max-width: 744px;
  `
})}
`;
