import React from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../mixins/breakpoint";
import { t } from '../i18n/intl';
import { Footer } from './components/Footer';
import { GrayButton, NormalButton } from '../components/Btn';

export const Developers: React.FC = () => {
  const tools = [
    {
      icon: 'images/unknown.svg',
      name: 'Unknown'
    }, {
      icon: 'images/metaMask.svg',
      name: 'MetaMask'
    }, {
      icon: 'images/truffle.svg',
      name: 'Truffle'
    }, {
      icon: 'images/chainlink.svg',
      name: 'Chainlink'
    }, {
      icon: 'images/unknown2.svg',
      name: 'Unknown'
    }, {
      icon: 'images/ganache.svg',
      name: 'Ganache'
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
                  {t('buildWithCLVEnterWeb3')}
                  <img src='images/clv_icon1.svg' alt='' />
                </div>
                <span>{t('buildWithCLVEnterWeb3Hint')}</span>
              </TextWrapper>
            </ContentWrapper>
            <ContentBottom>
              <ContentBottomLeft>
                <ContentBottomLeftTitle>
                  <h3>{t('supportedTools')}</h3>
                  <span>{t('environmentChains')}</span>
                </ContentBottomLeftTitle>
                <ContentBottomLeftContent>
                  {tools.map((tool, index) => (
                    <ContentBottomItem key={`tool_${index}`}>
                      <img src={tool.icon} alt='' />
                      <span>{tool.name}</span>
                    </ContentBottomItem>
                  ))}
                </ContentBottomLeftContent>
              </ContentBottomLeft>
              <ContentBottomRight>
                <h3>{t('supportTools')}</h3>
                <span>{t('supportToolsHint')}</span>
                <GrayButton
                  onClick={() =>
                    window.open("https://docs.clv.org/clv-chain-developer-guide/introduction", "_blank")
                  }
                >{t('viewDocumentation')}</GrayButton>
                <GrayButton
                  onClick={() =>
                    window.open("https://github.com/clover-network", "_blank")
                  }
                >{t('getGithubRepo')}</GrayButton>
                <GrayButton
                  onClick={() =>
                    window.open(
                      "https://docs.clv.org/clv-chain-developer-guide/using-testnet",
                      "_blank"
                    )
                  }
                >{t('viewTestnet')}</GrayButton>
              </ContentBottomRight>
            </ContentBottom>
          </div>
        </EnterWeb3>
        <Content>
          <div>
            <JoinCommunity>
              <JoinCommunityTitle>
                <div>
                  <h3>{t('joinTheGrowing')}</h3>
                  <span>{t('developerCommunity')}</span>
                </div>
                <div>
                  <a href="https://t.me/clvorg" target="_blank" rel="noreferrer">
                    <SocialsImg src={`images/telegram.svg`} />
                  </a>
                  <a href="https://discord.com/invite/M6SxuXqMVB" target="_blank" rel="noreferrer">
                    <SocialsImg src={`images/discord.svg`} />
                  </a>
                  <a href="https://medium.com/@clv_org" target="_blank" rel="noreferrer">
                    <SocialsImg src={`images/medium.svg`} />
                  </a>
                </div>
              </JoinCommunityTitle>
              <JoinCommunityContent>
                <JoinCommunityItem>
                  <UpperCaseSpan>{t('integrateOnCLVEcosystem')}</UpperCaseSpan>
                  <h3>{t('integrateCLVWallet')}</h3>
                  <span>{t('integrateCLVWalletHint')}</span>
                  <NormalButton
                    onClick={() =>
                      window.open(
                        "https://docs.clv.org/clover-wallet/dapp-integration",
                        "_blank"
                      )
                    }
                  >{t('learnMore')}</NormalButton>
                </JoinCommunityItem>
                <JoinCommunityItem>
                  <h3>{t('bugBountyProgram')}</h3>
                  <span>{t('bugBountyProgramHint')}</span>
                  <GrayButton
                    onClick={() =>
                      window.open(
                        "https://docs.clv.org/clover-ecosystem/incentive-programs/clv-bug-bounty-program",
                        "_blank"
                      )
                    }
                  >{t('visitTheSolution')}</GrayButton>
                </JoinCommunityItem>
                <div></div>
                <JoinCommunityItem>
                  <h3>{t('CLVFaucet')}</h3>
                  <span>{t('CLVFaucetHint')}</span>
                  <GrayButton
                    onClick={() =>
                      window.open(
                        "https://docs.clv.org/clv-chain-developer-guide/using-testnet/faucet",
                        "_blank"
                      )
                    }
                  >{t('visitTheSolution')}</GrayButton>
                </JoinCommunityItem>
              </JoinCommunityContent>
            </JoinCommunity>
            <InterestedPartnerships>
              <div>
                <h3>{t('interestedInNewPartnerships')}</h3>
                <span>{t('interestedInNewPartnershipsHint1')}</span>
                <span>{t('interestedInNewPartnershipsHint2')}</span>
                <GrayButton
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/u/3/d/e/1FAIpQLSfQevVEw_hL44vvbcMkYB8kKdzTFAbtD1pR-QVraaA7h4jpKg/viewform",
                      "_blank"
                    )
                  }
                >{t('getInTouch')}</GrayButton>
              </div>
              <div>
                <img height='456px' src='images/partnerships.svg' alt='' />
              </div>
            </InterestedPartnerships>
            <GetInvolvedInTheIndustry>
              <div>
                <img height='280px' src='images/industry.svg' alt='' />
              </div>
              <div>
                <h3>{t('getInvolvedInTheIndustry')}</h3>
                <span>{t('getInvolvedInTheIndustryHint')}</span>
                <GrayButton>{t('learnMore')}</GrayButton>
              </div>
            </GetInvolvedInTheIndustry>
          </div>
        </Content>
      </LandingContainer>
      <Footer />
    </div>
  );
};

const Content = styled.div`
  width: 100%;
  background: #000000;
  & > div {
    max-width: 1440px;
    min-width: 1440px;
    padding: 0 64px 64px;
    margin: 0 auto;
  }
`

const SocialsImg = styled.img`
  width: 48px;
  height: 48px;
  margin-left: 40px;
  padding: 5px;
  border-radius: 50%;
  border: 1px solid #fff;
  &:hover {
    opacity: 0.8;
  }
`

const UpperCaseSpan = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.026em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
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

const Background = styled.div`
  background: #000000;
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
`

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

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
    margin: 40px 0 0;
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
  margin-top: 64px;
  width: 100%;
`;

const ContentBottomLeft = styled.div`
  width: 616px;
  height: 388px;
  padding: 32px;
  background: url("images/tools_bg.svg") no-repeat;
  background-size: cover;
  border-radius: 32px;
`;

const ContentBottomLeftTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  h3 {
    font-weight: 590;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
  }
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-align: right;
    letter-spacing: 0.006em;
    color: #FFFFFF;
  }
`;

const ContentBottomLeftContent = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  gap: 16px;
`

const ContentBottomItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 130px;
  width: 174px;
  background: url("images/tools_item_bg.svg") no-repeat;
  background-size: cover;
  border-radius: 16px;
  img {
    margin-bottom: 8px;
    width: 50px;
  }
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
  }
`

const ContentBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 48px;
  width: 50%;
  h3 {
    font-weight: 590;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
  }
  span {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.006em;
    color: #FFFFFF;
    margin: 32px 0;
  }
  
  div {
    margin-bottom: 12px;
  }
`

const ImgWrapper = styled.div`
  width: 50%;

  img {
    width: 680px;
  }
`;

const JoinCommunity = styled.div`
  width: 100%;
  margin-top: 88px;
`

const JoinCommunityTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-weight: 590;
  font-size: 64px;
  line-height: 68px;
  letter-spacing: 0.008em;
  color: #ffffff;
  h3 {
    color: #BDFDE2;
    font-size: 64px;
    line-height: 68px;
  }
`

const JoinCommunityContent = styled.div`
  margin-top: 120px;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 16px;
  align-items: center;
  width: 100%;
`

const JoinCommunityItem = styled.div`
  padding: 48px;
  height: 332px;
  background: #141414;
  border-radius: 32px;
  
  h3 {
    font-weight: 590;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
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
`

const InterestedPartnerships = styled.div`
  margin-top: 88px;
  display: flex;
  align-items: center;
  background: #141414;
  border-radius: 32px;
  padding: 48px;
  &>div {
    flex: 0 0 50%;
    &:first-child {
      padding-right: 48px;
    }
    h3 {
      font-weight: 590;
      font-size: 48px;
      line-height: 60px;
      letter-spacing: 0.008em;
      color: #FFFFFF;
      margin-bottom: 32px;
    }
    span {
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.006em;
      color: #FFFFFF;
      display: inline-block;
      margin-bottom: 20px;
    }
  }
`

const GetInvolvedInTheIndustry = styled(InterestedPartnerships)`
  width: 100%;
  margin-top: 24px;
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
