import React from "react";
import styled, { css } from "styled-components";
import { SpacerSection, SpanAccent } from "../CloverLibrary";
import {
  HorizontalGutters,
  HorizontalGuttersSuperDeep,
} from "../mixins/HorizontalGutters";
import { breakpoint } from "../mixins/breakpoint";
import { Paragraph, Title } from "./NFTLibrary";

export const Section5 = () => {
  return (
    <Container>
      <DivAbout>
        <Title>
          About <SpanAccent>Clover Finance</SpanAccent>
        </Title>
        <Paragraph>
          Clover Finance is a substrate-based smart contract platform that
          focuses on multi-and cross-chain functionality, founded in late 2020.
          Clover is backed by industry leaders such as Polychain Capital, Huobi,
          OKex and Alameda Research. In early 2021 Clover Finance was featured
          on Coinlist and shortly after it was immediately launched on the major
          platforms including Coinbase, Binance, Huobi, OKex and FTX, pushing it
          to become the fastest-growing project of the Polkadot ecosystem.
          Clovers wallet suites, the first multi- and cross-chain wallet that
          support the simultaneous connection of EVM networks, Polkadot/Kusama
          and Solana network was launched last quarter and has a cumulative
          downloads of over 200,000+ downloads to date. In order to bring the
          future closer to our users, we need your help to support us to become
          one of the first Polkadot Parachains so that we can connect with the
          relay chain’s benefits including better interoperability, higher
          security and faster transaction settlement.
        </Paragraph>
      </DivAbout>

      <SpacerSection height={"32px"} mobileHeight={"49px"} />
      <ImgCloverCrew src={"images/nft/CloCrew.png"} />
    </Container>
  );
};

const ImgLineClo = styled.img`
  width: 100%;
  object-fit: contain;
`;

const ImgContainer = styled.div`
  position: relative;
`;

const DivAbout = styled.div`
  ${HorizontalGuttersSuperDeep};
`;

const ImgCloverCrew = styled.img`
  width: 100%;
  ${HorizontalGutters};
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  overflow: hidden;

  ${breakpoint(css`
    justify-content: center;
    margin-top: 0px;
  `)};

  ${ImgLineClo}, ${Title}, ${ImgContainer} {
    margin-bottom: 32px;
  } ;
`;
