import React from 'react';
import { t } from '../../i18n/intl';
import { Footer } from '../components/Footer';
import { NormalButton } from '../../components/Btn';
import {
  Content,
  IntroducingCrypto,
  BuiltForCryptoUsersSpan,
  BuiltForCryptoUsersImg,
  BuiltForCryptoUsersHint,
  UpperCaseSpan,
  TextWrapper,
  LayoutWrapper,
  ContentWrapper,
  CreateWalletSpan,
  ContentBottom,
  ContentBottomTop,
  LeftContainer,
  AnimationTextWrapper,
  AnimationTextItem,
  ContentBottomTopRight,
  ContentBottomBottom,
  ImgWrapper,
  Wallet3DImg,
  IdealAvailable,
  IdealAvailableTitle,
  IdealAvailableTitleHeaderSpan,
  IdealAvailableTitleSpan,
  IdealAvailableContent,
  IdealAvailableItem,
  ReverseIdealAvailableItem,
  IdealAvailableItemImg,
  SecondIdealAvailableItemWrapper,
  FirstIdealAvailableItemWrapper,
  IdealAvailableItemContent,
  ItemContentSpan,
  ItemContentH3,
  ItemContentH4,
  H4Image,
  H4Span,
  FirstRow,
  Title,
  GetTheExtensionButton,
  GooglePlayImg,
  AppStoreImg,
  Btns,
  YourPassport,
  YourPassportH3,
  YourPassportSpan,
  YourPassportTitle,
  YourPassportContent,
  YourPassportTopItemSpan,
  YourPassportTopItemDiv,
  YourPassportTopItemImg,
  YourPassportTop,
  YourPassportTopItem,
  YourPassportBottom,
  YourPassportBottomLeft,
  YourPassportBottomLeftImg,
  YourPassportBottomLeftH3,
  YourPassportCloverFinance,
  YourPassportCloverFinanceImg,
  YourPassportCloverFinanceSpan,
  CloverFinanceBottomFlexWrapper,
  StyledFlex,
  Productivity,
  StyledGrayButton,
  Wrapper,
  LandingContainer,
} from './styled';

export const Wallet: React.FC = () => {
  const scrollTo = () => {
    let anchorElement = document.getElementById('idealAvailableContent');
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Wrapper>
      <LandingContainer>
        <video webkit-playsinline autoPlay src="videos/walletPageParticles.mp4"></video>
        <IntroducingCrypto>
          <ContentWrapper>
            <LayoutWrapper>
              <TextWrapper>
                <UpperCaseSpan>{t('introducingCrypto')}</UpperCaseSpan>
                <BuiltForCryptoUsersSpan>
                  {t('builtForCryptoUsers')}
                  <BuiltForCryptoUsersImg src="images/clv_icon2.svg" alt="" />
                </BuiltForCryptoUsersSpan>
                <BuiltForCryptoUsersHint>
                  {t('builtForCryptoUsersHint')}
                </BuiltForCryptoUsersHint>
              </TextWrapper>
              <ImgWrapper>
                <Wallet3DImg src="images/wallet_3d.svg" alt="" />
              </ImgWrapper>
            </LayoutWrapper>
          </ContentWrapper>
          <ContentBottom>
            <ContentBottomTop>
              <div>
                <LeftContainer>
                  <span>Over</span>
                  <AnimationTextWrapper>
                    <span>97</span>
                    <AnimationTextItem>9</AnimationTextItem>
                    <span>,</span>
                    <AnimationTextItem delay="0.3s">0</AnimationTextItem>
                    <AnimationTextItem delay="0.5s">3</AnimationTextItem>
                    <AnimationTextItem delay="0.8s">0</AnimationTextItem>
                  </AnimationTextWrapper>
                </LeftContainer>
                <CreateWalletSpan>{t('createdAWalletInCLV')}</CreateWalletSpan>
              </div>
              <ContentBottomTopRight>
                <GetTheExtensionButton onClick={() => scrollTo()}>
                  {t('createWallet')}
                </GetTheExtensionButton>
              </ContentBottomTopRight>
            </ContentBottomTop>
            <ContentBottomBottom>
              <img src="images/gray_forbes.svg" alt="" />
              <img src="images/gray_telegraph.svg" alt="" />
              <img src="images/gray_coindesk.svg" alt="" />
              <img src="images/gray_yahoo.svg" alt="" />
            </ContentBottomBottom>
          </ContentBottom>
        </IntroducingCrypto>
      </LandingContainer>
      <Content>
        <div>
          <IdealAvailable>
            <IdealAvailableTitle>
              <IdealAvailableTitleHeaderSpan>
                {t('theIdealWallet')}
              </IdealAvailableTitleHeaderSpan>
              <IdealAvailableTitleSpan>
                {t('theIdealWalletHint')}
              </IdealAvailableTitleSpan>
            </IdealAvailableTitle>
            <IdealAvailableContent id="idealAvailableContent">
              <IdealAvailableItem>
                <IdealAvailableItemImg src="images/cross_chain.svg" alt="" />
                <SecondIdealAvailableItemWrapper>
                  <IdealAvailableItemContent>
                    <FirstRow>
                      <UpperCaseSpan>{t('extensionWallet')}</UpperCaseSpan>
                      <Title>{t('crossChainCompatibility')}</Title>
                    </FirstRow>

                    <ItemContentSpan>
                      {t('crossChainCompatibilityHint1')}
                    </ItemContentSpan>
                    <ItemContentSpan>
                      {t('crossChainCompatibilityHint2')}
                    </ItemContentSpan>
                    <ItemContentH3>70,000+ Users</ItemContentH3>
                    <ItemContentH4>
                      <H4Image src="images/reviews.svg" alt="" />
                      <H4Span>398 Reviews</H4Span>
                    </ItemContentH4>
                    <GetTheExtensionButton
                      onClick={() => {
                        window.open(
                          'https://chrome.google.com/webstore/detail/clv-wallet/nhnkbkgjikgcigadomkphalanndcapjk',
                          '_blank',
                        );
                      }}
                    >
                      {t('getTheExtension')}
                    </GetTheExtensionButton>
                  </IdealAvailableItemContent>
                </SecondIdealAvailableItemWrapper>
              </IdealAvailableItem>
              <ReverseIdealAvailableItem>
                <FirstIdealAvailableItemWrapper>
                  <IdealAvailableItemContent>
                    <UpperCaseSpan>{t('CLVMobileWallet')}</UpperCaseSpan>
                    <Title>{t('DcentralizedFinance')}</Title>
                    <ItemContentSpan>
                      {t('DcentralizedFinanceHint1')}
                    </ItemContentSpan>
                    <ItemContentSpan>
                      {t('DcentralizedFinanceHint2')}
                    </ItemContentSpan>
                  </IdealAvailableItemContent>
                  <Btns>
                    <AppStoreImg
                      onClick={() => {
                        window.open(
                          'https://apps.apple.com/app/clover-wallet/id1570072858',
                          '_blank',
                        );
                      }}
                      src="images/app_store.svg"
                      alt=""
                    />
                    <GooglePlayImg
                      onClick={() => {
                        window.open(
                          'https://github.com/clover-network/clover-multichain-mobile-wallet-release/releases/latest/download/clover.apk',
                          '_blank',
                        );
                      }}
                      src="images/google_play.svg"
                      alt=""
                    />
                  </Btns>
                </FirstIdealAvailableItemWrapper>
                <IdealAvailableItemImg src="images/stake_to_earn.svg" alt="" />
              </ReverseIdealAvailableItem>
              <ReverseIdealAvailableItem>
                <FirstIdealAvailableItemWrapper>
                  <IdealAvailableItemContent>
                    <UpperCaseSpan>{t('CLVPortal')}</UpperCaseSpan>
                    <Title>{t('onePortalOfAll')}</Title>
                    <ItemContentSpan>{t('onePortalOfAllHint')}</ItemContentSpan>
                    <GetTheExtensionButton>
                      {t('exploreNow')}
                    </GetTheExtensionButton>
                  </IdealAvailableItemContent>
                </FirstIdealAvailableItemWrapper>
                <IdealAvailableItemImg src="images/dashboard.svg" alt="" />
              </ReverseIdealAvailableItem>
            </IdealAvailableContent>
          </IdealAvailable>
          <YourPassport>
            <YourPassportTitle>
              <YourPassportH3>{t('yourPassport')}</YourPassportH3>
              <YourPassportSpan>{t('idealForAllUsers')}</YourPassportSpan>
            </YourPassportTitle>
            <YourPassportContent>
              <YourPassportTop>
                <YourPassportTopItem>
                  <YourPassportTopItemImg
                    src="images/introdusing_icon1.svg"
                    alt=""
                  />
                  <YourPassportTopItemDiv>
                    {t('firstTimeCryptoUsers')}
                  </YourPassportTopItemDiv>
                  <YourPassportTopItemSpan>
                    {t('firstTimeCryptoUsersHint')}
                  </YourPassportTopItemSpan>
                </YourPassportTopItem>
                <YourPassportTopItem>
                  <YourPassportTopItemImg
                    src="images/introdusing_icon1.svg"
                    alt=""
                  />
                  <YourPassportTopItemDiv>
                    {t('defiUsers')}
                  </YourPassportTopItemDiv>
                  <YourPassportTopItemSpan>
                    {t('defiUsersHint')}
                  </YourPassportTopItemSpan>
                </YourPassportTopItem>
                <YourPassportTopItem>
                  <YourPassportTopItemImg
                    src="images/introdusing_icon1.svg"
                    alt=""
                  />
                  <YourPassportTopItemDiv>
                    {t('gamingUsers')}
                  </YourPassportTopItemDiv>
                  <YourPassportTopItemSpan>
                    {t('gamingUsersHint')}
                  </YourPassportTopItemSpan>
                </YourPassportTopItem>
              </YourPassportTop>
              <YourPassportBottom>
                <YourPassportBottomLeft>
                  <YourPassportBottomLeftImg
                    src="images/CLV_wallet.svg"
                    alt=""
                  />
                  <StyledFlex>
                    <YourPassportBottomLeftH3>
                      {t('CLVWallet')}
                      <YourPassportCloverFinance>
                        <img src="images/clover_finance.svg" alt="" />
                        <YourPassportCloverFinanceSpan>
                          {t('cloverFinance')}
                        </YourPassportCloverFinanceSpan>
                      </YourPassportCloverFinance>
                    </YourPassportBottomLeftH3>

                    <CloverFinanceBottomFlexWrapper>
                      <YourPassportCloverFinanceImg
                        src="images/reviews.svg"
                        alt=""
                      />
                      <p>
                        398
                        <img
                          src="images/remind.svg"
                          alt=""
                          style={{ marginLeft: '1px' }}
                        />
                      </p>
                      <span>70,000+ Users</span>
                      <Productivity>Productivity</Productivity>
                    </CloverFinanceBottomFlexWrapper>
                  </StyledFlex>
                </YourPassportBottomLeft>
                <StyledGrayButton
                  onClick={() => {
                    window.open(
                      'https://chrome.google.com/webstore/detail/clv-wallet/nhnkbkgjikgcigadomkphalanndcapjk',
                      '_blank',
                    );
                  }}
                  color="#0C0B0B"
                >
                  {t('getTheExtension')}
                </StyledGrayButton>
              </YourPassportBottom>
            </YourPassportContent>
          </YourPassport>
          {/*<JoinUs>*/}
          {/*  <JoinUsTitle>*/}
          {/*    <h3>{t('joinUs')}<img src='images/clv_icon2.svg' alt='' /></h3>*/}
          {/*  </JoinUsTitle>*/}
          {/*  <JoinUsInput>*/}
          {/*    <input placeholder={t('addYourEmail')} type='text' />*/}
          {/*    <div>*/}
          {/*      <span>{t('send')}</span>*/}
          {/*      <img src='images/send.svg' alt='' />*/}
          {/*    </div>*/}
          {/*  </JoinUsInput>*/}
          {/*  <span>{t('clickingTheButton')}</span>*/}
          {/*</JoinUs>*/}
        </div>
      </Content>
      <Footer isWallet />
    </Wrapper>
  );
};
