import React from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "./mixins/breakpoint";
import { HorizontalGutters } from "./mixins/HorizontalGutters";

export const SplashSection: React.FC<{
  backgroundImage?: string;
  backgroundColor?: string;

  topLeftBackground?: string;
  bottomRightBackground?: string;
  bottomBackground?: string;
  rightHalfBackground?: string;
}> = ({
  children,
  backgroundColor,
  backgroundImage,

  topLeftBackground,
  bottomRightBackground,
  bottomBackground,
  rightHalfBackground,
}) => {
  return (
    <DivBackground>
      <DivContentWrapper>{children}</DivContentWrapper>
      {topLeftBackground && <TopLeft backgroundImage={topLeftBackground} />}
      {bottomRightBackground && (
        <BottomRight backgroundImage={bottomRightBackground} />
      )}
      {bottomBackground && <Bottom backgroundImage={bottomBackground} />}
      {(backgroundImage || backgroundColor) && (
        <Background
          backgroundImage={backgroundImage}
          backgroundColor={backgroundColor}
        />
      )}
      {rightHalfBackground && (
        <RightHalf backgroundImage={rightHalfBackground} />
      )}
      <AbsolutePositioned />
    </DivBackground>
  );
};

const AbsolutePositioned = styled.div`
  position: absolute;
`;
const Corner = styled(AbsolutePositioned)<{
  backgroundImage?: string;
}>`
  width: 40%;
  height: 40%;
  //background-color: red;
  background-image: ${(props) => `url("${props.backgroundImage}")` || "none"};
  z-index: -5;
  background-size: contain;
  background-repeat: no-repeat;
`;

const TopLeft = styled(Corner)`
  top: 0;
`;

const BottomRight = styled(Corner)`
  bottom: 0;
  right: 0;
  background-position: right bottom;
`;

// full height, on right side when in desktop
// entire background when in mobile

const RightHalf = styled(Corner)`
  top: 0;
  right: 100px;
  background-position: right center;
  background-size: auto 100%;
  width: 100%;
  height: 100%;

  ${breakpoint(css`
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background-position: center;
    background-size: 100%;
  `)};
`;

const Bottom = styled(Corner)`
  background-position: center bottom;
  width: 100%;
  height: 100%;
  bottom: 0;
  background-size: 100% 100%; //grow to full width
  //background-size: contain;

  ${breakpoint(css`
    flex-direction: column;
    background-size: auto 100%; //grow to full height in mobile
  `)};
`;

const Background = styled(AbsolutePositioned)<{
  backgroundImage?: string;
  backgroundColor?: string;
}>`
  z-index: -10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: ${(props) => `url("${props.backgroundImage}")` || "none"};
  background-color: ${(props) => props.backgroundColor || "none"};
  background-repeat: no-repeat;
  background-position: center;
`;

const DivBackground = styled.div`
  position: relative;
`;

const DivContentWrapper = styled.div`
  ${HorizontalGutters};
  z-index: 10;
`;
