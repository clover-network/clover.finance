import React from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../mixins/breakpoint";
import { t } from '../i18n/intl';
import { Footer } from './components/Footer';
import { GrayButton, NormalButton } from '../components/Btn';

export const Wallet: React.FC = () => {
  return (
    <div>
      <LandingContainer>
        <IntroducingCrypto>
          <ContentWrapper>
            <TextWrapper>
              <UpperCaseSpan>{t('introducingCrypto')}</UpperCaseSpan>
              <div>
                {t('builtForCryptoUsers')}
                <img src='images/clv_icon2.svg' alt='' />
              </div>
              <span>{t('builtForCryptoUsersHint')}</span>
            </TextWrapper>
            <ImgWrapper>
              <img src='images/wallet_3d.png' alt='' />
            </ImgWrapper>
          </ContentWrapper>
          <ContentBottom>
            <ContentBottomTop>
              <ContentBottomTopLeft>
                <div>Over 979,030</div>
                <span>{t('createdAWalletInCLV')}</span>
              </ContentBottomTopLeft>
              <ContentBottomTopRight>
                <GrayButton width='316px' color="#0C0B0B">{t('applicationFeatures')}</GrayButton>
                <NormalButton width='316px'>{t('createWallet')}</NormalButton>
              </ContentBottomTopRight>
            </ContentBottomTop>
            <ContentBottomBottom>
              <img src='images/gray_forbes.svg' alt='' />
              <img src='images/gray_telegraph.svg' alt='' />
              <img src='images/gray_coindesk.svg' alt='' />
              <img src='images/gray_yahoo.svg' alt='' />
            </ContentBottomBottom>
          </ContentBottom>
        </IntroducingCrypto>
      </LandingContainer>
      <IdealAvailable>
        <IdealAvailableTitle>
          <div>{t('theIdealAvailable')}</div>
          <span>{t('chromeExtension')}</span>
        </IdealAvailableTitle>
        <IdealAvailableContent>
          <IdealAvailableItem>
            <img src='images/cross_chain.svg' alt='' />
            <div>
              <IdealAvailableItemContent>
                <UpperCaseSpan>{t('extensionWalletWith')}</UpperCaseSpan>
                <div>{t('crossChainCompatibility')}</div>
                <span>{t('crossChainCompatibilityHint1')}</span>
                <span>{t('crossChainCompatibilityHint2')}</span>
                <h3>70,000+ Users</h3>
                <h4>
                  <img src='images/reviews.svg' alt='' />
                  <span>398 Reviews</span>
                </h4>
              </IdealAvailableItemContent>
              <NormalButton>{t('getTheExtension')}</NormalButton>
            </div>
          </IdealAvailableItem>
          <IdealAvailableItem>
            <div>
              <IdealAvailableItemContent>
                <UpperCaseSpan>{t('CLVMobileWallet')}</UpperCaseSpan>
                <div>{t('appStore')}</div>
                <span>{t('appStoreHint')}</span>
              </IdealAvailableItemContent>
              <Btns>
                <img src='images/app_store.svg' alt='' />
                <img src='images/google_play.svg' alt='' />
              </Btns>
            </div>
            <img src='images/stake_to_earn.svg' alt='' />
          </IdealAvailableItem>
          <IdealAvailableItem>
            <div>
              <IdealAvailableItemContent>
                <UpperCaseSpan>{t('CLVPortal')}</UpperCaseSpan>
                <div>{t('importAndCreate')}</div>
                <span>{t('importAndCreateHint')}</span>
              </IdealAvailableItemContent>
              <NormalButton>{t('exploreNow')}</NormalButton>
            </div>
            <img src='images/dashboard.svg' alt='' />
          </IdealAvailableItem>
        </IdealAvailableContent>
      </IdealAvailable>
      <YourPassport>
        <YourPassportTitle>
          <h3>{t('yourPassport')}</h3>
          <span>{t('idealForAllUsers')}</span>
        </YourPassportTitle>
        <YourPassportContent>
          <YourPassportTop>
            <YourPassportTopItem>
              <img src='images/introdusing_icon.svg' alt='' />
              <div>{t('firstTimeCryptoUsers')}</div>
              <span>{t('firstTimeCryptoUsersHint')}</span>
            </YourPassportTopItem>
            <YourPassportTopItem>
              <img src='images/introdusing_icon.svg' alt='' />
              <div>{t('defiUsers')}</div>
              <span>{t('defiUsersHint')}</span>
            </YourPassportTopItem>
            <YourPassportTopItem>
              <img src='images/introdusing_icon.svg' alt='' />
              <div>{t('gamingUsers')}</div>
              <span>{t('gamingUsersHint')}</span>
            </YourPassportTopItem>
          </YourPassportTop>
          <YourPassportBottom>
            <YourPassportBottomLeft>
              <img src='images/CLV_wallet.svg' alt='' />
              <div>
                <h3>{t('CLVWallet')}</h3>
                <div>
                  <img src='images/clover_finance.svg' alt='' />
                  <span>{t('cloverFinance')}</span>
                </div>
                <div>
                  <img src='images/reviews.svg' alt='' />
                  <p>398</p>
                  <img src='images/remind.svg' alt='' />
                  <p><span></span>70,000+ Users<span></span></p>
                  <a>Productivity</a>
                </div>
              </div>
            </YourPassportBottomLeft>
            <GrayButton width='316px' color="#0C0B0B">{t('getTheExtension')}</GrayButton>
          </YourPassportBottom>
        </YourPassportContent>
      </YourPassport>
      <JoinUs>
        <JoinUsTitle>
          <h3>{t('joinUs')}<img src='images/clv_icon2.svg' alt='' /></h3>
          <span>{t('joinUsHint')}</span>
        </JoinUsTitle>
        <JoinUsInput>
          <input placeholder={t('addYourEmail')} type='text' />
          <div>
            <span>{t('send')}</span>
            <img src='images/send.svg' alt='' />
          </div>
        </JoinUsInput>
        <span>{t('clickingTheButton')}</span>
      </JoinUs>
      <Footer isWallet />
    </div>
  );
};

const IntroducingCrypto = styled.div`
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

const UpperCaseSpan = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.026em;
  text-transform: uppercase;
  color: #4E5D60;
  margin-bottom: 24px;
`

const TextWrapper = styled.div`
  width: 50%;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 16px;

  & > div {
    font-weight: 590;
    font-size: 72px;
    line-height: 76px;
    letter-spacing: 0.008em;
    color: #0C0B0B;
    margin-bottom: 24px;
    img {
      margin-left: 10px;
    }
  }
  
  &>span {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.026em;
    color: #4E5D60;
    margin-bottom: 24px;
  }

  ${breakpoint(css`
    span {
      font-size: 15px;
      line-height: 24px;
    }
  `)};
`;

const ContentBottom = styled.div`
  margin-bottom: -200px;
  margin-top: -5px;
`

const ContentBottomTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px;
  background: #FFFFFF;
  border: 1px solid #EFF5F5;
  border-radius: 32px;
`;

const ContentBottomTopLeft = styled.div`
  div {
    font-weight: 590;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 0.008em;
    color: #0C0B0B;
  }
  
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.006em;
    color: #0C0B0B;
  }
`

const ContentBottomTopRight = styled.div`
  display: flex;
  align-items: center;
  div:first-child {
    margin-right: 16px;
  }
`

const ContentBottomBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`

const ImgWrapper = styled.div`
  width: 50%;

  img {
    width: 100%;
  }
`;

const IdealAvailable = styled.div`
  margin-top: 380px;
  padding: 0 64px;
  width: 100%;
`

const IdealAvailableTitle = styled.div`
  width: 50%;
  div {
    font-weight: 590;
    font-size: 64px;
    line-height: 68px;
    letter-spacing: 0.008em;
    color: #0C0B0B;
    margin-bottom: 24px;
  }
  span {
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0.002em;
    color: #0C0B0B;
  }
`

const IdealAvailableContent = styled.div`
  width: 100%;
  margin-top: 80px;
  
  &>div {
    margin-bottom: 24px;
    &:last-child {
      margin: 0;
      padding-right: 0;
      padding-top: 0;
    }
  }
`

const IdealAvailableItem = styled.div`
  width: 100%;
  padding: 24px 80px 0;
  gap: 16px;
  background: rgba(155, 218, 246, 0.08);
  border: 1px solid #EFF5F5;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  & > img {
    //width: 50%;
  }
`

const IdealAvailableItemContent = styled(TextWrapper)`
  width: unset;
  padding: 0;
  &>h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.006em;
    color: #0C0B0B;
  }

  &>h4 {
    display: flex;
    align-items: center;

    img {
      height: 32px;
      margin-right: 16px;
    }

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.006em;
      text-decoration-line: underline;
      color: #0C0B0B;
    }
    margin-bottom: 36px;
  }
`

const Btns = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  img {
    cursor: pointer;
    &:first-child {
      margin-right: 12px;
    }
  }
`

const YourPassport = styled.div`
  margin-top: 180px;
  padding: 0 64px;
  width: 100%;
`

const YourPassportTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  h3 {
    width: 50%;
    font-weight: 590;
    font-size: 64px;
    line-height: 68px;
    letter-spacing: 0.008em;
    color: #0C0B0B;
  }
  span {
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0.002em;
    color: #0C0B0B;
  }
`

const YourPassportContent = styled.div`
  width: 100%;
  margin-top: 64px;
`

const YourPassportTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  &>div:last-child {
    margin-right: 0;
  }
`

const YourPassportTopItem = styled.div`
  padding: 48px;
  background: rgba(155, 218, 246, 0.08);
  border: 1px solid #EFF5F5;
  border-radius: 32px;
  height: 444px;
  margin-right: 16px;

  img {
    width: 103px;
  }
  div {
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: 0.008em;
    color: #0C0B0B;
    margin-bottom: 16px;
    margin-top: 36px;
  }
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.006em;
    color: #0C0B0B;
    opacity: 0.6;
  }
`

const YourPassportBottom = styled.div`
  padding: 48px;
  background: #FFFFFF;
  border: 1px solid #EFF5F5;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const YourPassportBottomLeft = styled.div`
  display: flex;
  align-items: center;
  & > div {
    margin-left: 16px;
    h3 {
      font-weight: 590;
      font-size: 40px;
      line-height: 52px;
      letter-spacing: 0.008em;
      color: #0C0B0B;
    }
    & > div {
      display: flex;
      align-items: center;
      margin-top: 12px;
      & > span {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.006em;
        color: #83979F;
      }
      p, a {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.006em;
        color: #0C0B0B;
        display: flex;
        align-items: center;
        span {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #0C0B0B;
          margin: 0 10px;
        }
      }
      a {
        text-decoration: underline;
      }
    }
  }
`

const JoinUs = styled.div`
  padding: 48px;
  background: linear-gradient(45.66deg, rgba(189, 253, 226, 0.4) 8.33%, rgba(155, 218, 246, 0.4) 94.75%);
  border-radius: 32px;
  margin: 180px 64px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &>span {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.006em;
    color: #4E5D60;
  }
`

const JoinUsTitle = styled.div`
  text-align: center;

  h3 {
    display: flex;
    align-items: center;
    font-weight: 590;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 0.008em;
    color: #0C0B0B;

    img {
      width: 46px;
      height: 46px;
      margin-left: 16px;
    }
  }
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.006em;
    color: #0C0B0B;
  }
`

const JoinUsInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  border-radius: 40px;
  width: 648px;
  height: 64px;
  overflow: hidden;
  margin: 24px 0;
  
  input {
    flex: 1;
    height: 100%;
    outline: none;
    border: none;
    text-indent: 20px;
  }
  div {
    display: flex;
    align-items: center;
    background: #0C0B0B;
    border-radius: 32px;
    height: 48px;
    padding: 16px 24px;
    margin: 0 8px;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.002em;
    color: #FFFFFF;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`

// this is a full height container that contains the Navbar, the Hero, and the bitcoin price
// when a user first visits the site this portion should take up 100% height
const LandingContainer = styled.div`
  //height: calc(100vh);
  display: flex;
  flex-direction: column;
  padding: 0 64px;
  background: url("images/wallet_bg.svg") no-repeat;
  background-size: cover;
  ${breakpoint(css`
    height: unset;
    min-height: 120vw;
    padding: 48px 0 0;
  `)}
`;