import styled, { css } from "styled-components";
import { breakpoint } from "../mixins/breakpoint";
import { NFT_TYPOGRAPHY } from "./NFT_styles";

export const Title = styled.h1`
  ${NFT_TYPOGRAPHY.TITLE};
  text-transform: uppercase;
  margin-bottom: 16px;

  color: ${(props) => props.theme.colors.TITLE};

  ${breakpoint(css`
    text-align: center;
  `)};
`;

export const Subtitle = styled.h2`
  ${NFT_TYPOGRAPHY.TEXT_SUBTITLE};
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Paragraph = styled.p`
  ${NFT_TYPOGRAPHY.TEXT_PARAGRAPH};
  color: ${(props) => props.theme.colors.BODY};
`;
