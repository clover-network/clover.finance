import { css } from "styled-components";
import { breakpoint } from "./breakpoint";

export const HorizontalGutters = css`
  padding: 0 ${(props) => props.theme.margins.MAIN_GUTTER_HORIZONTAL};
  margin: 0 auto;
  max-width: 1440px;
  min-width: 1000px;
  ${breakpoint(css`
    padding: 0 ${(props) => props.theme.margins.MAIN_GUTTER_MOBILE_HORIZONTAL};
    max-width: unset;
    min-width: unset;
  `)}
`;

export const HorizontalMiniGutters = css`
  padding: 0 ${(props) => props.theme.margins.MINI_GUTTER_HORIZONTAL};
  ${breakpoint(css`
    padding: 0 ${(props) => props.theme.margins.MAIN_GUTTER_MOBILE_HORIZONTAL};
  `)}
`;

//for NFT page
export const HorizontalGuttersSuperDeep = css`
  padding: 0 calc((100% - 780px) / 2);
  //max-width: min(780px, 100%);
  //padding: 0 353px;
  ${breakpoint(css`
    padding: 0 ${(props) => props.theme.margins.MAIN_GUTTER_MOBILE_HORIZONTAL};
  `)}
`;
