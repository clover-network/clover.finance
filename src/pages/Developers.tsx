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
      <LandingContainer>
        <EnterWeb3>
          <ContentWrapper>
            <TextWrapper>
              <div>
                {t('enterWeb3WithConfidence')}
                <img src='images/clv_icon1.svg' alt='' />
              </div>
              <span>{t('enterWeb3WithConfidenceHint')}</span>
            </TextWrapper>
            <ImgWrapper>
            </ImgWrapper>
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
              <UpperCaseSpan>{t('buildWithClover')}</UpperCaseSpan>
              <h3>{t('supportTools')}</h3>
              <span>{t('supportToolsHint')}</span>
              <GrayButton>{t('viewDocumentation')}</GrayButton>
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
        </EnterWeb3>
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
              <h3>{t('CLVFaucet')}</h3>
              <span>{t('CLVFaucetHint')}</span>
              <GrayButton>{t('visitTheSolution')}</GrayButton>
            </JoinCommunityItem>
            <JoinCommunityItem>
              <h3>{t('bugBountyProgram')}</h3>
              <span>{t('bugBountyProgramHint')}</span>
              <GrayButton>{t('visitTheSolution')}</GrayButton>
            </JoinCommunityItem>
            <JoinCommunityItem></JoinCommunityItem>
            <JoinCommunityItem>
              <UpperCaseSpan>{t('integrateOnCLVEcosystem')}</UpperCaseSpan>
              <h3>{t('integrateCLVWallet')}</h3>
              <span>{t('integrateCLVWalletHint')}</span>
              <NormalButton>{t('visitTheSolution')}</NormalButton>
            </JoinCommunityItem>
          </JoinCommunityContent>
        </JoinCommunity>
        <InterestedPartnerships>
          <h3>{t('interestedInNewPartnerships')}</h3>
          <span>{t('interestedInNewPartnershipsHint1')}</span>
          <span>{t('interestedInNewPartnershipsHint2')}</span>
          <GrayButton>{t('getInTouch')}</GrayButton>
        </InterestedPartnerships>
        <GetInvolvedInTheIndustry>
          <GetInvolvedInTheIndustryContent>
            <h3>{t('getInvolvedInTheIndustry')}</h3>
            <span>{t('getInvolvedInTheIndustryHint')}</span>
            <GrayButton>{t('learnMore')}</GrayButton>
          </GetInvolvedInTheIndustryContent>
        </GetInvolvedInTheIndustry>
      </LandingContainer>
      <Footer />
    </div>
  );
};

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
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 80px;
  width: 100%;
`;

const ContentBottomLeft = styled.div`
  width: 50%;
  padding: 32px;
  background: linear-gradient(39.66deg, rgba(189, 253, 226, 0.4) -8.36%, rgba(155, 218, 246, 0.4) 143.89%);
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
  background: #303D3C;
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
  margin-top: 68px;
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
  margin-top: 228px;
  width: 50%;
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
`

const GetInvolvedInTheIndustry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`

const GetInvolvedInTheIndustryContent = styled(InterestedPartnerships)`
  margin-top: 72px;
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
