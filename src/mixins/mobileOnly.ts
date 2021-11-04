import { css } from "styled-components";

export const mobileOnly = css`
  display: none;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: initial;
  }
`;
