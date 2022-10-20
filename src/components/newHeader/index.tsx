import React, { ReactElement, useState } from "react";
import styled, { css } from "styled-components";
import { WrapperDesktopOnly, WrapperMobileOnly } from '../../CloverLibrary';
import { breakpoint } from "../../mixins/breakpoint";
import { t } from '../../i18n/intl';
import { useRouter } from 'next/router';

const Wrapper = styled.div<{
  isWallet?: boolean
}>`
  width: 100%;
  height: 96px;
  position: absolute;
  top: 0;
  z-index: 10;
  background: transparent;
  border-bottom: 1px solid ${({isWallet}) => (isWallet ? '#EFF5F5' : '#333232')};
  ${breakpoint(css`
    height: 70px;
  `)};
`

const HeaderWrapper = styled.div`
  height: 100%;
  max-width: 1440px;
  min-width: 1440px;
  margin: 0 auto;
  ${breakpoint(css`
    height: 70px;
  `)};
`;
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 64px;
  margin: 0 auto;
  ${breakpoint(css`
    min-width: initial;
    padding: 25px;
  `)};
`;

const HeaderIcon = styled.img`
  width: 20px;
`

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  cursor: pointer;
  ${breakpoint(css`
    //width: 100%;
    //justify-content: center;
  `)};

  img {
    height: 32px;
    object-fit: contain;
    flex: 1 1 0%;
    ${breakpoint(css`
      height: 24px;
    `)};
  }
`;

const NavWrapper = styled.div<{
  isWallet?: boolean
}>`
  display: flex;
  align-items: center;
  
  span {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 0.006em;
    color: ${({isWallet}) => (isWallet ? '#000000' : '#ffffff')};
    cursor: pointer;
    margin-left: 32px;
    &:hover {
      opacity: 0.8;
    }
    
    &.selected {
      opacity: 0.6;
    }
  }
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
  }
`

const WalletBtns = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
`

const LogIn = styled.div`
  padding: 8px 18px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.006em;
  color: #0C0B0B;
  cursor: pointer;
`

// const SignUp = styled.div`
//   padding: 8px 18px;
//   background: #0C0B0B;
//   border-radius: 8px;
//   font-family: Inter;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   letter-spacing: 0.006em;
//   color: #FFFFFF;
//   margin-left: 8px;
//   cursor: pointer;
// `

const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 40px;
    margin-right: 8px;
    cursor: pointer;
  }
`
export default function NewHeader(props: any): ReactElement {
  const { navList, currentTab, handleChange } = props;
  const [showNavs, setShowNavs] = useState(false);
  const isWallet = currentTab.name === t('wallet')
  const location = useRouter();

  const openUrl = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <Wrapper isWallet={isWallet}>
      <HeaderWrapper>
        <HeaderContent>
          <HeaderDiv onClick={() => {location.push('/', undefined, { shallow: true });}}>
            <img src={isWallet ? 'images/logo.svg' : 'images/logo_white.svg'} alt="" />
          </HeaderDiv>
          <WrapperMobileOnly>
            <HeaderIcon
              src={showNavs ? 'images/close_icon.svg' : 'images/menu_icon.svg'}
              alt=""
              onClick={() => setShowNavs(!showNavs)}
            />
          </WrapperMobileOnly>
          <WrapperDesktopOnly>
            <HeaderRight>
              <div>
                <NavWrapper isWallet={isWallet}>
                  {navList.map((nav: any) => (
                    <span
                      className={currentTab.name === nav.name ? 'selected' : ''}
                      onClick={() => handleChange(nav)}
                      key={nav.name}
                    >
                    {nav.name}
                  </span>
                  ))}
                </NavWrapper>
              </div>
              {isWallet && <WalletBtns>
                <ButtonIcon>
                  <img onClick={() => openUrl('https://apps.apple.com/app/clover-wallet/id1570072858')} src="images/apple_icon.svg" alt="" />
                  <img onClick={() => openUrl('https://github.com/clover-network/clover-multichain-mobile-wallet-release/releases/latest/download/clover.apk')} src="images/google_play_icon.svg" alt="" />
                  <img onClick={() => openUrl('https://chrome.google.com/webstore/detail/clv-wallet/nhnkbkgjikgcigadomkphalanndcapjk')} src="images/chrome_icon.svg" alt="" />
                </ButtonIcon>
                <LogIn onClick={() => openUrl('https://portal.clv.org')}>CLV Portal</LogIn>
                {/*<SignUp onClick={() => openUrl('https://portal.clv.org')}>Sign Up</SignUp>*/}
              </WalletBtns>}
            </HeaderRight>
          </WrapperDesktopOnly>
        </HeaderContent>
      </HeaderWrapper>
    </Wrapper>
  );
}
