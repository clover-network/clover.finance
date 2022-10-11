import React from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../mixins/breakpoint";
import { t } from '../i18n/intl';
import { Footer } from './components/Footer';
import { GrayButton, NormalButton } from '../components/Btn';

export const Ecosystem: React.FC = () => {
  const ecosystems = [
    {
      icon: 'images/game_fi.png',
      name: 'GameFi'
    }, {
      icon: 'images/de_fi.png',
      name: 'DeFi'
    }, {
      icon: 'images/exchange.png',
      name: 'Cross Chain Exchange'
    }, {
      icon: 'images/nfts.png',
      name: 'NFT’s'
    }, {
      icon: 'images/metaverse.png',
      name: 'Metaverse'
    },
  ]

  const dAppFeatures = [
    {
      content: 'CLV Wallet(Extension, Mobile, Web)'
    }, {
      content: 'CLV Multi-chain Explorer'
    }, {
      content: 'CLV Cross-chain Bridge'
    }, {
      content: 'CLV dApp interatctive protocol, wallet SDK'
    }, {
      content: 'CLV Service API'
    },
  ]

  const products = [
    {
      icon: 'images/product1.svg',
      title: 'Killswitch',
      content: 'Mutichain Yield Aggregator with Stoploss & Takeprofit',
      url: 'https://www.killswitch.finance/'
    }, {
      icon: 'images/product2.svg',
      title: 'SSAP',
      content: 'An open-source noncustodial lending protocol',
      url: 'https://app.ssap.finance/dashboard'
    }, {
      icon: 'images/product3.svg',
      title: 'Huckleberry',
      content: 'Huckleberry is your community DEX and lendin\' platform',
      url: 'https://www.huckleberry.finance/'
    }, {
      icon: 'images/product4.svg',
      title: 'O3Swap',
      content: 'Cross-chain Aggregation Protocol',
      url: 'https://o3swap.com/'
    },
  ]

  const clvChains = [
    {
      icon: 'images/clv_chain1.png',
      content: 'Cross chain Modules'
    }, {
      icon: 'images/clv_chain2.png',
      content: 'Governance'
    }, {
      icon: 'images/clv_chain3.png',
      content: 'EVM Economics Incentive'
    }, {
      icon: 'images/clv_chain4.png',
      content: 'Smart Contract On-chain upgrade'
    }, {
      icon: 'images/clv_chain5.png',
      content: 'Account Binding'
    },
  ]
  return (
    <div>
      <Background />
      <LandingContainer>
        <EnterWeb3>
          <video autoPlay loop muted src='videos/particles.mp4'></video>
          <div>
            <ContentWrapper>
              <TextWrapper>
                <div>
                  {t('theCLVInfrastructure')}
                  <img src='images/clv_icon1.svg' alt='' />
                </div>
              </TextWrapper>
            </ContentWrapper>
            <ContentBottom>
              <ContentBottomTitle>{t('CLVDAppEcosystem')}</ContentBottomTitle>
              <ContentBottomContent>
                <ContentBottomTop>
                  {ecosystems.map((item, index) => (
                    <ContentBottomItem
                      key={`ecosystem_${index}`}
                      className={index === 2 ? 'selected' : ''}
                    >
                      <img src={item.icon} alt='' />
                      <span>{item.name}</span>
                    </ContentBottomItem>
                  ))}
                </ContentBottomTop>
                <ContentBottomBottom>
                  <span>{t('dAppFeatures')}</span>
                  <div>
                    {dAppFeatures.map((item, index) => (
                      <DAppFeaturesItem
                        key={`dAppFeatures_${index}`}
                        className={index === 2 ? 'selected' : ''}
                      >
                        <span>{item.content}</span>
                      </DAppFeaturesItem>
                    ))}
                  </div>
                </ContentBottomBottom>
              </ContentBottomContent>
            </ContentBottom>
          </div>
        </EnterWeb3>
        <Content>
          <div>
            <CLVChain>
              <CLVChainTitle>
                <h3>{t('CLVChain')}</h3>
                <span>{t('CLVChainSpan')}</span>
              </CLVChainTitle>
              <CLVChainContent>
                {clvChains.map((item, index) => (
                  <CLVChainItem
                    key={`CLVChain_${index}`}
                  >
                    <img src={item.icon} alt='' />
                    <span>{item.content}</span>
                  </CLVChainItem>
                ))}
              </CLVChainContent>
            </CLVChain>
            <ProductSolution>
              <ProductSolutionLeft>
                {products.map((item, index) => (
                  <ProductSolutionItem
                    onClick={() => {
                      window.open(item.url, "_blank")
                    }}
                  >
                    <img src={item.icon} alt='' />
                    <div>
                      <h3>{item.title}</h3>
                      <span>{item.content}</span>
                    </div>
                  </ProductSolutionItem>
                ))}
              </ProductSolutionLeft>
              <ProductSolutionRight>
                <h3>{t('productSolution')}</h3>
                <span>{t('productSolutionHint')}</span>
                <NormalButton
                  onClick={() => {
                    window.open('https://docs.clv.org/clover-ecosystem/ecosystem-partners', "_blank")
                  }}
                >{t('moreProduct')}</NormalButton>
              </ProductSolutionRight>
            </ProductSolution>
            <ToolsOnCLV>
              <ToolsOnCLVTitle>
                <h3>{t('toolsOnCLV')}</h3>
                <span>{t('ecosystem')}</span>
              </ToolsOnCLVTitle>
              <ToolsOnCLVContent>
                <ToolsOnCLVItem>
                  <div>
                    <img src='images/clv_icon1.svg' alt='' />
                    <span>{t('integrateCLVWallet')}</span>
                  </div>
                  <span>{t('integrateCLVWalletHint')}</span>
                  <NormalButton
                    onClick={() =>
                      window.open(
                        "https://docs.clv.org/clover-wallet/dapp-integration",
                        "_blank"
                      )
                    }
                  >{t('integrate')}</NormalButton>
                </ToolsOnCLVItem>
                <ToolsOnCLVItem>
                  <div>{t('buildWithCLV')}</div>
                  <span>{t('buildWithCLVHint')}</span>
                  <GrayButton
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/forms/u/3/d/e/1FAIpQLSfQevVEw_hL44vvbcMkYB8kKdzTFAbtD1pR-QVraaA7h4jpKg/viewform",
                        "_blank"
                      )
                    }
                  >{t('startBuilding')}</GrayButton>
                </ToolsOnCLVItem>
                <ToolsOnCLVItem>
                  <div>{t('CLVPortal')}</div>
                  <span>{t('CLVPortalHint2')}</span>
                  <GrayButton>{t('learnMore')}</GrayButton>
                </ToolsOnCLVItem>
                <ToolsOnCLVItem>
                  <div>{t('forBuilders')}</div>
                  <span>{t('forBuildersHint')}</span>
                  <Btns>
                    <GrayButton
                      width='316px'
                      onClick={() =>
                        window.open("https://github.com/clover-network", "_blank")
                      }
                    >{t('getGithub')}</GrayButton>
                    <GrayButton
                      width='316px'
                      onClick={() =>
                        window.open("https://docs.clover.finance/", "_blank")
                      }
                    >{t('readDocs')}</GrayButton>
                  </Btns>
                </ToolsOnCLVItem>
              </ToolsOnCLVContent>
            </ToolsOnCLV>
          </div>
        </Content>
      </LandingContainer>
      <Footer />
    </div>
  );
};

const Background = styled.div`
  background: #000000;
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
`

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

const EnterWeb3 = styled.div`
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
  padding-top: 240px;
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
  margin-top: 128px;
  width: 100%;
  padding: 40px 40px 20px;
  background: #141414;
  border-radius: 30px;
`;

const ContentBottomTitle = styled.div`
  font-weight: 590;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.008em;
  color: #FFFFFF;
  margin-bottom: 50px;
  padding: 10px 24px;
`;

const ContentBottomContent = styled.div`
  width: 100%;
`;

const ContentBottomTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const ContentBottomBottom = styled.div`
  &>span {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.026em;
    color: rgba(255, 255, 255, 0.6);
    display: inline-block;
    margin: 10px 0;
  }
  &>div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`

const ContentBottomItem = styled.div`
  background: #0C0B0B;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #333232;
  height: 210px;
  width: 230px;
  padding: 24px;
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.006em;
  color: #FFFFFF;
  &:first-child {
    img {
      margin-top: -60px;
    }
  }
  img {
    width: 160px;
    margin-bottom: 8px;
    margin-top: -40px;
  }
  span {
    word-break: break-word;
  }
`;


const DAppFeaturesItem = styled.div`
  height: 116px;
  padding: 16px;
  width: 230px;
  background: #0E0D0D;
  border: 1px solid #333232;
  border-radius: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-word;
  span {
    font-family: Inter;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.006em;
    color: #FFFFFF;
  }
`

const Btns = styled.div`
  display: flex;
  align-items: center;
  div:first-child {
    margin-right: 16px;
  }
`

const CLVChain = styled.div`
  width: 100%;
  margin-top: 24px;
  background: #141414;
  border-radius: 30px;
  padding: 40px;
`

const CLVChainTitle = styled.div`
  width: 35%;
  h3 {
    font-weight: 590;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    margin: 0 0 24px;
  }
  
  span {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
  }
`

const CLVChainContent = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
`

const CLVChainItem = styled.div`
  height: 210px;
  width: 230px;
  padding: 24px;
  background: #000000;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #333232;
  
  span {
    font-family: Inter;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    word-break: break-word;
  }
`

const ProductSolution = styled.div`
  width: 100%;
  margin-top: 140px;
  display: flex;
  align-items: center;
`

const ProductSolutionLeft = styled.div`
  width: 50%;
  margin-right: 72px;
  background: #141414;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 32px;
  &>div:last-child {
    border: none;
  }
`

const ProductSolutionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  &:hover {
    background: #0c0b0b;
  }
  & > div {
    font-family: Inter;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    margin-left: 24px;
    
    span {
      font-weight: 400;
      opacity: 0.6;
    }
  }
`

const ProductSolutionRight = styled.div`
  width: 50%;
  h3 {
    font-weight: 590;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
  }
  span {
    font-family: Inter;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    display: inline-block;
    margin: 24px 0;
  }
`

const ToolsOnCLV = styled.div`
  margin-top: 180px;
  width: 100%;
`

const ToolsOnCLVTitle = styled.div`
  width: 50%;
  font-weight: 590;
  font-size: 64px;
  line-height: 68px;
  letter-spacing: 0.008em;
  margin-bottom: 64px;
  h3 {
    color: #FFFFFF;
    font-size: 64px;
    line-height: 68px;
  }
  span {
    color: #BDFDE2;
  }
`

const ToolsOnCLVContent = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  
  &>div:first-child, &>div:nth-child(2) {
    height: 304px!important;
  }
`

const ToolsOnCLVItem = styled.div`
  background: #141414;
  border-radius: 32px;
  padding: 48px;
  height: 360px;
  
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
