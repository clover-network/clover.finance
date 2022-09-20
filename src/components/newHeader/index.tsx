import React, { ReactElement, useState } from "react";
import styled, { css } from "styled-components";
import { WrapperDesktopOnly, WrapperMobileOnly } from '../../CloverLibrary';
import { breakpoint } from "../../mixins/breakpoint";
import { t } from '../../i18n/intl';
import { Locale, setLocale } from '../../i18n/i18nSlice';
import store from '../../../src/state';
import { Socials } from '../../Socials';
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
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.006em;
  color: #0C0B0B;
  margin-right: 8px;
`

const SignUp = styled.div`
  padding: 8px 18px;
  background: #0C0B0B;
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.006em;
  color: #FFFFFF;
`

const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 40px;
    margin-right: 8px;
    cursor: pointer;
  }
`

const WebWallet = styled.div`
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.BACKGROUND};
  padding: 6px 16px;
  margin: 0 40px;
  cursor: pointer;
`

const Language = styled.div`
  position: relative;
  & > img {
    width: 28px;
    cursor: pointer;
  }
`

const MenuListWrapper = styled.div`
  position: absolute;
  z-index: 10;
  right: 0;
  padding-top: 40px;
  margin-top: -10px;

  ${breakpoint(css`
    top: 69px;
    left: 0;
    padding: 0;
    margin: 0;
    & > div {
      width: 100%;
    }
  `)};
`

const MenuList = styled.div`
  color: ${(props) => props.theme.colors.BACKGROUND};
  background-color: ${(props) => props.theme.colors.TITLE};
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 8px 16px;
  width: fit-content;
 
  & > div {
    padding: 8px;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.BACKGROUND};
    border-bottom: 1px solid #C4C4C4;
    cursor: pointer;
    white-space: nowrap;
    width: 100%;
    &:hover {
      opacity: 0.7;
    }
    
    &:last-child {
      border: none;
    }
  }
  ${breakpoint(css`
    top: 69px;
    left: 0;
    border: none;
    border-radius: 0;
    & > div {
      padding-bottom: 24px;
      border: none;
      text-align: left;
    }
  `)};
`

const Navs = styled(MenuList)`
  height: calc(100vh - 68px);
  width: 100%;
  position: absolute;
  z-index: 10;
  right: 0;
`

const RowMobile = styled.div`
  opacity: 1!important;
  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  & > div:nth-child(2) {
    padding: 9px;
    margin-bottom: -27px;
    div {
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      text-transform: uppercase;
      color: #ffffff;
      padding: 9px;
    }
  }
`

const VerticalSocials = styled(Socials)`
  img {
    width: 32px;
  }
`;

const SakuraDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 30px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  img {
    width: 18px;
    margin-right: 10px;
  }
  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    color: #ffffff;
    word-break: break-word;
  }
  ${breakpoint(css`
    padding-top: 25px!important;
    border-top: 1px solid #c4c4c4 !important;
    margin-left: 0;
    opacity: 1;
  `)};
`;

const Languages: React.FC<{
  hideShowList: () => void;
}> = ({ hideShowList }) => {
  return (
    <MenuListWrapper>
      <MenuList>
        <div
          onClick={() => {
            hideShowList()
            store.dispatch(setLocale(Locale.en))
          }}
        >ENGLISH</div>
        <div
          onClick={() => {
            hideShowList()
            store.dispatch(setLocale(Locale.zh))
          }}
        >汉语</div>
      </MenuList>
    </MenuListWrapper>
  )
}

const ClvChainList: React.FC<{
  hideShowList: () => void;
  menuList: any;
}> = ({ hideShowList, menuList }) => {
  return (
    <MenuListWrapper>
      <MenuList>
        {menuList.map((item: any) => (
          <div
            onClick={() => {
              hideShowList()
              window.open(item.url)
            }}
          >{item.name}</div>
        ))}
      </MenuList>
    </MenuListWrapper>
  )
}

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
                <LogIn onClick={() => openUrl('https://wallet.clover.finance/')}>Log In</LogIn>
                <SignUp onClick={() => openUrl('https://wallet.clover.finance/')}>Sign Up</SignUp>
              </WalletBtns>}
            </HeaderRight>
          </WrapperDesktopOnly>
        </HeaderContent>
      </HeaderWrapper>
    </Wrapper>
  );
}
