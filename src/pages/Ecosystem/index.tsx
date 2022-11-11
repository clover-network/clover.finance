import React, {useEffect} from 'react';
import { t } from '../../i18n/intl';
import { Footer } from '../components/Footer';
import {
  Background,
  Content,
  EnterWeb3,
  ContentWrapper,
  TextWrapper,
  ContentBottom,
  ContentBottomTitle,
  ContentBottomContent,
  ContentBottomTop,
  ContentBottomBottom,
  ContentBottomItem,
  DAppFeaturesItem,
  Btns,
  CLVChain,
  CLVChainTitle,
  CLVChainContent,
  CLVChainItem,
  ProductSolution,
  ProductSolutionLeft,
  ProductSolutionItem,
  ProductSolutionRight,
  ToolsOnCLV,
  ToolsOnCLVTitle,
  ToolsOnCLVContent,
  ToolsOnCLVItem,
  LandingContainer,
  StyledNormalButton,
  StyledGrayButton,
  Mobile,
  Wrapper,
} from './styled';
import {isMobile} from "react-device-detect";
// @ts-ignore
import enableInlineVideo from 'iphone-inline-video';

export const Ecosystem: React.FC = () => {
  const ecosystems = [
    {
      icon: 'images/game_fi.png',
      name: 'GameFi',
    },
    {
      icon: 'images/de_fi.png',
      name: 'DeFi',
    },
    {
      icon: 'images/exchange.png',
      name: 'Cross Chain Exchange',
    },
    {
      icon: 'images/nfts.png',
      name: 'NFT’s',
    },
    {
      icon: 'images/metaverse.png',
      name: 'Metaverse',
    },
  ];

  const dAppFeatures = [
    {
      content: 'CLV Wallet(Extension, Mobile, Web)',
    },
    {
      content: 'CLV Multi-chain Explorer',
    },
    {
      content: 'CLV Cross-chain Bridge',
    },
    {
      content: 'CLV dApp interatctive protocol, wallet SDK',
    },
    {
      content: 'CLV Service API',
    },
  ];

  const products = [
    {
      icon: 'images/product1.svg',
      title: 'Killswitch',
      content: 'Mutichain Yield Aggregator with Stoploss & Takeprofit',
      url: 'https://www.killswitch.finance/',
    },
    {
      icon: 'images/product2.svg',
      title: 'SSAP',
      content: 'An open-source noncustodial lending protocol',
      url: 'https://app.ssap.finance/dashboard',
    },
    {
      icon: 'images/product3.svg',
      title: 'Huckleberry',
      content: "Huckleberry is your community DEX and lendin' platform",
      url: 'https://www.huckleberry.finance/',
    },
    {
      icon: 'images/product4.svg',
      title: 'O3Swap',
      content: 'Cross-chain Aggregation Protocol',
      url: 'https://o3swap.com/',
    },
  ];

  const clvChains = [
    {
      icon: 'images/clv_chain1.png',
      content: 'Cross chain Modules',
    },
    {
      icon: 'images/clv_chain2.png',
      content: 'Governance',
    },
    {
      icon: 'images/clv_chain3.png',
      content: 'EVM Economics Incentive',
    },
    {
      icon: 'images/clv_chain4.png',
      content: 'Smart Contract On-chain upgrade',
    },
    {
      icon: 'images/clv_chain5.png',
      content: 'Account Binding',
    },
  ];

  useEffect(() => {
    if (isMobile) {
      const video = document.querySelector('video');
      enableInlineVideo(video);
    }
  })

  return (
    <Wrapper>
      <Background />
      <LandingContainer>
        <EnterWeb3>
          <video playsInline autoPlay loop muted src="videos/particles.mp4"></video>
          <div>
            <ContentWrapper>
              <TextWrapper>
                <div>
                  {t('theCLVInfrastructure')}
                  <img src="images/clv_icon1.svg" alt="" />
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
                      <img src={item.icon} alt="" />
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
                  <CLVChainItem key={`CLVChain_${index}`}>
                    <img src={item.icon} alt="" />
                    <span>{item.content}</span>
                  </CLVChainItem>
                ))}
              </CLVChainContent>
            </CLVChain>
            <ProductSolution>
              <Mobile>
                <h3>{t('productSolution')}</h3>
                <span>{t('productSolutionHint')}</span>
              </Mobile>
              <ProductSolutionLeft>
                {products.map((item, index) => (
                  <ProductSolutionItem
                    onClick={() => {
                      window.open(item.url, '_blank');
                    }}
                  >
                    <img src={item.icon} alt="" />
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
                <StyledNormalButton
                  onClick={() => {
                    window.open(
                      'https://docs.clv.org/clover-ecosystem/ecosystem-partners',
                      '_blank',
                    );
                  }}
                >
                  {t('moreProduct')}
                </StyledNormalButton>
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
                    <div>
                      <img src="images/clv_icon1.svg" alt="" />
                      <span>{t('integrateCLVWallet')}</span>
                    </div>
                    <span>{t('integrateCLVWalletHint')}</span>
                  </div>
                  <StyledNormalButton
                    onClick={() =>
                      window.open(
                        'https://docs.clv.org/clover-wallet/dapp-integration',
                        '_blank',
                      )
                    }
                  >
                    {t('integrate')}
                  </StyledNormalButton>
                </ToolsOnCLVItem>
                <ToolsOnCLVItem>
                  <div>
                    <div>{t('buildWithCLV')}</div>
                    <span>{t('buildWithCLVHint')}</span>
                  </div>
                  <StyledGrayButton
                    onClick={() =>
                      window.open(
                        'https://docs.google.com/forms/u/3/d/e/1FAIpQLSfQevVEw_hL44vvbcMkYB8kKdzTFAbtD1pR-QVraaA7h4jpKg/viewform',
                        '_blank',
                      )
                    }
                  >
                    {t('startBuilding')}
                  </StyledGrayButton>
                </ToolsOnCLVItem>
                <ToolsOnCLVItem>
                  <div>
                    <div>{t('CLVPortal')}</div>
                    <span>{t('CLVPortalHint2')}</span>
                  </div>
                  <StyledGrayButton>{t('learnMore')}</StyledGrayButton>
                </ToolsOnCLVItem>
                <ToolsOnCLVItem>
                  <div>
                    <div>{t('forBuilders')}</div>
                    <span>{t('forBuildersHint')}</span>
                  </div>
                  <Btns>
                    <StyledGrayButton

                      onClick={() =>
                        window.open(
                          'https://github.com/clover-network',
                          '_blank',
                        )
                      }
                    >
                      {t('getGithub')}
                    </StyledGrayButton>
                    <StyledGrayButton

                      onClick={() =>
                        window.open('https://docs.clover.finance/', '_blank')
                      }
                    >
                      {t('readDocs')}
                    </StyledGrayButton>
                  </Btns>
                </ToolsOnCLVItem>
              </ToolsOnCLVContent>
            </ToolsOnCLV>
          </div>
        </Content>
      </LandingContainer>
      <Footer />
    </Wrapper>
  );
};
