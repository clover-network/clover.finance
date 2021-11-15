import { SplashSection } from "./SplashSection";
import {
  BodyText,
  ButtonFixedWidth,
  CenteredTitle,
  Col,
  EscapeMargins,
  Row,
  SectionSubtitle,
  SmallerSubtitle,
  SpacerVertical,
  SpanAccent,
  SpanNeutral,
  Subtitle,
} from "./CloverLibrary";
import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from "styled-components";
import { SplashModeContext, SplashPageMode } from "./SplashModeContext";
import { AnchorLinkIds } from "./AnchorLinkIds";

import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { breakpoint } from "./mixins/breakpoint";
import { desktopOnly } from "./mixins/desktopOnly";
import { mobileOnly } from "./mixins/mobileOnly";

SwiperCore.use([Navigation, Pagination]);

export const SectionPitch = () => {
  const isPhone = typeof window !== 'undefined' ? /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator?.userAgent) : false;
  const mode = useContext(SplashModeContext);
  const isSakura = mode === SplashPageMode.SAKURA;

  return (
    <SplashSection>
      <DivContainer id={AnchorLinkIds.PITCH}>
        {mode === SplashPageMode.SAKURA && (
          <CenteredTitle>
            <SpanNeutral>Build Powerful Applications on</SpanNeutral> Sakura
          </CenteredTitle>
        )}
        {mode === SplashPageMode.CLOVER && (
          <>
            <TitleDesktop>
              The Clover <SpanAccent>Wallets Suite</SpanAccent>
            </TitleDesktop>
            <TitleMobile>
              CLOVER's <SpanAccent>Wallets</SpanAccent>
            </TitleMobile>
            <CenteredSectionSubtitle>
              Available in Extension Wallet, Mobile Wallet, and Web Wallet.
            </CenteredSectionSubtitle>
          </>
        )}
      </DivContainer>

      {!isSakura && (
        <SwipeCustomizer>
          <Swiper
            initialSlide={isPhone? 1 : 2}
            navigation={true}
            pagination={true}
            autoHeight={true}
          >
            {Items.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <Slide {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </SwipeCustomizer>
      )}

      {isSakura && (
        <div>
          <EscapeMargins>
            <SakuraImg src={"/images/sakura-bg1.png"} />
          </EscapeMargins>
        </div>
      )}

      <SpacerVertical />

      <Row>
        {Features.map((item) => {
          return <Feature key={item.featureNum} {...item} />;
        })}
      </Row>
    </SplashSection>
  );
};

const SakuraImg = styled.img`
  width: 100%;
`;

const CenteredSectionSubtitle = styled(SectionSubtitle)`
  text-align: center;
`;

const TitleDesktop = styled(CenteredTitle)`
  ${desktopOnly};
`;

const TitleMobile = styled(CenteredTitle)`
  ${mobileOnly};
`;

const Features = [
  {
    featureNum: "01",
    title: "Multi-chain connected wallet",
    copy: 'An "Always-on" functionality that allows users to simultaneously connect with Web3js-based dapps and Polkadotjs-based dapps and interact with all kinds of multi-chain cryptocurrencies and NFT assets.',
  },
  {
    featureNum: "02",
    title: "Support popular blockchains ",
    copy: "Users can connect to Clover, Ethereum, Polkadot, Solana, Binance Smart Chain, Fantom, Avalanche, Kusama, Edgeware and so many other blockchain.",
  },
  {
    featureNum: "03",
    title: "Cross-chain Compatibility",
    copy: "EVM based assets can be cross-chain transfer to Clover chain and vice versa, which enable lower gas fee and faster transaction confirmation.",
  },
  {
    featureNum: "04",
    title: "App store for Decentralized Finance",
    copy: "Enjoy a seamless DeFi experience with the ability to browse all kinds of dApps such as derivatives or loans deployed on Clover.",
  },
];

const Slide: React.FC<{
  screenShot: string;
  title: string;
  bullets: string[];
  buttons: Array<{
    label: string;
    url: string;
  }>;
}> = ({ screenShot, title, bullets, buttons }) => {
  return (
    <DivSlideContainer>
      <Row>
        <Col>
          <ImgSlide src={screenShot} />
        </Col>
        <Col>
          <Subtitle>
            <SpanAccent>{title}</SpanAccent>
          </Subtitle>
          <ul>
            {bullets.map((bullet, i) => {
              return <li key={i}>{bullet}</li>;
            })}
          </ul>
          <ButtonContainer>
            {buttons.map((button, i) => {
              return (
                <DownloadButton
                  key={i}
                  onClick={() => window.open(button.url, "_blank")}
                >
                  {button.label}
                </DownloadButton>
              );
            })}
          </ButtonContainer>
        </Col>
      </Row>
    </DivSlideContainer>
  );
};

const DownloadButton = styled(ButtonFixedWidth)`
  ${breakpoint(css`
    margin: 16px 0;
  `)};
  min-width: 250px;
  margin: 16px 24px 16px 0;
`;

// positions swipers to be aligned with image in mobile
const SwipeCustomizer = styled.div`
  ${breakpoint(css`
    .swiper-button-prev {
      top: 66vw;
    }
    .swiper-button-next {
      top: 66vw;
    }
  `)};
`;

const ImgSlide = styled.img`
  width: 100%;
  min-width: 300px;
  object-fit: contain;
  //max-height: 100%;

  ${breakpoint(css`
    //height: 120vw;
    min-width: unset;
  `)}
`;

const DivSlideContainer = styled.div`
  padding: 48px;

  ${breakpoint(css`
    padding: 0;
  `)};

  margin-bottom: 24px;
`;

const Items = [
  {
    screenShot: `images/web-mockup.png`,
    title: "Web Wallet",
    bullets: [
      "Social account login",
      "Private key and Password free ",
      "Support interactive dApp/Multi-chain dApp interactive support for EVM networks, DOT/KSM + parachains, Solana",
    ],
    buttons: [
      {
        label: "Browse Web Wallet",
        url: "https://wallet.clover.finance/",
      },
    ],
  },
  {
    screenShot: "images/2-mockup.png",
    title: "Mobile Wallet",
    bullets: [
      "Multi-chain",
      "Cross-chain, Multi-assets",
      "Internal Swap",
      "NFT support",
      "dApp market place",
    ],
    buttons: [
      {
        label: "Download iOS Wallet",
        url: "https://apps.apple.com/app/clover-wallet/id1570072858",
      },
      {
        label: "Download Android Wallet",
        url: "https://play.google.com/store/apps/details?id=com.clover.finance.wallet&hl=en_US&gl=US",
      },
    ],
  },
  {
    screenShot: `images/extension-mockup.png`,
    title: "Extension Wallet",
    bullets: [
      "Multi-chain dApp interactive support for EVM networks, DOT/KSM + parachains, Solana",
      "Always on functionality for connectivity for multiple networks",
      "Cross-chain, Multi-assets",
      "Internal Swap",
      "NFT Support",
    ],
    buttons: [
      {
        label: "Install Extension Wallet",
        url: "https://chrome.google.com/webstore/detail/clover-wallet/nhnkbkgjikgcigadomkphalanndcapjk",
      },
    ],
  },
];

const Feature: React.FC<{ featureNum: string; title: string; copy: string }> =
  ({ title, featureNum, copy }) => {
    return (
      <Col>
        <Subtitle>
          <SpanAccent>{featureNum}</SpanAccent>
        </Subtitle>
        <SmallerSubtitle>{title}</SmallerSubtitle>
        <BodyText>{copy}</BodyText>
      </Col>
    );
  };

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -24px;

  ${breakpoint(css`
    margin-right: 0;
    padding: 0 2px; // avoid 1px overhang in carousel
  `)};
`;
