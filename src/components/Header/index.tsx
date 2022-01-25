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
import { AnchorLinkIds } from '../../AnchorLinkIds';

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
    width: 49px;
    object-fit: contain;
    flex: 1 1 0%;
    ${breakpoint(css`
      height: 24px;
    `)};
  }

  .text-logo {
    width: 95px;
    margin-left: 9px;
  }

  .nav-bar {
    margin-top: -3px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`

const Link = styled.a`
  margin-right: 32px;
  color: ${(props) => props.theme.colors.BACKGROUND};
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }

  &.active {
    position: relative;
    &::after {
      content: " ";
      display: flex;
      width: 100%;
      height: 3px;
      background: ${(props) => props.theme.colors.PINK_BG};
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

const LanguageList = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  color: ${(props) => props.theme.colors.BACKGROUND};
  background-color: ${(props) => props.theme.colors.TITLE};
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 8px 16px;
  z-index: 10;

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

const Navs = styled(LanguageList)`
  height: calc(100vh - 68px);
`

const VerticalSocials = styled(Socials)`
  border-top: 1px solid #c4c4c4 !important;
  padding-top: 24px!important;
  img {
    width: 32px;
  }
`;

const CloverDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 15px;
  img {
    width: 18px;
    margin-right: 10px;
  }
  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    color: #303030;
  }
`;

const Languages: React.FC<{
  hideShowList: () => void;
}> = ({ hideShowList }) => {
  return (
    <LanguageList>
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
    </LanguageList>
  )
}

export default function Header(props: any): ReactElement {
  const { navList, currentTab, handleChange } = props;
  const [showList, setShowList] = useState(false);
  const [showNavs, setShowNavs] = useState(false);

  const openUrl = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderDiv>
          <img src="images/Logo.svg" alt="" />
          <img className="text-logo" src="images/sakura-text-logo.svg" alt="" />
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
                    // <a href={`#${AnchorLinkIds.DECENTRALIZED}`}>
                    //   {nav.name}
                    // </a>

                    <Link
                      // active={currentTab.name === nav.name}
                      href={`#${nav.path}`}
                      onClick={() => handleChange(nav)}
                      key={nav.name}
                    >
                      {nav.name}

                    </Link>
                  ))}
                </Nav>
              </Navbar>
            </HeaderDiv>
            <CloverDiv onClick={() => window.open('https://clover.finance/')}>
              <img src='images/clover_icon.svg' alt='' />
              <span>Clover</span>
            </CloverDiv>
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
            <VerticalSocials />
          </Navs>
        )}
      </WrapperMobileOnly>
    </HeaderWrapper>
  );
}
