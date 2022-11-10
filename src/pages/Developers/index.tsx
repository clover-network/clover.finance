import React from 'react';
import { t } from '../../i18n/intl';
import { Footer } from '../components/Footer';
import {
  Content,
  SocialsImg,
  UpperCaseSpan,
  EnterWeb3,
  Background,
  ContentWrapper,
  TextWrapper,
  ContentBottom,
  ContentBottomLeft,
  ContentBottomLeftTitle,
  ContentBottomLeftContent,
  ContentBottomItem,
  ContentBottomRight,
  JoinCommunity,
  JoinCommunityTitle,
  JoinCommunityContent,
  JoinCommunityItem,
  InterestedPartnerships,
  GetInvolvedInTheIndustry,
  LandingContainer,
  BuildWithCLVEnterWeb3,
  BuildWithCLVEnterWeb3Img,
  BuildWithCLVEnterWeb3Span,
  ContentBottomGraybutton,
  StyledAWrapper,
  StyledNormalButton,
  Wrapper,
} from './styled';

export const Developers: React.FC = () => {
  const tools = [
    {
      icon: 'images/metaMask.svg',
      name: 'MetaMask',
    },
    {
      icon: 'images/onto_wallet.svg',
      name: 'Onto Wallet',
    },
    {
      icon: 'images/multichain.svg',
      name: 'Multichain',
    },
    {
      icon: 'images/beosin.svg',
      name: 'Beosin',
    },
    {
      icon: 'images/dia.svg',
      name: 'DIA',
    },
    {
      icon: 'images/standard.svg',
      name: 'Standard Protocol',
    },
  ];
  return (
    <Wrapper>
      <Background />
      <LandingContainer>
        <EnterWeb3>
          <video webkit-playsinline autoPlay loop muted src="videos/particles.mp4"></video>
          <div>
            <ContentWrapper>
              <TextWrapper>
                <BuildWithCLVEnterWeb3>
                  {t('buildWithCLVEnterWeb3')}
                  <BuildWithCLVEnterWeb3Img src="images/clv_icon1.svg" alt="" />
                </BuildWithCLVEnterWeb3>
                <BuildWithCLVEnterWeb3Span>
                  {t('buildWithCLVEnterWeb3Hint')}
                </BuildWithCLVEnterWeb3Span>
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
                      <img width={50} height={50} src={tool.icon} alt="" />
                      <span>{tool.name}</span>
                    </ContentBottomItem>
                  ))}
                </ContentBottomLeftContent>
              </ContentBottomLeft>
              <ContentBottomRight>
                <h3>{t('supportTools')}</h3>
                <span>{t('supportToolsHint')}</span>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <ContentBottomGraybutton
                    onClick={() =>
                      window.open(
                        'https://docs.clv.org/clv-chain-developer-guide/introduction',
                        '_blank',
                      )
                    }
                  >
                    {t('viewDocumentation')}
                  </ContentBottomGraybutton>
                  <ContentBottomGraybutton
                    onClick={() =>
                      window.open('https://github.com/clover-network', '_blank')
                    }
                  >
                    {t('getGithubRepo')}
                  </ContentBottomGraybutton>
                  <ContentBottomGraybutton
                    onClick={() =>
                      window.open(
                        'https://docs.clv.org/clv-chain-developer-guide/using-testnet',
                        '_blank',
                      )
                    }
                  >
                    {t('viewTestnet')}
                  </ContentBottomGraybutton>
                </div>
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
                <StyledAWrapper>
                  <a
                    href="https://t.me/clvorg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SocialsImg src={`images/telegram.svg`} />
                  </a>
                  <a
                    href="https://discord.com/invite/M6SxuXqMVB"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SocialsImg src={`images/discord.svg`} />
                  </a>
                  <a
                    href="https://medium.com/@clv_org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SocialsImg src={`images/medium.svg`} />
                  </a>
                </StyledAWrapper>
              </JoinCommunityTitle>
              <JoinCommunityContent>
                <JoinCommunityItem>
                  <UpperCaseSpan>{t('integrateOnCLVEcosystem')}</UpperCaseSpan>
                  <h3>{t('integrateCLVWallet')}</h3>
                  <span>{t('integrateCLVWalletHint')}</span>
                  <StyledNormalButton
                    onClick={() =>
                      window.open(
                        'https://docs.clv.org/clover-wallet/dapp-integration',
                        '_blank',
                      )
                    }
                  >
                    {t('learnMore')}
                  </StyledNormalButton>
                </JoinCommunityItem>
                <JoinCommunityItem>
                  <h3>{t('bugBountyProgram')}</h3>
                  <span>{t('bugBountyProgramHint')}</span>
                  <ContentBottomGraybutton
                    onClick={() =>
                      window.open(
                        'https://docs.clv.org/clover-ecosystem/incentive-programs/clv-bug-bounty-program',
                        '_blank',
                      )
                    }
                  >
                    {t('visitTheSolution')}
                  </ContentBottomGraybutton>
                </JoinCommunityItem>
                <div></div>
                <JoinCommunityItem>
                  <h3>{t('CLVFaucet')}</h3>
                  <span>{t('CLVFaucetHint')}</span>
                  <ContentBottomGraybutton
                    onClick={() =>
                      window.open(
                        'https://docs.clv.org/clv-chain-developer-guide/using-testnet/faucet',
                        '_blank',
                      )
                    }
                  >
                    {t('visitTheSolution')}
                  </ContentBottomGraybutton>
                </JoinCommunityItem>
              </JoinCommunityContent>
            </JoinCommunity>
            <InterestedPartnerships>
              <div>
                <h3>{t('interestedInNewPartnerships')}</h3>
                <span>{t('interestedInNewPartnershipsHint1')}</span>
                <span>{t('interestedInNewPartnershipsHint2')}</span>
                <ContentBottomGraybutton
                  onClick={() =>
                    window.open(
                      'https://docs.google.com/forms/u/3/d/e/1FAIpQLSfQevVEw_hL44vvbcMkYB8kKdzTFAbtD1pR-QVraaA7h4jpKg/viewform',
                      '_blank',
                    )
                  }
                >
                  {t('getInTouch')}
                </ContentBottomGraybutton>
              </div>
              <div>
                <img src="images/partnerships.svg" alt="" />
              </div>
            </InterestedPartnerships>
            <GetInvolvedInTheIndustry>
              <div>
                <img src="images/industry.png" alt="" />
              </div>
              <div>
                <h3>{t('getInvolvedInTheIndustry')}</h3>
                <span>{t('getInvolvedInTheIndustryHint')}</span>
                <ContentBottomGraybutton
                  onClick={() => window.open('https://twitter.com/clv_org')}
                >
                  {t('learnMore')}
                </ContentBottomGraybutton>
              </div>
            </GetInvolvedInTheIndustry>
          </div>
        </Content>
      </LandingContainer>
      <Footer />
    </Wrapper>
  );
};
