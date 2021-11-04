import styled, { css } from "styled-components";
import { breakpoint } from "./mixins/breakpoint";
import { mobileOnly } from "./mixins/mobileOnly";
import { desktopOnly } from "./mixins/desktopOnly";

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.TITLE};
  font-weight: 700;
  color: ${(props) => props.theme.colors.TITLE};
  margin-bottom: 24px;

  ${breakpoint(css`
    margin-bottom: 16px;
    font-size: ${(props) => props.theme.fontSizesMobile.TITLE};
  `)};

  text-align: center;
`;

export const SpanAccent = styled.span`
  color: ${(props) => props.theme.colors.ACCENT};
`;

export const SpanNeutral = styled.span`
  color: ${(props) => props.theme.colors.NEUTRAL};
`;

export const SpanEmailUs = styled.span`
  color: ${(props) => props.theme.colors.EMAIL_US};
`;

export const Subtitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.SUBTITLE};
  font-weight: 700;
  color: ${(props) => props.theme.colors.SUBTITLE};
  margin-bottom: 1rem;

  ${breakpoint(css`
    font-size: ${(props) => props.theme.fontSizesMobile.SUBTITLE};
  `)};
`;

export const SectionSubtitle = styled(Subtitle)`
  ${breakpoint(css`
    font-size: ${(props) => props.theme.fontSizesMobile.BODY};
    font-weight: 800;
    line-height: 24px;
  `)};
`;

export const SmallerSubtitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.SMALLER_SUBTITLE};
  font-weight: 700;
  color: ${(props) => props.theme.colors.SUBTITLE};
  margin-bottom: 1rem;

  ${breakpoint(css`
    font-size: ${(props) => props.theme.fontSizesMobile.SMALLER_SUBTITLE};
  `)};
`;

export const BodyText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.BODY};
  font-weight: 500;
  color: ${(props) => props.theme.colors.BODY};
  margin-bottom: 1rem;
  line-height: 24px;
`;

export const Small = styled.small`
  font-size: ${(props) => props.theme.fontSizes.SMALL};
  font-weight: 500;
  color: ${(props) => props.theme.colors.BODY};
`;

export const LeftAlignTitle = styled(Title)`
  text-align: left;
`;

export const Spacer = styled.div<{ weight?: number }>`
  flex: ${(props) => props.weight || 1};
`;

export const SpacerHorizontal = styled.div<{ width?: string }>`
  width: ${(props) => props.width || "16px"};
`;
export const SpacerVertical = styled.div<{ height?: string }>`
  height: ${(props) => props.height || "24px"};
`;

export const SpacerSection = styled.div<{
  height?: string;
  mobileHeight?: string;
}>`
  height: ${(props) => props.height || "128px"};

  --mobile-height: ${(props) => props.mobileHeight || "64px"};
  ${breakpoint(css`
    height: var(--mobile-height);
  `)}
`;

export const SpacerSectionDesktopOnly = styled.div<{ height?: string }>`
  height: ${(props) => props.height || "128px"};

  ${breakpoint(css`
    display: none;
  `)}
`;

export const HorizontallyCentered = styled.div`
  display: flex;
  align-items: center;
`;

export const CenteredTitle = styled(Title)`
  margin-left: auto;
  margin-right: auto;
`;

export const CenteredSubtitle = styled(Subtitle)`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.ACCENT};
  color: ${(props) => props.theme.colors.BACKGROUND};
  font-size: ${(props) => props.theme.fontSizes.BODY};
  padding: ${(props) => props.theme.fontSizes.BODY};
  border-radius: 8px;
  font-weight: 700;
  outline: none;
  border-style: none;
  box-shadow: none;

  :hover {
    opacity: 0.9;
    cursor: pointer;
  }

  :active {
    opacity: 0.7;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.SECONDARY};
  color: ${(props) => props.theme.colors.TITLE};
`;

const fixedWidthMixin = css`
  min-width: 10em;
  ${breakpoint(css`
    width: 100%;
  `)};
  margin-bottom: 1em;
`;

export const ButtonFixedWidth = styled(Button)`
  ${fixedWidthMixin}
`;

export const SecondaryButtonFixedWidth = styled(SecondaryButton)`
  ${fixedWidthMixin}
`;

export const Row = styled.div`
  display: flex;
  ${breakpoint(css`
    flex-direction: column;
    margin: 0;
  `)};
  flex-wrap: wrap;
  margin: 0 -32px;
`;

export const Col = styled.div`
  flex: 1;
  margin: 0 32px 16px;

  ${breakpoint(css`
    margin: 16px 0;
  `)};
`;

const MAX_COLUMNS = 3;
const GRID_ITEM_MIN_WIDTH_PIXELS = 200;
export const Grid = styled.div`
  --auto-grid-min-size: ${GRID_ITEM_MIN_WIDTH_PIXELS}px;
  --repeat: auto-fill;

  display: grid;
  grid-template-columns: repeat(
    var(--repeat),
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 1em;

  @media (min-width: ${GRID_ITEM_MIN_WIDTH_PIXELS * MAX_COLUMNS * 1.5}px) {
    // multiplier to take into account margins
    --repeat: ${MAX_COLUMNS};
  } ;
`;
export const GridItem = styled.div`
  justify-self: stretch;
`;

//undos margin so we can have full width component
//kindof hacky escape hatch, but logically more consistent
export const EscapeMargins = styled.div`
  margin: 0 -${(props) => props.theme.margins.MAIN_GUTTER_HORIZONTAL};
  ${breakpoint(css`
    margin: 0 -${(props) => props.theme.margins.MAIN_GUTTER_MOBILE_HORIZONTAL};
  `)};
`;

export const FullSizeOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const WrapperDesktopOnly = styled.div`
  ${desktopOnly};
`;

export const WrapperMobileOnly = styled.div`
  ${mobileOnly};
`;

export const AvoidWrap = styled.span`
  display: inline-block;
`;
