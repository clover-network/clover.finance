import React from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../mixins/breakpoint";
import { t } from '../i18n/intl';
import { NormalButton, GrayButton } from '../components/Btn';
import CLVIsBacked from './components/CLVBacked';
import { Footer } from './components/Footer';

export const Main: React.FC = () => {
  return (
    <div>
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
            </TextWrapper>
            <ImgWrapper>
              <img src='images/video1.svg' alt='' />
            </ImgWrapper>
          </ContentWrapper>
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
              <img src='images/video2.svg' alt='' />
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
            <ToolsOnCLVItem>
              <div>
                <img src='images/clv_icon1.svg' alt='' />
                <span>{t('integrateCLVWallet')}</span>
              </div>
              <span>{t('integrateCLVWalletHint')}</span>
              <NormalButton
                onClick={() =>
                  window.open(
                    "https://docs.clover.finance/clover-multi-chain-wallet/developer-guide",
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
                    "https://docs.google.com/forms/d/e/1FAIpQLSfQevVEw_hL44vvbcMkYB8kKdzTFAbtD1pR-QVraaA7h4jpKg/viewform",
                    "_blank"
                  )
                }
              >{t('startBuilding')}</GrayButton>
            </ToolsOnCLVItem>
            <div></div>
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
        <CLVIsBacked />
      </LandingContainer>
      <Footer />
    </div>
  );
};

const SeamlesslyCompatible = styled.div`
  width: 100%;
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

const ImgWrapper = styled.div`
  width: 50%;

  img {
    width: 680px;
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
  line-height: 80px;
  letter-spacing: 0.008em;
  h3 {
    color: #FFFFFF;
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
  
  img {
    width: 648px;
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
    h3 {
      color: #FFFFFF;
    }
    span {
      color: #BDFDE2;
    }
  }
`

const ToolsOnCLVContent = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`

const ToolsOnCLVItem = styled.div`
  background: #141414;
  border-radius: 32px;
  padding: 48px;
  height: 304px;

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
