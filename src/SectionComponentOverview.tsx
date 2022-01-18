import { SplashSection } from "./SplashSection";
import {
  SpanAccent,
  LeftAlignTitle,
  SectionSubtitle,
} from './CloverLibrary';
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { AnchorLinkIds } from "./AnchorLinkIds";

import "swiper/css";
import "swiper/css/pagination";
import { breakpoint } from "./mixins/breakpoint";
import { t } from './i18n/intl';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

export const SectionComponentOverview: React.FC<{
  cloverLines: any;
}> = ({ cloverLines }) => {
  const typeWriterTexts = cloverLines;

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
        <SwipeCustomizer>
          <Swiper
            initialSlide={selectIndex}
            pagination={true}
            autoHeight={true}
            onSlideChange={(e) => setSelectIndex(e.activeIndex)}
          >
            {CloverItems.map((item, i) => {
              return (
                <div>
                  <SwiperSlide key={i}>
                    <Slide {...item} />
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
          <TextContent>
            <h3>{CloverItems[selectIndex].title}</h3>
            <span>{CloverItems[selectIndex].body}</span>
          </TextContent>
        </SwipeCustomizer>
      </DivContainer>
    </SplashSection>
  );
};

const Slide: React.FC<{
  logo: string;
}> = ({ logo }) => {
  return (
    <DivSlideContainer>
      <img src={logo} alt='' />
    </DivSlideContainer>
  );
};

const DivSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    margin: 20px 0;
  }

  margin-bottom: 30px;
`;

const SwipeCustomizer = styled.div`
  display: none;
  ${breakpoint(css`
    display: unset;
    margin-bottom: 48px;
  `)};
`;

const Caret = styled.span`
  transform: scaleY(1.5);
  margin-left: 3px;
  display: inline-block;
  opacity: 1;
`;

const WriteText = styled(SpanAccent)`
  text-transform: uppercase;
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

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 72px 0;
  ${breakpoint(css`
    display: none;
  `)};
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
  ${breakpoint(css`
    margin-top: 20px;
    h3, span {
      font-size: 15px;
      line-height: 24px;
    }
  `)};
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
