import { css } from "styled-components";
import { breakpoint } from "./breakpoint";

export const HorizontalGutters = css`
  padding: 0 ${(props) => props.theme.margins.MAIN_GUTTER_HORIZONTAL};
  ${breakpoint(css`
    padding: 0 ${(props) => props.theme.margins.MAIN_GUTTER_MOBILE_HORIZONTAL};
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
