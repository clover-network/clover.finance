import React from "react";
import styled, { css } from "styled-components";
import { SpanAccent } from "../CloverLibrary";
import { HorizontalGuttersSuperDeep } from "../mixins/HorizontalGutters";
import { breakpoint } from "../mixins/breakpoint";
import { Paragraph, Title } from "./NFTLibrary";

export const Section3 = () => {
  return (
    <Container>
      <ImgLineClo src={"images/nft/LineClo.png"} />

      <Title>
        <SpanAccent>Lucky</SpanAccent> Gachapon Ticket
      </Title>

      <ImgContainer>
        <HotItemImg src={"images/nft/EmptyGach.png"} />
        <ImgGachaOverlay src={"images/nft/CloVerBall.gif"} />
      </ImgContainer>

      <Paragraph>
        (Text holder) Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Felis ultrices gravida consectetur massa. Ut viverra diam facilisis in
        magna odio. Ipsum odio morbi dignissim felis augue rhoncus neque aenean.
        Enim eu nullam eu, eu id enim senectus. Id bibendum vitae at aliquam
        bibendum. Lorem.
      </Paragraph>
    </Container>
  );
};

const ImgLineClo = styled.img`
  width: 100%;
  object-fit: contain;
  //
  // ${breakpoint(css`
    //   height: unset;
    //   width: 100%;
    //
  `)}
`;

const ImgContainer = styled.div`
  position: relative;
`;

const HotItemImg = styled.img`
  width: 100%;
`;

const ImgGachaOverlay = styled.img`
  position: absolute;
  left: 5.2%;
  top: 48%;
  width: 28%;

  opacity: 100%;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${HorizontalGuttersSuperDeep};

  overflow: hidden;

  ${breakpoint(css`
    justify-content: center;
    margin-top: 0px;
  `)};

  ${ImgLineClo}, ${Title}, ${ImgContainer} {
    margin-bottom: 32px;
  } ;
`;
