import React, { useEffect, useState } from 'react';
import styled, { css } from "styled-components";
import { breakpoint } from "../mixins/breakpoint";
import { t } from '../i18n/intl';
import { NormalButton, GrayButton } from '../components/Btn';
import CLVIsBacked from './components/CLVBacked';
import { Footer } from './components/Footer';
import { useRouter } from 'next/router';

export const Main: React.FC = () => {
  const location = useRouter();
  const [play, setPlay] = useState(false)

  const handleScroll = () => {
    const playVideo: any = document.getElementById('playVideo1')
    if (window.scrollY <= 800) {
      playVideo.currentTime = 0
    } else if (window.scrollY > 800 && window.scrollY < 2500) {
      setPlay(true)
      playVideo.play()
      setTimeout(() => {
        setPlay(false)
        playVideo.pause()
      }, playVideo.duration * 1000 / 3)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location]);
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
                      window.open(
                        "https://docs.google.com/forms/d/e/1FAIpQLSfQevVEw_hL44vvbcMkYB8kKdzTFAbtD1pR-QVraaA7h4jpKg/viewform",
                        "_blank"
                      )
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
              <h3>84,309,967,906</h3>
              <span>Total Transactions</span>
            </BalanceItem>
            <BalanceItem>
              <h3>24,867</h3>
              <span>Transactions per second</span>
            </BalanceItem>
            <BalanceItem>
              <h3>$0.00025</h3>
              <span>Avg. cost per transaction</span>
            </BalanceItem>
            <BalanceItem>
              <h3>12,853</h3>
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
              <video id='playVideo1' autoPlay={play} loop muted src='videos/CLVMainInteractiveAnimation.mp4'></video>
            </AdvantagesLeft>
            <AdvantagesRight>
              <AdvantagesRightItem>
                <h3>{t('gasFeeRedistribution')}</h3>
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
                  onClick={() =>
                    window.open("https://docs.clv.org/clv-chain-developer-guide/introduction", "_blank")
                  }
                >{t('readDocs')}</GrayButton>
                <GrayButton
                  margin='0 0 24px'
                  onClick={() =>
                    window.open("https://github.com/clover-network", "_blank")
                  }
                >{t('getGithubRepo')}</GrayButton>
                <GrayButton
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
  
  &:last-child {
    margin: 0;
  }
  
  h3 {
    font-family: RobotoFlex;
    font-weight: 590;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    margin: 0;
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
  &>div:last-child {
    margin-bottom: 0;
  }
`

const AdvantagesRightItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
  h3 {
    font-weight: 590;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    margin-bottom: 32px;
  }
  
  & > span {
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
    font-weight: 590;
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
  &>div:first-child {
    div {
      color: #FFFFFF;
      font-weight: 590;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 0.008em;
    }
    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.006em;
      color: #FFFFFF;
      opacity: 0.6;
      margin: 24px 0;
      display: inline-block;
    }
  }
`

const ToolsOnCLVContentRight = styled.div`
  flex: 0 0 50%;
  &>div:first-child {
    margin-bottom: 16px;
  }
`

const ToolsOnCLVItem = styled.div`
  background: #141414;
  border-radius: 32px;
  padding: 48px;
  min-height: 304px;

  &>div:first-child {
    display: flex;
    align-items: center;
    img {
      width: 32px;
      margin-right: 16px;
    }
    color: #FFFFFF;
    font-weight: 590;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.008em;
  }
  &>span {
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
  max-width: 1440px;
  min-width: 1440px;
  margin: 0 auto;

  ${breakpoint(css`
    height: unset;
    min-height: 120vw;
    padding: 48px 0 0;
  `)}
`;
