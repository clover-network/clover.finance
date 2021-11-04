import { css } from "styled-components";

export const desktopOnly = css`
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;
