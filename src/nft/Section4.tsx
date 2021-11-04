import React from "react";
import styled, { css } from "styled-components";
import { SpacerSection, SpanAccent } from "../CloverLibrary";
import { HorizontalGuttersSuperDeep } from "../mixins/HorizontalGutters";
import { breakpoint } from "../mixins/breakpoint";
import { Paragraph, Subtitle, Title } from "./NFTLibrary";
import { NFT_TYPOGRAPHY } from "./NFT_styles";
import { mobileOnly } from "../mixins/mobileOnly";
import { desktopOnly } from "../mixins/desktopOnly";

export const Section4 = () => {
  return (
    <Container>
      {/*<ImgLineClo src={"images/nft/LineClo.png"} />*/}

      <TitleNftDesignOf>
        NFT Design Of <SpanAccent>Lucky</SpanAccent>
      </TitleNftDesignOf>

      <SpacerSection height={"94px"} mobileHeight={"60px"} />

      <SubtitleTotalOf>Total Of</SubtitleTotalOf>
      <SpacerSection height={"48px"} mobileHeight={"0px"} />

      <Subtitle10Million>10,000,000 CLV</Subtitle10Million>

      <SpacerSection height={"13px"} mobileHeight={"0px"} />

      <HorizontalFlex>
        <NumberLetterCentered>
          <Number>26</Number>
          <Label>Alphabet</Label>
        </NumberLetterCentered>

        <SmallX>x</SmallX>

        <NumberLetterCentered>
          <Number>6</Number>
          <Label>Letters</Label>
        </NumberLetterCentered>
      </HorizontalFlex>

      <SpacerSection height={"48px"} mobileHeight={"32px"} />

      <ImgFullWidthMobileOnly src={"images/nft/Alphabet-mobile.png"} />
      <ImgFullWidthDesktopOnly src={"images/nft/Alphabet-desktop.png"} />

      <SpacerSection height={"48px"} mobileHeight={"32px"} />

      <ImgFullWidthDesktopOnly src={"images/nft/BallBall.png"} />
      <ImgFullWidthMobileOnly src={"images/nft/BallBallTwoRows.png"} />

      <SpacerSection height={"64px"} mobileHeight={"32px"} />

      <Subtitle>Rules</Subtitle>

      <RulesParagraphDesktop>
        <SpanAccent>
          Three characters of the same color can generate an upper level color
          of the character.
        </SpanAccent>
        <br />
        If your ticket consist CLOVER in the following color
      </RulesParagraphDesktop>
      <RulesParagraphMobile>
        <SpanAccent>
          Three characters of the same color can generate an upper level color
          of the character.
        </SpanAccent>
        &nbsp; If your ticket consist CLOVER in the following color
      </RulesParagraphMobile>

      <SpacerSection height={"64px"} mobileHeight={"32px"} />

      <Subtitle>Price</Subtitle>

      <ImgFullWidth src={"images/nft/CloverList.png"} />
    </Container>
  );
};

const RulesParagraphDesktop = styled(Paragraph)`
  ${desktopOnly};
  font-weight: 700;
  color: ${(props) => props.theme.colors.NEUTRAL};
`;

const RulesParagraphMobile = styled(RulesParagraphDesktop)`
  ${mobileOnly};
`;

const HorizontalFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SmallX = styled.div`
  line-height: 97px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #555555;

  margin: 0 60px;

  ${breakpoint(css`
    margin: 0 27px;

    line-height: 87.14px;
  `)};
`;

const ImgFullWidth = styled.img`
  width: 100%;
`;

const ImgFullWidthMobileOnly = styled(ImgFullWidth)`
  ${mobileOnly};
`;

const ImgFullWidthDesktopOnly = styled(ImgFullWidth)`
  ${desktopOnly};
`;

const TitleNftDesignOf = styled(Title)`
  text-align: center;
  margin-bottom: 0;
`;

const SubtitleTotalOf = styled(Title)`
  ${breakpoint(css`
    font-size: 26px;
    line-height: 32px;
  `)}
  text-align: center;
  margin-bottom: 0;
`;

const NumberLetterCentered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  min-width: 140px;
  ${breakpoint(css`
    min-width: 90px;
  `)}
`;

const Subtitle10Million = styled.div`
  ${NFT_TYPOGRAPHY.TEXT_TEN_MILLION_CLOVER};
  color: ${(props) => props.theme.colors.ACCENT};
`;

const Number = styled.div`
  ${NFT_TYPOGRAPHY.TEXT_ALPHABET_COLORS_NUMBERS};
  color: #555555;
`;

const Label = styled.div`
  ${NFT_TYPOGRAPHY.TEXT_ALPHABET_COLORS_LABEL};
  color: #555555;
  text-transform: uppercase;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${HorizontalGuttersSuperDeep};

  overflow: hidden;

  ${breakpoint(css`
    justify-content: center;
    margin-top: 0;
  `)};

  // manually configure margins to match figma exactly

  // ${TitleNftDesignOf} {
  //   margin-bottom: 94px;
  // }
  // ${SubtitleTotalOf} {
  //   margin-bottom: 48px;
  // }
  // ${Subtitle10Million}{
  //   margin-bottom: 82px;
  // }
  // ${HorizontalFlex}{
  //   margin-bottom: 48px;
  // }
  //
  // ${ImgFullWidthDesktopOnly}{
  //   margin-bottom: 48px;
  // }
`;
