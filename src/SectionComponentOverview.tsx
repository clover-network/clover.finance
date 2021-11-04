import { SplashSection } from "./SplashSection";
import {
  BodyText,
  Grid,
  GridItem,
  SpanAccent,
  Subtitle,
  LeftAlignTitle,
  SectionSubtitle,
} from "./CloverLibrary";
import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { SplashModeContext, SplashPageMode } from "./SplashModeContext";
import { AnchorLinkIds } from "./AnchorLinkIds";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { breakpoint } from "./mixins/breakpoint";
SwiperCore.use([Pagination]);

export const SectionComponentOverview = () => {
  const mode = useContext(SplashModeContext);

  const title = mode === SplashPageMode.SAKURA ? "What if..." : "Clover is...";

  const items = mode === SplashPageMode.SAKURA ? SakuraItems : CloverItems;

  const typeWriterTexts =
    mode === SplashPageMode.SAKURA ? SakuraLines : CloverLines;

  const [typeWriterInProgressText, setTypeWriterProgressText] = useState("");
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    let currentLength = 0;
    const TICKS_TO_HOLD = 10;
    let resetCounter = 0;
    let lineNum = 0;

    const interval = setInterval(() => {
      const typeWriterText = typeWriterTexts[lineNum];

      if (currentLength === typeWriterText.length) {
        resetCounter += 1;
        setShowCaret(false);

        if (resetCounter === TICKS_TO_HOLD) {
          resetCounter = 0;
          currentLength = 0;
          lineNum = (lineNum + 1) % typeWriterTexts.length;
        }
        return;
      }

      setShowCaret(true);
      currentLength += 1;

      setTypeWriterProgressText(typeWriterText.substring(0, currentLength));
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [typeWriterTexts]);

  return (
    <SplashSection>
      <DivContainer id={AnchorLinkIds.COMPONENTS}>
        {mode === SplashPageMode.SAKURA && (
          <LeftAlignTitle>
            <SpanAccent>{title}</SpanAccent>
          </LeftAlignTitle>
        )}
        {mode === SplashPageMode.CLOVER && (
          <LeftAlignTitle>{title}</LeftAlignTitle>
        )}

        {mode === SplashPageMode.SAKURA && (
          <SectionSubtitle>
            {typeWriterInProgressText}
            {showCaret && <Caret>|</Caret>}
          </SectionSubtitle>
        )}
        {mode === SplashPageMode.CLOVER && (
          <SectionSubtitle>
            <SpanAccent>
              {typeWriterInProgressText}
              {showCaret && <Caret>|</Caret>}
            </SpanAccent>
          </SectionSubtitle>
        )}
        <MyGrid>
          {items.map((item, i) => (
            <Item key={i} {...item} />
          ))}
        </MyGrid>
        <Carousel>
          <Swiper pagination={true} autoHeight={true}>
            {items.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <Item {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Carousel>
      </DivContainer>
    </SplashSection>
  );
};

interface ItemInfo {
  title: string;
  body: string;
  logo: string;
}

const CloverLines = [
  "Layer 1 blockchain, Smart contract platform, Multi-chain Defi hub, Cross-chain Wallet",
  "Everything!",
];

const SakuraLines = [
  "You can earn passive income by deploying smart contracts?",
  "You can easily build cross-chain swaps, vaults and yield earning strategies?",
  "You can pay gas fee in any token?",
  "You can pay a lower gas fee as a frequent DeFi protocol user?",
];

const CloverItems = [
  {
    title: "EVM Compatibility",
    body: "Clover offers seamless multi-chain indexing across Bitcoin, Ethereum, Binance Smart Chain, and Polkadot. Users can search through blocks, transactions, and accounts in all-in one streamlined environment.",
    logo: "images/logo-evm.svg",
  },
  {
    title: "Gas-fee Redistribution",
    body: "Clover incentivizes dApp builders by automatically sharing a percentage of the transaction fee’s with them. The redistribution will ensure a vibrant developer community and foster an innovative DeFi ecosystem on Sakura and Clover.",
    logo: "images/logo-gas-fee.svg",
  },
  {
    title: "Gasless End-user Experience",
    body: "Clover reinvented feeconomics to simplify DeFi user experience. Clover’s smart relayer will act on behalf of the sender so that relayers can cover gas fees with the same token from the amount users transact, without depending on base currency like ETH. Transaction fees will be deducted automatically from the asset the user is transacting with.",
    logo: "images/logo-gasless.svg",
  },
  {
    title: "Identity-based Fee Schedule",
    body: "Clover’s Dynamic Fee Schedule is a brand-new gas calculation method which allows Clover users to get gas discounts proportionally to the frequency of their network activity. Users with less interaction pay more gas, and users with more interactions will less gas over time according to a usage curve.",
    logo: "images/logo-idbased.svg",
  },
  {
    title: "Cross-chain Interactions",
    body: "Clover comes with various open-source wallet implementations for interacting with cross-chain dApps without navigating between Polkadot based and Ethereum based networks. Users can seamlessly send, receive, wrap and unwrap cross-chain assets across Ethereum and Polkadot trustlessly.",
    logo: "images/logo-cc.svg",
  },
  {
    title: "Cross-chain Explorer",
    body: "Clover offers seamless multi-chain indexing across Bitcoin, Ethereum, Binance Smart Chain, and Polkadot. Users can search through blocks, transactions, and accounts in all-in one streamlined environment.",
    logo: "images/logo-ccexplorer.svg",
  },
];

const SakuraItems = [
  {
    title: "EVM Compatibility",
    body: "Clover offers seamless multi-chain indexing across Bitcoin, Ethereum, Binance Smart Chain, and Polkadot. Users can search through blocks, transactions, and accounts in all-in one streamlined environment.",
    logo: "images/logo-pink-evm.svg",
  },
  {
    title: "Gas-fee Redistribution",
    body: "Clover incentivizes dApp builders by automatically sharing a percentage of the transaction fee’s with them. The redistribution will ensure a vibrant developer community and foster an innovative DeFi ecosystem on Sakura and Clover.",
    logo: "images/logo-pink-gasfee.svg",
  },
  {
    title: "Gasless End-user Experience",
    body: "Clover reinvented feeconomics to simplify DeFi user experience. Clover’s smart relayer will act on behalf of the sender so that relayers can cover gas fees with the same token from the amount users transact, without depending on base currency like ETH. Transaction fees will be deducted automatically from the asset the user is transacting with.",
    logo: "images/logo-pink-enduser.svg",
  },
  {
    title: "Identity-based Fee Schedule",
    body: "Clover’s Dynamic Fee Schedule is a brand-new gas calculation method which allows Clover users to get gas discounts proportionally to the frequency of their network activity. Users with less interaction pay more gas, and users with more interactions will less gas over time according to a usage curve.",
    logo: "images/logo-pink-id.svg",
  },
  {
    title: "Cross-chain Interactions",
    body: "Clover comes with various open-source wallet implementations for interacting with cross-chain dApps without navigating between Polkadot based and Ethereum based networks. Users can seamlessly send, receive, wrap and unwrap cross-chain assets across Ethereum and Polkadot trustlessly.",
    logo: "images/logo-pink-cc.svg",
  },
  {
    title: "Cross-chain Explorer",
    body: "Clover offers seamless multi-chain indexing across Bitcoin, Ethereum, Binance Smart Chain, and Polkadot. Users can search through blocks, transactions, and accounts in all-in one streamlined environment.",
    logo: "images/logo-pink-ccexplorer.svg",
  },
];

const Caret = styled.span`
  transform: scaleY(1.5);
  //color: green;
  //transform: translateY(25%);
  //font-size: 32px;
  margin-left: 3px;
  //height: 24px;
  //width: 5px;
  //background-color: green;
  display: inline-block;

  opacity: 1;
`;

const Item: React.FC<ItemInfo> = ({ title, body, logo }) => {
  return (
    <CardGridItem>
      <Card>
        <Overlay>
          <OverlayCard>
            <ImgCard src={logo} />
            <CardTitle>{title}</CardTitle>
          </OverlayCard>
        </Overlay>

        <CardTitleHover>{title}</CardTitleHover>
        <CardbodyHover>{body}</CardbodyHover>
        <CardbodyHover as={"div"}>
          <HrShort />
        </CardbodyHover>
      </Card>
    </CardGridItem>
  );
};

const CardTitleHover = styled(Subtitle)`
  text-align: center;
`;
const CardbodyHover = styled(BodyText)`
  text-align: justify;
`;

const Carousel = styled.div`
  display: none;
  ${breakpoint(css`
    display: unset;
  `)};
`;

const Overlay = styled.div`
  position: absolute;
  transition: opacity 0.25s;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  //opacity: 0;
`;

const HrShort = styled.hr`
  max-width: 60px;
  height: 3px;
  color: ${(props) => props.theme.colors.ACCENT};
  background-color: ${(props) => props.theme.colors.ACCENT};
  border: none; ;
`;

const ImgCard = styled.img`
  width: 140px;
  height: 140px;
  object-fit: contain;
  transition: opacity 0.25s;
  margin-top: auto;

  ${breakpoint(css`
    margin-top: auto;
  `)};
`;

const CardTitle = styled(Subtitle)`
  text-align: center;
  transition: opacity 0.25s;
  margin-top: auto;
`;

const Card = styled.div`
  //background: red;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  position: relative;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  ${breakpoint(css`
    background-color: rgba(255, 255, 255, 0.1);
  `)};

  border-radius: ${(props) => props.theme.misc.DEFAULT_BORDER_RADIUS};

  min-height: 450px;
  ${breakpoint(css`
    min-height: unset;
  `)};
`;

const OverlayCard = styled(Card)`
  :hover {
    background-color: unset;
  }
  ${breakpoint(css`
    background-color: unset;
  `)};
`;

const DivContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  .swiper {
    ${(props) =>
      props.theme.id === "Sakura"
        ? css`
            box-shadow: 3px 3px 8px rgba(255, 89, 149, 0.56);
            border-radius: ${(props) => props.theme.misc.DEFAULT_BORDER_RADIUS};
          `
        : ``};
  }
`;

const CardGridItem = styled(GridItem)`
  ${Card}:hover ${CardTitle} {
    opacity: 0;
  }

  ${CardTitleHover} {
    opacity: 0;
  }
  ${CardbodyHover} {
    opacity: 0;
  }

  ${Card}:hover ${CardTitleHover} {
    opacity: 100%;
  }

  ${Card}:hover ${CardbodyHover} {
    opacity: 100%;
  }

  ${Card}:hover ${Overlay} {
    opacity: 100%;
  }

  ${Card}:hover ${ImgCard} {
    opacity: 10%;
  }

  ${breakpoint(css`
    ${ImgCard} {
      opacity: 10%;
    }
    ${Overlay} {
      opacity: 100%;
    }
    ${CardTitle} {
      opacity: 0;
    }
    ${CardTitleHover} {
      opacity: 100%;
    }
    ${CardbodyHover} {
      opacity: 100%;
    }
  `)};
`;

const MyGrid = styled(Grid)`
  ${breakpoint(css`
    display: none;
  `)};
`;
