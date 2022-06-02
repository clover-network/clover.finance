import React, { ReactElement, useState } from "react";
import styled, { css } from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import { WrapperDesktopOnly, WrapperMobileOnly } from '../../CloverLibrary';
import { breakpoint } from "../../mixins/breakpoint";
import { t } from '../../i18n/intl';
import { Locale, setLocale } from '../../i18n/i18nSlice';
import { useLocale } from '../../i18n/useLocale';
import store from '../../../src/state';
import { Socials } from '../../Socials';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 88px;
  background: ${(props) => props.theme.colors.NEUTRAL};
  ${breakpoint(css`
    height: 70px;
  `)};
`;
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 128px;
  margin: 0 auto;
  max-width: 1440px;
  min-width: 1000px;
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
  ${breakpoint(css`
    //width: 100%;
    //justify-content: center;
  `)};

  img {
    height: 38px;
    object-fit: contain;
    flex: 1 1 0%;
    ${breakpoint(css`
      height: 24px;
    `)};
  }

  .nav-bar {
    margin-top: -13px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`

const Link = styled(NavLink)`
  margin-right: 32px;
  color: ${(props) => props.theme.colors.BACKGROUND};
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  
  & > div {
    left: 0;
  }
  
  img {
    margin-left: 4px;
    margin-bottom: -4px;
    height: 24px !important;
    width: 24px !important;
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }
  
  &:hover {
    text-decoration: none;
    img {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }

  &.active {
    position: relative;
    &::after {
      content: " ";
      display: flex;
      width: 100%;
      height: 3px;
      background: ${(props) => props.theme.colors.BAR};
      position: absolute;
      bottom: -10px;
      right: 0;
    }
  }
`;

const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 24px;
    margin: 0 12px;
    cursor: pointer;
  }
`

const WebWallet = styled.div`
  border: 1px solid #000000;
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
  right: 0;
  padding-top: 40px;
  margin-top: -10px;
`

const MenuList = styled.div`
  color: ${(props) => props.theme.colors.BACKGROUND};
  background-color: ${(props) => props.theme.colors.TITLE};
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 8px 16px;
  z-index: 10;
  width: fit-content;

  div {
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
    div {
      padding-bottom: 24px;
      border: none;
      text-align: left;
    }
  `)};
`

const Navs = styled(MenuList)`
  height: calc(100vh - 68px);
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
    color: #000;
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
}> = ({ hideShowList }) => {
  const menuList = [
    {
      name: 'CROSS-CHAIN EXPLORER',
      url: 'https://tx.clover.finance'
    },
    {
      name: 'EVM BRIDGE',
      url: 'https://bridge.clv.org/'
    },
    {
      name: 'CLOVER SCAN',
      url: 'https://clvscan.com/'
    },
  ]
  return (
    <MenuListWrapper>
      <MenuList>
        {menuList.map(item => (
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

export default function Header(props: any): ReactElement {
  const { navList, currentTab, handleChange } = props;
  const [showList, setShowList] = useState(false);
  const [showClvChainList, setShowClvChainList] = useState(false);
  const [showNavs, setShowNavs] = useState(false);

  const openUrl = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <HeaderWrapper>
      <HeaderContent>
        <WrapperMobileOnly>
          <HeaderIcon
            src="images/language_icon.svg"
            alt=""
            onClick={() => setShowList(!showList)}
          />
        </WrapperMobileOnly>
        <HeaderDiv>
          <img src="images/Logo.svg" alt="" />
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
            <HeaderDiv>
              <Navbar variant="light" className="nav-bar">
                <Nav>
                  {navList.map((nav: any) => (
                    nav.path === "/" ? (
                      <Link
                        active={currentTab.name === nav.name}
                        onClick={() => handleChange(nav)}
                        key={nav.name}
                        onMouseEnter={(e: any) => {
                          e.stopPropagation();
                          setShowClvChainList(true)
                        }}
                        onMouseLeave={(e: any) => {
                          e.stopPropagation();
                          setShowClvChainList(false)
                        }}
                      >
                        {nav.name}
                        <img src='/images/clv_arrow_down.svg' alt=''/>
                        {/*<ClvChainList hideShowList={() => setShowClvChainList(false)} />*/}
                        {showClvChainList && <ClvChainList hideShowList={() => setShowClvChainList(false)} />}
                      </Link>
                    ) : (
                      <Link
                        active={currentTab.name === nav.name}
                        onClick={() => handleChange(nav)}
                        key={nav.name}
                      >
                        {nav.name}
                      </Link>
                    )
                  ))}
                </Nav>
              </Navbar>
            </HeaderDiv>
            <ButtonIcon>
              <img onClick={() => openUrl('https://apps.apple.com/app/clover-wallet/id1570072858')} src="images/apple_icon.svg" alt="" />
              <img onClick={() => openUrl('https://github.com/clover-network/clover-multichain-mobile-wallet-release/releases/latest/download/clover.apk')} src="images/google_play_icon.svg" alt="" />
              <img onClick={() => openUrl('https://chrome.google.com/webstore/detail/clover-wallet/nhnkbkgjikgcigadomkphalanndcapjk')} src="images/chrome_icon.svg" alt="" />
            </ButtonIcon>
            <WebWallet onClick={() => openUrl('https://wallet.clover.finance/')}>{t('webWallet')}</WebWallet>
            <Language>
              <img
                src="images/language_icon.svg"
                alt=""
                onClick={() => setShowList(!showList)}
              />
              {showList && <Languages hideShowList={() => setShowList(false)} />}
            </Language>
            <SakuraDiv onClick={() => window.open('https://sakurafinance.io')}>
              <img src='images/sakura_icon.svg' alt='' />
              <span>Sakura <br/>Sisternet</span>
            </SakuraDiv>
          </HeaderRight>
        </WrapperDesktopOnly>
      </HeaderContent>
      <WrapperMobileOnly>
        {showList && <Languages hideShowList={() => setShowList(false)} />}
      </WrapperMobileOnly>
      <WrapperMobileOnly>
        {showNavs && (
          <Navs>
            {navList.map((nav: any) => (
              <div
                onClick={() => {
                  handleChange(nav);
                  setShowNavs(false)
                }}
                key={nav.name}
              >
                {nav.name}
              </div>
            ))}
            <SakuraDiv onClick={() => window.open('https://sakurafinance.io')}>
              <img src='images/sakura_icon.svg' alt='' />
              <span>Sakura <br/>Sisternet</span>
            </SakuraDiv>
            <VerticalSocials />
          </Navs>
        )}
      </WrapperMobileOnly>
    </HeaderWrapper>
  );
}
