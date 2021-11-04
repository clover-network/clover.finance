import React from "react";
import { BodyText, Small, SpacerHorizontal } from "./CloverLibrary";

import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import { HorizontalMiniGutters } from "./mixins/HorizontalGutters";

interface CoinInfo {
  label: string;
  symbol: string;
  icon: string;
}

interface CoinStats {
  balance: number;
  percentChange: number;
  valueInUSD: number;
}

const CoinTicker: React.FC<{
  baseCoin: CoinInfo;
  stats: CoinStats;
}> = ({ baseCoin, stats }) => {
  const isPositive = stats.percentChange > 0;

  return (
    <DivTicker>
      <DivCoinWrapper>
        <ImgCoin src={baseCoin.icon} />
      </DivCoinWrapper>
      <SpacerHorizontal />
      <DivFlexLeftAlign>
        <EmphasisText>{baseCoin.label}</EmphasisText>
        <Small>{baseCoin.symbol}</Small>
      </DivFlexLeftAlign>
      <SpacerHorizontal />

      <DivFlexRightAlign>
        <EmphasisText>{`${stats.balance.toFixed(2)} USD`}</EmphasisText>
        <PriceAction>
          <PercentChangeSpan isPositive={isPositive}>
            <FontAwesomeIcon icon={isPositive ? faCaretUp : faCaretDown} />
          </PercentChangeSpan>
          <SpacerHorizontal width="5px" />
          <PercentChangeSpan isPositive={isPositive}>
            ${stats.percentChange.toFixed(2)}%
          </PercentChangeSpan>
          <SpacerHorizontal width="5px" />
          <span>${stats.balance.toFixed(2)}</span>
        </PriceAction>
      </DivFlexRightAlign>
    </DivTicker>
  );
};

const PriceAction = styled(Small)`
  display: flex;
`;

const PercentChangeSpan = styled.span<{ isPositive: boolean }>`
  color: ${(props) =>
    props.isPositive
      ? props.theme.colors.TICKER_POSITIVE
      : props.theme.colors.TICKER_NEGATIVE};
`;

const DivFlexLeftAlign = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivFlexRightAlign = styled(DivFlexLeftAlign)`
  align-items: end;
`;

const DivCoinWrapper = styled.div`
  position: relative;
`;

const ImgCoin = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
`;

const EmphasisText = styled(BodyText)`
  color: ${(props) => props.theme.colors.NEUTRAL};
  margin: 0;
`;

const DivTicker = styled.div`
  display: flex;
  //margin: 10px 10px 24px 24px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 48px;
`;

export const PriceStats = () => {
  return (
    <DivPriceStatsContainer>
      <CoinTicker
        baseCoin={{
          label: "Clover",
          symbol: "CLV",
          icon: "images/coins/CloverLogo.svg",
        }}
        stats={{
          balance: Math.random(),
          percentChange: Math.random() * 99 - 50,
          valueInUSD: 350.23,
        }}
      />
      <CoinTicker
        baseCoin={{
          label: "Ethereum",
          symbol: "ETH",
          icon: "images/coins/EthereumLogo.svg",
        }}
        stats={{
          balance: Math.random(),
          percentChange: Math.random() * 99 - 50,
          valueInUSD: 350.23,
        }}
      />
      <CoinTicker
        baseCoin={{
          label: "Bitcoin",
          symbol: "BTC",
          icon: "images/coins/BitcoinLogo.svg",
        }}
        stats={{
          balance: Math.random(),
          percentChange: Math.random() * 99 - 50,
          valueInUSD: 350.23,
        }}
      />
      <CoinTicker
        baseCoin={{
          label: "Polkadot",
          symbol: "DOT",
          icon: "images/coins/Polkadot.svg",
        }}
        stats={{
          balance: Math.random(),
          percentChange: Math.random() * 99 - 50,
          valueInUSD: 350.23,
        }}
      />
      <CoinTicker
        baseCoin={{
          label: "Solana",
          symbol: "SOL",
          icon: "images/coins/SolanaLogo.svg",
        }}
        stats={{
          balance: Math.random(),
          percentChange: Math.random() * 99 - 50,
          valueInUSD: 350.23,
        }}
      />
      <CoinTicker
        baseCoin={{
          label: "Fantom",
          symbol: "FTM",
          icon: "images/coins/FantomLogo.svg",
        }}
        stats={{
          balance: Math.random(),
          percentChange: Math.random() * 99 - 50,
          valueInUSD: 350.23,
        }}
      />
      <CoinTicker
        baseCoin={{
          label: "Kusama",
          symbol: "KSM",
          icon: "images/coins/KusamaLogo.svg",
        }}
        stats={{
          balance: Math.random(),
          percentChange: Math.random() * 99 - 50,
          valueInUSD: 350.23,
        }}
      />
    </DivPriceStatsContainer>
  );
};

const DivPriceStatsContainer = styled.div`
  display: flex;
  overflow: scroll;

  ${HorizontalMiniGutters};

  margin-left: -48px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
