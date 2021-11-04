import React, { useContext, useEffect, useRef } from "react";
import { HorizontallyCentered, SmallerSubtitle } from "./CloverLibrary";
import styled, { css, useTheme } from "styled-components";
import { SplashModeContext, SplashPageMode } from "./SplashModeContext";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { breakpoint } from "./mixins/breakpoint";
import { AnchorLinkIds } from "./AnchorLinkIds";
import { Socials } from "./Socials";
import { MenuContext } from "./MenuContextProvider";
import { HorizontalMiniGutters } from "./mixins/HorizontalGutters";

export const SisterNet: React.FC<{ mode: SplashPageMode; src: string }> = (
  props
) => {
  const url = props.mode === SplashPageMode.CLOVER ? "/sakura" : "/";
  return (
    <>
      <SisterNetworkName>
        <a href={url}>
          {props.mode === SplashPageMode.CLOVER && "SAKURA SISTERNET"}
        </a>
      </SisterNetworkName>
      <a href={url}>
        <ImgLogo src={props.src} />
      </a>
    </>
  );
};

const Hr = styled.hr`
  height: 3px;
  color: ${(props) => props.theme.colors.TITLE};
  background-color: ${(props) => props.theme.colors.TITLE};
  border: none;
  margin: 1em 0;
`;

export const Navbar = () => {
  const mode = useContext(SplashModeContext);
  const logo = mode ? "images/Sakura.svg" : "images/Clover-Logo.svg";
  const sisterLogo = mode ? "images/Clover-Logo.svg" : "images/Sakura.svg";
  const ref = useRef<HTMLDivElement>(null);

  const { showMenu, setShowMenu } = useContext(MenuContext);
  useEffect(() => {
    /**
     * Close menu if clickedo utside of menu
     */
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && e.target && !ref.current.contains(e.target as any)) {
        setShowMenu(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setShowMenu]);

  const theme = useTheme();
  return (
    <>
      <DivNavbar>
        <ColRel>
          <MenuBars
            icon={faBars}
            color={theme.colors.ACCENT}
            //https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/sizing-icons
            //to avoid jumping while css loads
            width={"1.33em"}
            size={"lg"}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setShowMenu(true);
            }}
          />
        </ColRel>
        <ColAlignCenter>
          <ImgLogo src={logo} />
        </ColAlignCenter>
        <ColAlignRight>
          <SisterNetworkContainerHiddenOnMobile>
            <SisterNet mode={mode} src={sisterLogo} />
          </SisterNetworkContainerHiddenOnMobile>
        </ColAlignRight>
        {showMenu && (
          <DivMenu ref={ref}>
            <Close
              icon={faTimes}
              color={theme.colors.ACCENT}
              width={"1.33em"}
              size={"lg"}
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(false);
              }}
            />
            <HorizontallyCentered>
              <SisterNet mode={mode} src={sisterLogo} />
            </HorizontallyCentered>

            <Hr />

            {mode === SplashPageMode.SAKURA ? (
              <SakuraMenuItems closeMenu={() => setShowMenu(false)} />
            ) : (
              <CloverMenuItems closeMenu={() => setShowMenu(false)} />
            )}
            <MenuSocials />
          </DivMenu>
        )}
      </DivNavbar>
    </>
  );
};

const MenuSocials = styled(Socials)`
  margin-top: auto;
  margin-bottom: 30px;
`;

const CloverMenuItems: React.FC<{ closeMenu: () => void }> = ({
  closeMenu,
}) => {
  return (
    <>
      <SmallerSubtitle>
        <a onClick={closeMenu} href={`#${AnchorLinkIds.ARTICLES}`}>
          About Polkadot Parachain Auction{" "}
        </a>
      </SmallerSubtitle>
      <SmallerSubtitle>
        <a onClick={closeMenu} href={`#${AnchorLinkIds.COMPONENTS}`}>
          Clover's Edge
        </a>
      </SmallerSubtitle>
      <SmallerSubtitle>
        <a onClick={closeMenu} href={`#${AnchorLinkIds.PITCH}`}>
          Clover Wallets Suites
        </a>
      </SmallerSubtitle>
      <SmallerSubtitle>
        <a onClick={closeMenu} href={`#${AnchorLinkIds.TOKEN}`}>
          CLV Token{" "}
        </a>
      </SmallerSubtitle>
      <SmallerSubtitle>
        <a onClick={closeMenu} href={`#${AnchorLinkIds.ECOSYSTEM}`}>
          Build on Clover{" "}
        </a>
      </SmallerSubtitle>
      <SmallerSubtitle>
        <a onClick={closeMenu} href={`#${AnchorLinkIds.DNA}`}>
          Our Partners and Update{" "}
        </a>
      </SmallerSubtitle>
    </>
  );
};

const SakuraMenuItems: React.FC<{ closeMenu: () => void }> = ({
  closeMenu,
}) => {
  return (
    <>
      <SmallerSubtitle>
        <a onClick={closeMenu} href={`#${AnchorLinkIds.ARTICLES}`}>
          About Polkadot Parachain Auction{" "}
        </a>
      </SmallerSubtitle>
      <SmallerSubtitle>
        <a onClick={closeMenu} href={`#${AnchorLinkIds.COMPONENTS}`}>
          Clover's Edge
        </a>
      </SmallerSubtitle>
      <SmallerSubtitle>
        <a onClick={closeMenu} href={`#${AnchorLinkIds.PITCH}`}>
          Clover Wallets Suites
        </a>
      </SmallerSubtitle>
      <SmallerSubtitle>
        <a onClick={closeMenu} href={`#${AnchorLinkIds.TOKEN}`}>
          CLV Token{" "}
        </a>
      </SmallerSubtitle>
      <SmallerSubtitle>
        <a onClick={closeMenu} href={`#${AnchorLinkIds.DNA}`}>
          Our Partners and Update{" "}
        </a>
      </SmallerSubtitle>
    </>
  );
};

const DivMenu = styled.div`
  position: fixed;

  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;

  background: ${(props) => props.theme.colors.BACKGROUND};

  outline: ${(props) => props.theme.colors.NEUTRAL} solid 5px;

  line-height: 2em;

  z-index: 10;
  padding: 24px;

  margin: 5px;

  border-radius: ${(props) => props.theme.misc.DEFAULT_BORDER_RADIUS};

  ${breakpoint(css`
    margin: 0;
    //top: 0;
    position: fixed;
    //height: 3000px;
    height: calc(100vh + 30px);
    //height: 110vh;
    width: 100%;
    border-radius: unset;
    outline: none;

    overflow: scroll;
  `)};
`;

const SisterNetworkContainerHiddenOnMobile = styled(HorizontallyCentered)`
  ${breakpoint(css`
    display: none;
  `)};
`;

const SisterNetworkName = styled(SmallerSubtitle)`
  margin: 0;
`;

const ImgLogo = styled.img`
  display: block; //prevent wrapping <a/> from adding bottom padding
  height: 30px;
  min-width: 30px;
`;

const MenuBars = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.ACCENT};
`;
const Close = styled(MenuBars)`
  margin-left: auto;
`;

const Col = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const ColRel = styled(Col)`
  position: relative;
`;

export const ColAlignCenter = styled(Col)`
  justify-content: center;
`;

export const ColAlignRight = styled(Col)`
  flex-direction: row-reverse;
`;

const DivNavbar = styled.div`
  margin-top: 24px;
  min-height: 50px;
  display: flex;
  align-items: center;
  position: relative;

  ${HorizontalMiniGutters};
`;
