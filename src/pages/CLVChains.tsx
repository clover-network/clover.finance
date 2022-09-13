import React, {useState} from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../mixins/breakpoint";
import { t } from '../i18n/intl';
import { Footer } from './components/Footer';
import { GrayButton, NormalButton } from '../components/Btn';

export const CLVChains: React.FC = () => {
  const [selectFaq, setSelectFaq] = useState(0)
  const faqsList = [
    {
      title: "Support Native/Parachain Two-way Assets Cross-chain for Major Blockchains ",
      content: <div>
        <span>CLV offers seamless multi-chain indexing across Bitcoin, Ethereum, Binance Smart Chain, and Polkadot.</span>
        <span>Introducing a new method for cross-blockchain exploring.</span>
        <span>Now everyone can search through blocks for transactions, and accounts in all-in one streamlined environment.</span>
      </div>
    },
    {
      title: "How working ecosystem Infrastructure such as On-Chain Analytic Tools ",
      content: <div>
        <span>CLV offers seamless multi-chain indexing across Bitcoin, Ethereum, Binance Smart Chain, and Polkadot.</span>
        <span>Introducing a new method for cross-blockchain exploring.</span>
        <span>Now everyone can search through blocks for transactions, and accounts in all-in one streamlined environment.</span>
      </div>
    },
    {
      title: "What is Dynamic Gas Fee Model?",
      content: <div>
        <span>CLV offers seamless multi-chain indexing across Bitcoin, Ethereum, Binance Smart Chain, and Polkadot.</span>
        <span>Introducing a new method for cross-blockchain exploring.</span>
        <span>Now everyone can search through blocks for transactions, and accounts in all-in one streamlined environment.</span>
      </div>
    },
  ]
  return (
    <div>
      <LandingContainer>
        <IntrodusingTheCLV>
          <ContentWrapper>
            <TextWrapper>
              <div>
                {t('introdusingTheCLV')}
                <img src='images/clv_icon1.svg' alt='' />
              </div>
              <span>{t('introdusingTheCLVHint')}</span>
            </TextWrapper>
            <ImgWrapper>
            </ImgWrapper>
          </ContentWrapper>
          <ContentBottom>
            <ContentBottomLeft>
              <ContentBottomItem>
                <img src='images/introdusing_icon.svg' alt='' />
                <span>{t('CLVMainnet')}</span>
              </ContentBottomItem>
              <ContentBottomItemNormal>
                <img src='images/introdusing_icon.svg' alt='' />
                <span>{t('governanceExchange')}</span>
              </ContentBottomItemNormal>
            </ContentBottomLeft>
            <ContentBottomCenter>
              <img src='images/introdusing_icon.svg' alt='' />
              <span>{t('bridgingTechnology')}</span>
            </ContentBottomCenter>
            <ContentBottomRight>
              <ContentBottomItemNormal>
                <img src='images/introdusing_icon.svg' alt='' />
                <span>{t('dAppDevelopment')}</span>
              </ContentBottomItemNormal>
              <ContentBottomItem>
                <img src='images/introdusing_icon.svg' alt='' />
                <span>{t('CLVParachain')}</span>
              </ContentBottomItem>
              <ContentBottomItemNormal>
                <img src='images/introdusing_icon.svg' alt='' />
                <span>{t('smartContract')}</span>
              </ContentBottomItemNormal>
            </ContentBottomRight>
          </ContentBottom>
        </IntrodusingTheCLV>
        <Features>
          <FeaturesTitle>
            <span>{t('features')}</span>
            <h3>{t('thatMakesTheDifference')}</h3>
          </FeaturesTitle>
          <FeaturesContent>
            <FeaturesLeft></FeaturesLeft>
            <FeaturesRight>
              <FeaturesRightItem>
                <h3>{t('etheriumCompatible')}</h3>
                <span>{t('etheriumCompatibleHint')}</span>
                <GrayButton>{t('learnMore')}</GrayButton>
              </FeaturesRightItem>
              <FeaturesRightItem>
                <h3>{t('EVMEconomic')}</h3>
                <span>{t('EVMEconomicHint')}</span>
                <GrayButton>{t('learnMore')}</GrayButton>
              </FeaturesRightItem>
              <FeaturesRightItem>
                <h3>{t('highStakingReturn')}</h3>
                <p>Current avg. APY <span>26.62%</span></p>
                <span>{t('highStakingReturnHint')}</span>
                <Btns>
                  <GrayButton width='316px'>{t('CLVMobileWallet')}</GrayButton>
                  <GrayButton width='316px'>{t('CLVPortal')}</GrayButton>
                </Btns>
              </FeaturesRightItem>
              <FeaturesRightItem>
                <h3>{t('governanceAndSeurity')}</h3>
                <span>{t('governanceAndSeurityHint')}</span>
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
                  <GrayButton width='316px'>{t('viewDocumentation')}</GrayButton>
                </Btns>
              </FeaturesRightItem>
            </FeaturesRight>
          </FeaturesContent>
        </Features>
        <Ecosystem>
          <EcosystemTitle>
            <span>{t('anEcosystem')}</span>
            <h3>{t('thatProvidesTransparency')}</h3>
          </EcosystemTitle>
          <EcosystemContent>
            <EcosystemItem>
              <div>
                <img src='images/clv_icon1.svg' alt='' />
                <h3>{t('crossChainExplorer')}</h3>
              </div>
              <span>{t('crossChainExplorerHint')}</span>
              <GrayButton>{t('visitTheSolution')}</GrayButton>
            </EcosystemItem>
            <EcosystemItem>
              <div>
                <h3>{t('EVMBridgeExplorer')}</h3>
              </div>
              <span>{t('EVMBridgeExplorerHint')}</span>
              <GrayButton>{t('visitTheSolution')}</GrayButton>
            </EcosystemItem>
            <EcosystemItem>
              <div>
                <h3>{t('CLVPortal')}</h3>
              </div>
              <span>{t('CLVPortalHint')}</span>
              <NormalButton>{t('visitCLVPortal')}</NormalButton>
            </EcosystemItem>
            <EcosystemItem>
              <div>
                <h3>{t('CLVScan')}</h3>
              </div>
              <span>{t('CLVScanHint')}</span>
              <GrayButton>{t('visitTheSolution')}</GrayButton>
            </EcosystemItem>
          </EcosystemContent>
        </Ecosystem>
        <FAQs>
          <FAQsTitle>
            <h3>{t('FAQ’s')}</h3>
          </FAQsTitle>
          <FAQsContent>
            {faqsList.map((faq, index) => (
              <FAQsItem
                key={`faq_${index}`}
                onClick={() => setSelectFaq(index)}
              >
                <div>
                  <h3>{faq.title}</h3>
                  <img src={selectFaq === index ? 'images/arrow_to_up.svg' : 'images/arrow_to_down.svg'} alt='' />
                </div>
                {selectFaq === index && <FAQsItemContent>{faq.content}</FAQsItemContent>}
              </FAQsItem>
            ))}
          </FAQsContent>
        </FAQs>
      </LandingContainer>
      <Footer />
    </div>
  );
};

const IntrodusingTheCLV = styled.div`
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
`;

const ContentBottomItem = styled.div`
  width: 426.67px;
  padding: 24px 20px;
  background: linear-gradient(39.66deg, #BDFDE2 -8.36%, #9BDAF6 143.89%);
  border: 1px solid #333232;
  border-radius: 32px;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.006em;
  color: #0C0B0B;
  margin-bottom: 16px;
  img {
    width: 84px;
    height: 84px;
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
    margin-bottom: 24px;
  }
`

const ContentBottomRight = styled.div`
  display: flex;
  flex-direction: column;
`

const ImgWrapper = styled.div`
  width: 50%;

  img {
    width: 680px;
  }
`;

const Btns = styled.div`
  display: flex;
  align-items: center;
  div:first-child {
    margin-right: 16px;
  }
`

const Features = styled.div`
  margin-top: 180px;
  width: 100%;
`

const FeaturesTitle = styled.div`
  width: 50%;
  font-weight: 590;
  font-size: 64px;
  line-height: 80px;
  letter-spacing: 0.008em;
  h3 {
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
  
  img {
    width: 648px;
  }
`

const FeaturesRight = styled.div`
  width: 50%;
  
  &>div:last-child {
    margin: 0;
  }
`

const FeaturesRightItem = styled.div`
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
  
  & > p {
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

const Ecosystem = styled.div`
  margin-top: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const EcosystemTitle = styled.div`
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
  background: #141414;
  border-radius: 32px;
  
  &>div:first-child {
    display: flex;
    align-items: center;
    img {
      width: 32px;
      margin-right: 16px;
    }
    h3 {
      font-weight: 590;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 0.008em;
      color: #FFFFFF;
    }
  }
  
  span {
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
  font-weight: 590;
  font-size: 64px;
  line-height: 80px;
  letter-spacing: 0.008em;
  color: #FFFFFF;
`

const FAQsContent = styled.div`
  margin-top: 64px;
`

const FAQsItem = styled.div`
  background: #0C0B0B;
  border-top: 1px solid #333232;
  padding: 34px 0;
  &>div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
    cursor: pointer;
  }
`

const FAQsItemContent = styled.div`
  div {
    display: flex;
    flex-direction: column;
  }
  span {
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
