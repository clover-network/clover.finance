import React, { ReactElement, useState } from "react";
import styled, { css } from "styled-components";
import {WrapperDesktopOnly, WrapperMobileOnly, WrapperTableMiniOnly, WrapperTableOnly} from '../../CloverLibrary';
import { breakpoint } from "../../mixins/breakpoint";
import { t } from '../../i18n/intl';
import { useRouter } from 'next/router';
import {HeaderMobileMenu} from "./HeaderMobileMenu";

interface Props {
  navList: any[];
  currentTab: any;
  handleChange: (tab: any) => void;
}

const Wrapper = styled.div<{
  isWallet?: boolean
}>`
  width: 100%;
  height: 93px;
  //position: absolute;
  top: 0;
  z-index: 10;
  background: ${({isWallet}) => (isWallet ? 'transparent' : '#000000')};
  border-bottom: 1px solid ${({ isWallet }) => (isWallet ? '#EFF5F5' : '#333232')};

  ${breakpoint({
    mobile: css`
      height: 48px;
    `,
    tablet_mini: css`
      height: 48px;
    `,
    tablet: css`
      height: 64px;
    `,
  })};
`

const HeaderWrapper = styled.div`
  height: 93px;
  width: 100%;
  margin: 0 auto;
  position: relative;

  ${breakpoint({
    mobile: css`
      height: 48px;
    `,
    tablet_mini: css`
      height: 48px;
    `,
    tablet: css`
      height: 64px;
    `,
  })};
`;
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 64px;
  margin: 0 auto;
  
  ${breakpoint({
    mobile: css`
      padding: 0 24px !important;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};
`;

const HeaderIcon = styled.img`
  width: 20px;
  cursor: pointer;

  ${breakpoint({
    mobile: css`
    `,
    tablet: css`
    `,
    tablet_mini: css`
      width: 24px;
      height: 24px;
    `
  })};
`

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  cursor: pointer;

  ${breakpoint({
    mobile: css`
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};
  
  img {
    height: 32px;
    object-fit: contain;
    flex: 1 1 0%;

    ${breakpoint({
      mobile: css`
        height: 24px;
      `,
      tablet: css`
        height: 24px;
      `,
      tablet_mini: css`
        height: 24px;
      `
    })};
  }
`;

const NavWrapper = styled.div<{
  isWallet?: boolean
}>`
  display: flex;
  align-items: center;
  height: 96px;
  &>span {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    &:hover .menu-list {
      display: inline-block;
    }
    &.selected {
      &>span {
        opacity: 0.6!important;
      }
    }
  }
  
  &>span>span {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 0.006em;
    color: ${({ isWallet }) => (isWallet ? '#000000' : '#ffffff')};
    cursor: pointer;
    margin-left: 32px;
    &:hover {
      opacity: 0.8;
    }
  }
`

const MenuList = styled.div`
  position: absolute;
  top: 95px;
  left: 0;
  background: #141414;
  border: 1px solid #303440;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 12px 20px;
  display: none;
`

const MenuItem = styled.div`
  white-space: nowrap;
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.006em;
  color: #FFFFFF;
  opacity: 0.6;
  cursor: pointer;
  &:last-child {
    margin: 0;
  }
  &:hover {
    opacity: 1;
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
  border-radius: 8px;
  font-family: Inter;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.006em;
  color: #0C0B0B;
  cursor: pointer;
  --c1: #BDFDE2;
  --c2: #9BDAF6;
  background: linear-gradient(90deg, var(--c1, #f6d365), var(--c2, #fda085) 51%, var(--c1, #f6d365)) var(--x, 0)/ 200%;
  &:hover {
    --x: 100%;
  }
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

const TableMiniIconText = styled.div`
  margin-left: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0.016em;
  color: #FFFFFF;
`

const TableMiniIconGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${breakpoint({
    mobile: css`
      display: none;
    `,
    tablet_mini: css`
      display: none;
    `,
    tablet: css`
      display: flex;
    `,
  })};
`

export default function NewHeader(props: Props): ReactElement {
  const { navList, currentTab, handleChange } = props;
  const [showNavs, setShowNavs] = useState(false);
  const isWallet = currentTab.name === t('wallet')
  const location = useRouter();

  const onOpenUrl = (url: string) => {
    window.open(url, '_blank');
  }

  const onStartBuild = () => {
    setShowNavs(!showNavs);
    handleChange(navList[4]);
  }

  const handleTabChange = (tab: any) => {
    setShowNavs(!showNavs);
    handleChange(tab);
  }

  const lightNavIcon = showNavs ? 'images/close_icon.svg' : 'images/menu_icon.svg';
  const blackNavIcon = showNavs ? 'images/close_icon.svg' : 'images/menu_icon_black.svg';
  const navIcon = isWallet ? blackNavIcon : lightNavIcon;

  return (
    <Wrapper isWallet={isWallet && !showNavs}>
      <HeaderWrapper>
        <HeaderContent>
          <HeaderDiv onClick={() => { location.push('/', undefined, { shallow: true }); }}>
            <img src={isWallet ? 'images/Logo.svg' : 'images/logo_white.svg'} alt="" />
          </HeaderDiv>
          <div style={{flex: 1}}/>
          <WrapperMobileOnly>
            <HeaderIcon
                src={navIcon}
                alt=""
                onClick={() => setShowNavs(!showNavs)}
            />
            <div hidden={!showNavs}>
              <HeaderMobileMenu
                  startBuild={onStartBuild}
                  navList={navList}
                  handleChange={(tab: any) => handleTabChange(tab)}/>
            </div>
          </WrapperMobileOnly>

          <WrapperTableMiniOnly>
            <HeaderIcon
                src={showNavs ? 'images/close_icon.svg' : 'images/menu_icon.svg'}
                alt=""
                onClick={() => setShowNavs(!showNavs)}
            />
            <div hidden={!showNavs}>
              <HeaderMobileMenu
                  startBuild={onStartBuild}
                  navList={navList}
                  handleChange={(tab: any) => handleTabChange(tab)}/>
            </div>
          </WrapperTableMiniOnly>

          <WrapperTableOnly>
            <TableMiniIconGroup onClick={() => setShowNavs(!showNavs)}>
              <HeaderIcon
                  src='images/clv_icon1.svg'
                  alt=""
              />
              <TableMiniIconText hidden={showNavs}>Show Menu</TableMiniIconText>
              <TableMiniIconText hidden={!showNavs}>Hide Menu</TableMiniIconText>
            </TableMiniIconGroup>
            <div hidden={!showNavs}>
              <HeaderMobileMenu
                  startBuild={onStartBuild}
                  navList={navList}
                  handleChange={(tab: any) => handleTabChange(tab)}/>
            </div>
          </WrapperTableOnly>

          <WrapperDesktopOnly>
            <HeaderRight>
              <div>
                <NavWrapper isWallet={isWallet}>
                  {navList.map((nav: any, index: number) => (
                    <span
                      className={currentTab.name === nav.name ? 'selected' : ''}
                      onClick={() => handleChange(nav)}
                      key={`navList_${nav.name}_${index}`}
                    >
                      <span>{nav.name}</span>
                      {nav.menuList && (
                        <MenuList
                          className="menu-list"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {nav.menuList.map((menu: any, index: number) => (
                            <MenuItem
                              key={`nav_menuList_${nav.name}_${index}`}
                              onClick={(e) => window.open(menu.url, "_blank")}
                            >{menu.text}</MenuItem>
                          ))}
                        </MenuList>
                      )}
                    </span>
                  ))}
                </NavWrapper>
              </div>
              {isWallet && <WalletBtns>
                <ButtonIcon>
                  <img onClick={() => onOpenUrl('https://apps.apple.com/app/clover-wallet/id1570072858')} src="images/apple_icon.svg" alt="" />
                  <img onClick={() => onOpenUrl('https://github.com/clover-network/clover-multichain-mobile-wallet-release/releases/latest/download/clover.apk')} src="images/google_play_icon.svg" alt="" />
                  <img onClick={() => onOpenUrl('https://chrome.google.com/webstore/detail/clv-wallet/nhnkbkgjikgcigadomkphalanndcapjk')} src="images/chrome_icon.svg" alt="" />
                </ButtonIcon>
                <LogIn onClick={() => onOpenUrl('https://portal.clv.org')}>CLV Portal</LogIn>
                {/*<SignUp onClick={() => openUrl('https://portal.clv.org')}>Sign Up</SignUp>*/}
              </WalletBtns>}
            </HeaderRight>
          </WrapperDesktopOnly>
        </HeaderContent>
      </HeaderWrapper>
    </Wrapper>
  );
}
