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
import { AnchorLinkIds } from "./AnchorLinkIds";

import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { breakpoint } from "./mixins/breakpoint";
import { t } from './i18n/intl';

SwiperCore.use([Pagination]);

export const SectionComponentOverview = () => {
  const typeWriterTexts = CloverLines;

  const [typeWriterInProgressText, setTypeWriterProgressText] = useState("");
  const [showCaret, setShowCaret] = useState(true);
  const [selectIndex, setSelectIndex] = useState(0);

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
        <LeftAlignTitle>{t('cloverIs')}</LeftAlignTitle>
        <SectionSubtitle>
          <WriteText>
            {typeWriterInProgressText}
            {showCaret && <Caret>|</Caret>}
          </WriteText>
        </SectionSubtitle>
        <ContentWrapper>
          <ContentLeft>
            <img
              src='/images/arrow_up.svg'
              alt=''
              onMouseEnter={(e: any) => {
                e.stopPropagation();
                e.target.setAttribute("src", "/images/arrow_up_hover.svg");
              }}
              onMouseLeave={(e: any) => {
                e.stopPropagation();
                e.target.setAttribute("src", "/images/arrow_up.svg");
              }}
              onClick={() => {
                if (selectIndex === 0) {
                  setSelectIndex(CloverItems.length-1)
                } else {
                  setSelectIndex(selectIndex - 1)
                }
              }}
            />
            {CloverItems.map((item, i) => {
              return (
                <ItemTitle
                  className={i === selectIndex ? 'selected' : ''}
                  onClick={() => setSelectIndex(i)}
                >
                  {item.title}
                </ItemTitle>
              )
            })}
            <img
              src='/images/arrow_down.svg'
              alt=''
              onMouseEnter={(e: any) => {
                e.stopPropagation();
                e.target.setAttribute("src", "/images/arrow_down_hover.svg");
              }}
              onMouseLeave={(e: any) => {
                e.stopPropagation();
                e.target.setAttribute("src", "/images/arrow_down.svg");
              }}
              onClick={() => {
                if (selectIndex === CloverItems.length-1) {
                  setSelectIndex(0)
                } else {
                  setSelectIndex(selectIndex + 1)
                }
              }}
            />
          </ContentLeft>
          <ContentRight>
            <img src={CloverItems[selectIndex].logo} alt='' />
            <TextContent>
              <h3>{CloverItems[selectIndex].title}</h3>
              <span>{CloverItems[selectIndex].body}</span>
            </TextContent>
          </ContentRight>
        </ContentWrapper>
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
  t('cloverLines1'),
  t('cloverLines2'),
];

const CloverItems = [
  {
    title: t('eVMCompatibility'),
    body: t('eVMCompatibilityHint'),
    logo: "images/logo-evm.svg",
  },
  {
    title: t('gasFeeRedistribution'),
    body: t('gasFeeRedistributionHint'),
    logo: "images/logo-gas-fee.svg",
  },
  {
    title: t('gasLessEndUserExperience'),
    body: t('gasLessEndUserExperienceHint'),
    logo: "images/logo-gasless.svg",
  },
  {
    title: t('identityBasedFeeSchedule'),
    body: t('identityBasedFeeScheduleHint'),
    logo: "images/logo-idbased.svg",
  },
  {
    title: t('crossChainInteractions'),
    body: t('crossChainInteractionsHint'),
    logo: "images/logo-cc.svg",
  },
  {
    title: t('crossChainExplorer'),
    body: t('crossChainExplorerHint'),
    logo: "images/logo-ccexplorer.svg",
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
const WriteText = styled(SpanAccent)`
  text-transform: uppercase;
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

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 72px 0;
`;

const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  margin-right: 130px;
  img {
    width: 10px;
    margin-bottom: 29px;
    cursor: pointer;
  }
`;

const ContentRight = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 160px;
    margin-right: 78px;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors.ACCENT};
  }
  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: ${(props) => props.theme.colors.BODY};
  }
`;

const ItemTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.TITLE};
  opacity: 0.4;
  margin-bottom: 29px;
  cursor: pointer;
  
  &.selected {
    opacity: 1!important;
  }
`;
