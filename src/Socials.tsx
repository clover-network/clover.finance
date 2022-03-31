import { SplashModeContext, SplashPageMode } from "./SplashModeContext";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "./mixins/breakpoint";

export const Socials: React.FC<{ className?: string }> = ({ className }) => {
  const mode = useContext(SplashModeContext);

  const prefix =
    mode === SplashPageMode.CLOVER
      ? "black-"
      : "";

  return (
    <SocialsDiv className={className}>
      <a href="https://t.me/clvorg" target="_blank" rel="noreferrer">
        <SocialsImg src={`images/${prefix}telegram.svg`} />
      </a>
      <a
        href="https://twitter.com/clover_finance/"
        target="_blank"
        rel="noreferrer"
      >
        <SocialsImg src={`images/${prefix}twitter.svg`} />
      </a>
      <a
        href="https://www.linkedin.com/company/clv-org"
        target="_blank"
        rel="noreferrer"
      >
        <SocialsImg src={`images/${prefix}linkedin.svg`} />
      </a>
      <a
        href="https://github.com/clover-network"
        target="_blank"
        rel="noreferrer"
      >
        <SocialsImg src={`images/${prefix}github.svg`} />
      </a>
      <a
        href="https://medium.com/@clv_org"
        target="_blank"
        rel="noreferrer"
      >
        <SocialsImg src={`images/${prefix}medium.svg`} />
      </a>
      {/*<a*/}
      {/*  href="https://www.instagram.com/accounts/login/"*/}
      {/*  target="_blank"*/}
      {/*  rel="noreferrer"*/}
      {/*>*/}
      {/*  <SocialsImg src={`images/${prefix}photo.svg`} />*/}
      {/*</a>*/}
      <a
        href="https://discord.com/invite/M6SxuXqMVB"
        target="_blank"
        rel="noreferrer"
      >
        <SocialsImg src={`images/${prefix}discord.svg`} />
      </a>
    </SocialsDiv>
  );
};

const SocialsDiv = styled.div`
  display: flex;
  margin-left: 0!important;
  ${breakpoint(css`
    justify-content: space-between;
  `)}
`;

const SocialsImg = styled.img`
  width: 34px;
  height: 34px;
  object-fit: contain;
  margin: 16px;

  :hover {
    transform: scale(1.3);
  }

  transition: transform 0.1s;

  ${breakpoint(css`
    margin: 8px;
  `)}
`;
