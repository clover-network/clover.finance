import { css, FlattenInterpolation } from "styled-components";

export const breakpoint = (block: FlattenInterpolation<any>) => css`
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    ${block}
  }
`;
