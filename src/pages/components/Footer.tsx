import React from "react";
import styled, { css } from 'styled-components';
import { breakpoint } from "../../mixins/breakpoint";
import { t } from '../../i18n/intl';

interface FooterProps {
  isWallet?: boolean;
}

export const Footer = ({isWallet}: FooterProps) => {
  const prefix = isWallet ? 'black-' : ''
  return (
    <Wrapper isWallet={isWallet}>
      <FooterWrapper>
        <DivFooterColumns>
          <FooterTop>
            <FooterTopLeft>
              <FooterColumn>
                <FooterColumnLabel isWallet={isWallet}>{t('resources')}</FooterColumnLabel>
                <Links isWallet={isWallet}>
                  <Link>
                    <a
                      href="https://medium.com/@clv_org"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('medium')}
                    </a>
                  </Link>
                </Links>
              </FooterColumn>
              <FooterColumn>
                <FooterColumnLabel isWallet={isWallet}>{t('products')}</FooterColumnLabel>
                <Links isWallet={isWallet}>
                  <Link>
                    <a
                      href="https://apps.apple.com/app/clover-wallet/id1570072858"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('iOSWallet')}
                    </a>
                  </Link>
                  <Link>
                    <a
                      href="https://github.com/clover-network/clover-multichain-mobile-wallet-release/releases/latest/download/clover.apk"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('androidWallet')}
                    </a>
                  </Link>
                  <Link>
                    <a
                      href="https://chrome.google.com/webstore/detail/clover-wallet/nhnkbkgjikgcigadomkphalanndcapjk"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('extensionWallet')}
                    </a>
                  </Link>
                  <Link>
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('CLVPortal')}
                    </a>
                  </Link>
                  <Link>
                    <a
                      href="https://clover.subscan.io/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('explorer')}
                    </a>
                  </Link>
                </Links>
              </FooterColumn>
              <FooterColumn>
                <FooterColumnLabel isWallet={isWallet}>{t('contactUs')}</FooterColumnLabel>
                <Links isWallet={isWallet}>
                  <Link>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScl4kp4hD4Dv9JnPIdKEkTxL4ctVZQJtVoezeVqQVi676iKvw/viewform"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('walletIntegration')}
                    </a>
                  </Link>
                  <Link>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfQevVEw_hL44vvbcMkYB8kKdzTFAbtD1pR-QVraaA7h4jpKg/viewform"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('generalPartnership')}
                    </a>
                  </Link>
                </Links>
              </FooterColumn>
            </FooterTopLeft>
            <FooterTopRight isWallet={isWallet}>
              <div>{t('comeSayHello')}</div>
              <a href="mailto:info@clover.finance">info@clover.finance</a>
            </FooterTopRight>
          </FooterTop>
          <FooterBottom>
            <FooterBottomLeft isWallet={isWallet}>
              <img src={isWallet ? 'images/logo_gray2.svg' : 'images/logo_gray.svg'} alt='' />
              <span>CLV © All Rights Reserved</span>
            </FooterBottomLeft>
            <FooterBottomRight isWallet={isWallet}>
              <span>{t('orFollowUs')}</span>
              <SocialsDiv>
                <a href="https://t.me/clvorg" target="_blank" rel="noreferrer">
                  <SocialsImg src={`images/${prefix}telegram.svg`} />
                </a>
                <a href="https://twitter.com/clover_finance/" target="_blank" rel="noreferrer">
                  <SocialsImg src={`images/${prefix}twitter.svg`} />
                </a>
                <a href="https://discord.com/invite/M6SxuXqMVB" target="_blank" rel="noreferrer">
                  <SocialsImg src={`images/${prefix}discord.svg`} />
                </a>
                <a href="https://medium.com/@clv_org" target="_blank" rel="noreferrer">
                  <SocialsImg src={`images/${prefix}medium.svg`} />
                </a>
                <a href="https://www.youtube.com/channel/UCrEoV9sw6lxTR6PLasqfP9Q" target="_blank" rel="noreferrer">
                  <SocialsImg src={`images/${prefix}youtobe.svg`} />
                </a>
                <a href="https://www.tiktok.com/@clvbyclover" target="_blank" rel="noreferrer">
                  <SocialsImg src={`images/${prefix}tiktok.svg`} />
                </a>
              </SocialsDiv>
            </FooterBottomRight>
          </FooterBottom>
        </DivFooterColumns>
      </FooterWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  isWallet?: boolean
}>`
  border-top: 1px solid ${({isWallet}) => (isWallet ? '#EFF5F5' : '#333232')};
  background: ${({isWallet}) => (isWallet ? 'transparent' : '#000000')};
  width: 100%;
`

const FooterWrapper = styled.div<{
  isWallet?: boolean
}>`
  max-width: 1440px;
  min-width: 1440px;
  margin: 0 auto;
  padding: 80px 64px;
`

const FooterColumn = styled.div`
  padding-right: 48px;
  ${breakpoint(css`
    margin-bottom: 24px;
  `)};
`;

const FooterColumnLabel = styled.div<{
  isWallet?: boolean
}>`
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.006em;
  color: ${({isWallet}) => (isWallet ? '#000000' : '#FFFFFF')};
`;

const DivFooterColumns = styled.div`
`;

const FooterTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

const FooterTopLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 0 0 50%;
`

const FooterTopRight = styled.div<{
  isWallet?: boolean
}>`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  div {
    font-weight: 400;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: 0.002em;
    color: ${({isWallet}) => (isWallet ? '#000000' : '#FFFFFF')};
    margin-bottom: 24px;
  }
  
  a {
    font-weight: 590;
    font-size: 48px;
    line-height: 52px;
    letter-spacing: 0.008em;
    color: ${({isWallet}) => (isWallet ? '#000000' : '#FFFFFF')};
  }
`

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
`

const FooterBottomLeft = styled.div<{
  isWallet?: boolean
}>`
  display: flex;
  align-items: center;
  margin-top: 88px;
  flex: 0 0 50%;
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.006em;
    color: ${({isWallet}) => (isWallet ? '#000000' : '#FFFFFF')};
    opacity: 0.6;
  }
  img {
    margin-right: 60px;
  }
`

const FooterBottomRight = styled.div<{
  isWallet?: boolean
}>`
  flex: 0 0 50%;
  margin-top: 48px;
  & > span {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.006em;
    color: ${({isWallet}) => (isWallet ? '#000000' : '#FFFFFF')};
    opacity: 0.6;
  }
`

const SocialsDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`

const SocialsImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  &:hover {
    opacity: 0.8;
  }
`

const Links = styled.div<{
  isWallet?: boolean
}>`
  & > div {
    color: ${({isWallet}) => (isWallet ? '#000000' : '#FFFFFF')};
    opacity: 0.6;
  }
`;

const Link = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.006em;
  margin-top: 12px;
  white-space: nowrap;
`;
