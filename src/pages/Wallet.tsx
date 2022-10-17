import React from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../mixins/breakpoint";
import { t } from '../i18n/intl';
import { Footer } from './components/Footer';
import { GrayButton, NormalButton } from '../components/Btn';

export const Wallet: React.FC = () => {
  return (
      <Wrapper>
        <LandingContainer>
          <video autoPlay src='videos/walletPageParticles.mp4'></video>
          <IntroducingCrypto>
            <ContentWrapper>
              <div>
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
              </div>
            </ContentWrapper>
            <ContentBottom>
              <ContentBottomTop>
                <ContentBottomTopLeft>
                  <div>Over 979,030</div>
                  <span>{t('createdAWalletInCLV')}</span>
                </ContentBottomTopLeft>
                <ContentBottomTopRight>
                  <NormalButton width='568px'>{t('createWallet')}</NormalButton>
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
        <Content>
          <div>
            <IdealAvailable>
              <IdealAvailableTitle>
                <div>{t('theIdealWallet')}</div>
                <span>{t('theIdealWalletHint')}</span>
              </IdealAvailableTitle>
              <IdealAvailableContent>
                <IdealAvailableItem>
                  <img style={{marginLeft: '-80px'}} src='images/cross_chain.svg' alt='' />
                  <div style={{marginLeft: '66px'}}>
                    <IdealAvailableItemContent>
                      <UpperCaseSpan>{t('extensionWallet')}</UpperCaseSpan>
                      <div>{t('crossChainCompatibility')}</div>
                      <span style={{marginTop: '32px'}}>{t('crossChainCompatibilityHint1')}</span>
                      <span style={{margin: '10px 0 32px'}}>{t('crossChainCompatibilityHint2')}</span>
                      <h3>70,000+ Users</h3>
                      <h4>
                        <img src='images/reviews.svg' alt='' />
                        <span>398 Reviews</span>
                      </h4>
                    </IdealAvailableItemContent>
                    <NormalButton
                        onClick={() => {
                          window.open('https://chrome.google.com/webstore/detail/clv-wallet/nhnkbkgjikgcigadomkphalanndcapjk', "_blank")
                        }}
                    >{t('getTheExtension')}</NormalButton>
                  </div>
                </IdealAvailableItem>
                <IdealAvailableItem>
                  <div>
                    <IdealAvailableItemContent>
                      <UpperCaseSpan>{t('CLVMobileWallet')}</UpperCaseSpan>
                      <div>{t('DcentralizedFinance')}</div>
                      <span style={{marginTop: '32px'}}>{t('DcentralizedFinanceHint1')}</span>
                      <span style={{margin: '10px 0 32px'}}>{t('DcentralizedFinanceHint2')}</span>
                    </IdealAvailableItemContent>
                    <Btns>
                      <img
                          onClick={() => {
                            window.open('https://apps.apple.com/app/clover-wallet/id1570072858', '_blank')
                          }}
                          src='images/app_store.svg'
                          alt=''
                      />
                      <img
                          onClick={() => {
                            window.open('https://github.com/clover-network/clover-multichain-mobile-wallet-release/releases/latest/download/clover.apk', '_blank')
                          }}
                          src='images/google_play.svg'
                          alt=''
                      />
                    </Btns>
                  </div>
                  <img src='images/stake_to_earn.svg' alt='' />
                </IdealAvailableItem>
                <IdealAvailableItem>
                  <div>
                    <IdealAvailableItemContent>
                      <UpperCaseSpan>{t('CLVPortal')}</UpperCaseSpan>
                      <div>{t('onePortalOfAll')}</div>
                      <span style={{margin: '32px 0'}}>{t('onePortalOfAllHint')}</span>
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
                    <img src='images/introdusing_icon1.svg' alt='' />
                    <div>{t('firstTimeCryptoUsers')}</div>
                    <span>{t('firstTimeCryptoUsersHint')}</span>
                  </YourPassportTopItem>
                  <YourPassportTopItem>
                    <img src='images/introdusing_icon1.svg' alt='' />
                    <div>{t('defiUsers')}</div>
                    <span>{t('defiUsersHint')}</span>
                  </YourPassportTopItem>
                  <YourPassportTopItem>
                    <img src='images/introdusing_icon1.svg' alt='' />
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
                        <div>Productivity</div>
                      </div>
                    </div>
                  </YourPassportBottomLeft>
                  <GrayButton
                      width='316px'
                      onClick={() => {
                        window.open('https://www.figma.com/exit?url=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Fclv-wallet%2Fnhnkbkgjikgcigadomkphalanndcapjk', '_blank')
                      }}
                      color="#0C0B0B"
                  >{t('getTheExtension')}</GrayButton>
                </YourPassportBottom>
              </YourPassportContent>
            </YourPassport>
            <JoinUs>
              <JoinUsTitle>
                <h3>{t('joinUs')}<img src='images/clv_icon2.svg' alt='' /></h3>
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
          </div>
        </Content>
        <Footer isWallet />
      </Wrapper>
  );
};

const Content = styled.div`
  width: 100%;
  & > div {
    max-width: 1440px;
    min-width: 1440px;
    padding: 0 64px 64px;
    margin: 0 auto;
  }
`

const IntroducingCrypto = styled.div`
  width: 100%;
  max-width: 1440px;
  min-width: 1440px;
  margin: 0 auto;
  padding: 0 64px;
`
const ContentWrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  overflow: hidden;

  &>div {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    animation: overScroll 1s forwards ease-in-out;
    @keyframes overScroll{
      0%{
        opacity: 0;
        transform: translateY(200px);
      }
      20%{
        opacity: 0.5;
      }
      90%{
        transform: translateY(-20px);
      }
      100%{
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

const UpperCaseSpan = styled.span`
  font-family: Inter;
  font-weight: 700!important;
  font-size: 16px!important;
  line-height: 24px!important;
  letter-spacing: 0.026em;
  text-transform: uppercase;
  color: #4E5D60!important;
  margin-bottom: 24px;
`

const TextWrapper = styled.div`
  width: 50%;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 60px;

  & > div {
    font-weight: 600;
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
    font-family: Inter;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.026em;
    color: #0C0B0B;
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
  //margin-top: -5px;
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
    font-weight: 600;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 0.008em;
    color: #0C0B0B;
  }

  span {
    font-family: Inter;
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
    width: 648px;
  }
`;

const IdealAvailable = styled.div`
  margin-top: 380px;
  width: 100%;
`

const IdealAvailableTitle = styled.div`
  div {
    font-weight: 600;
    font-size: 64px;
    line-height: 68px;
    letter-spacing: 0.008em;
    color: #0C0B0B;
    margin-bottom: 24px;
  }
  span {
    font-family: Inter;
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
      align-items: center!important;
    }
  }
`

const IdealAvailableItem = styled.div`
  width: 100%;
  padding: 0 80px;
  gap: 16px;
  background: rgba(155, 218, 246, 0.08);
  border: 1px solid #EFF5F5;
  border-radius: 32px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  & > img {
    width: 50%;
  }
  &>div {
    padding: 60px 0;
  }
`

const IdealAvailableItemContent = styled.div`
  width: unset;
  padding: 0;
  &>h3 {
    font-family: Inter;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.006em;
    color: #0C0B0B;
  }

  & > div {
    font-weight: 600;
    font-size: 48px;
    line-height: 60px;
  }
  
  & > span {
    font-family: Inter;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.006em;
    color: #0C0B0B;
    display: inline-block;
  }

  &>h4 {
    display: flex;
    align-items: center;

    img {
      height: 32px;
      margin-right: 16px;
    }

    span {
      font-family: Inter;
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
  width: 100%;
`

const YourPassportTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  h3 {
    width: 50%;
    font-weight: 600;
    font-size: 64px;
    line-height: 68px;
    letter-spacing: 0.008em;
    color: #0C0B0B;
  }
  span {
    font-family: Inter;
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
  background: rgb(248, 252, 254);
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
    font-family: Inter;
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
      font-weight: 600;
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
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.006em;
        color: #83979F;
      }
      p, div {
        font-family: Inter;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.006em;
        color: #0C0B0B;
        display: flex;
        align-items: center;
        margin: 0;
        span {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #0C0B0B;
          margin: 0 10px;
        }
      }
      &>div {
        text-decoration: underline;
      }
    }
  }
`

const JoinUs = styled.div`
  padding: 48px;
  background: linear-gradient(45.66deg, rgba(189, 253, 226, 0.4) 8.33%, rgba(155, 218, 246, 0.4) 94.75%);
  border-radius: 32px;
  margin: 180px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &>span {
    font-family: Inter;
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
    font-weight: 600;
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
    font-family: Inter;
  }
  div {
    display: flex;
    align-items: center;
    background: #0C0B0B;
    border-radius: 32px;
    height: 48px;
    padding: 16px 24px;
    margin: 0 8px;
    font-family: Inter;
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

const Wrapper = styled.div`
  background: url("images/wallet_bg.svg") no-repeat;
  background-size: cover;
`
const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 1000px;
  video {
    position: absolute;
    z-index: 0;
    top: 0;
    height: 100%;
    width: 100vw;
    object-fit: fill;
  }
  & > div {
    z-index: 1;
    top: 0;
    width: 100%;
  }

  ${breakpoint(css`
    height: unset;
    min-height: 120vw;
    padding: 48px 0 0;
  `)}
`;
