import React from "react";
import styled, { css } from 'styled-components';
import { breakpoint } from "../../mixins/breakpoint";
import { t } from '../../i18n/intl';
import {WrapperDesktopOnly, WrapperMobileOnly} from "../../CloverLibrary";

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
            <WrapperMobileOnly>
              <FooterTopRight isWallet={isWallet}>
                <div>{t('comeSayHello')}</div>
                <a href="mailto:info@clover.finance">info@clover.finance</a>
              </FooterTopRight>
            </WrapperMobileOnly>
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
                      href="https://portal.clv.org"
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
            <WrapperDesktopOnly>
              <FooterTopRight isWallet={isWallet}>
                <div>{t('comeSayHello')}</div>
                <a href="mailto:info@clover.finance">info@clover.finance</a>
              </FooterTopRight>
            </WrapperDesktopOnly>
          </FooterTop>
          <FooterBottom>
            <WrapperMobileOnly>
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
            </WrapperMobileOnly>
            <FooterBottomLeft isWallet={isWallet}>
              <img src={isWallet ? 'images/logo_gray2.svg' : 'images/logo_gray.svg'} alt='' />
              <span>CLV © All Rights Reserved</span>
            </FooterBottomLeft>
            <WrapperDesktopOnly>
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
            </WrapperDesktopOnly>
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

  ${breakpoint({
    mobile: css`
      padding: 24px;
      min-width: unset;
      max-width: unset;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })}
`

const FooterColumn = styled.div`
  padding-right: 48px;

  ${breakpoint({
    mobile: css`
      padding: 0;
      flex: 1;
      width: 0;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })}
`;

const FooterColumnLabel = styled.div<{
  isWallet?: boolean
}>`
  font-family: Inter;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.006em;
  color: ${({isWallet}) => (isWallet ? '#000000' : '#FFFFFF')};

  ${breakpoint({
    mobile: css`
      font-weight: 700;
      font-size: 12px;
      line-height: 20px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })}
`;

const DivFooterColumns = styled.div`
`;

const FooterTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  ${breakpoint({
    mobile: css`
      flex-direction: column;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })}
`

const FooterTopLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 0 0 50%;

  ${breakpoint({
    mobile: css`
      width: 100%;
      flex-direction: row;
      margin-top: 32px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })}
`

const FooterTopRight = styled.div<{
  isWallet?: boolean
}>`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  div {
    font-family: Inter;
    font-weight: 400;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: 0.002em;
    color: ${({isWallet}) => (isWallet ? '#000000' : '#FFFFFF')};
    margin-bottom: 24px;

    ${breakpoint({
      mobile: css`
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #FFFFFF;
        opacity: 0.6;
        margin-bottom: 4px;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })}
  }
  
  a {
    font-weight: 600;
    font-size: 48px;
    line-height: 52px;
    letter-spacing: 0.008em;
    color: ${({isWallet}) => (isWallet ? '#000000' : '#FFFFFF')};
    text-decoration: none;

    ${breakpoint({
      mobile: css`
        font-weight: 500;
        font-size: 28px;
        line-height: 36px;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })}

    &:hover {
      background-image:-webkit-linear-gradient(right, #9BDAF6, #BDFDE2);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
    }
  }
`

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${breakpoint({
    mobile: css`
      flex-direction: column;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })}
`

const FooterBottomLeft = styled.div<{
  isWallet?: boolean
}>`
  display: flex;
  align-items: center;
  margin-top: 88px;
  flex: 0 0 50%;

  ${breakpoint({
    mobile: css`
      margin-top: 32px;
      flex-direction: row;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })}
  
  span {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.006em;
    color: ${({isWallet}) => (isWallet ? '#000000' : '#FFFFFF')};
    opacity: 0.6;

    ${breakpoint({
      mobile: css`
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        flex: 1;
        text-align: end;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })}
  }
  img {
    margin-right: 60px;

    ${breakpoint({
      mobile: css`
        margin-right: 0;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })}
  }
`

const FooterBottomRight = styled.div<{
  isWallet?: boolean
}>`
  flex: 0 0 50%;
  margin-top: 48px;
  
  & > span {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.006em;
    color: ${({isWallet}) => (isWallet ? '#000000' : '#FFFFFF')};
    opacity: 0.6;

    ${breakpoint({
      mobile: css`
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0.006em;
      `,
      tablet: css`
      `,
      tablet_mini: css`
      `
    })}
  }
`

const SocialsDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  ${breakpoint({
    mobile: css`
      margin-top: 8px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })}
`

const SocialsImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  transition: 0.3s;

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

    &:hover {
      opacity: 1;
      a {
        color: ${({isWallet}) => (isWallet ? '#000000' : '#FFFFFF')};
      }
    }
  }
`;

const Link = styled.div`
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.006em;
  margin-top: 12px;
  white-space: nowrap;

  ${breakpoint({
    mobile: css`
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })}
`;
