import { css } from "styled-components";

export const desktopOnly = css`
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;
