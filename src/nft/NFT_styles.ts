import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";
import { breakpoint } from "../mixins/breakpoint";

// transferred from FIGMA for 1-1 correspondence

type CSS = FlattenInterpolation<ThemeProps<DefaultTheme>>;

type NFT_TEXTSTYLES = {
  TITLE: CSS;
  POWERED_BY_CLOVER: CSS;
  TEXT_PARAGRAPH: CSS;
  TEXT_SUBTITLE: CSS;
  TEXT_TITLE_24MONTH_IS_LENGTH: CSS;
  TEXT_PARAGRAPH_24MONTH_IS_LENGTH: CSS;
  TEXT_CAPTION_A_THOUGHTFUL_DESIGN: CSS;
  TEXT_TEN_MILLION_CLOVER: CSS;
  TEXT_ALPHABET_COLORS_NUMBERS: CSS;
  TEXT_ALPHABET_COLORS_LABEL: CSS;
};

const DESKTOP: NFT_TEXTSTYLES = {
  TITLE: css`
    font-size: 48px;
    font-style: italic;
    font-weight: 900;
    line-height: 56px;
    letter-spacing: 0;
    text-align: left;
  `,
  POWERED_BY_CLOVER: css`
    font-size: 16px;
    font-style: italic;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0;
    text-align: left;
  `,

  TEXT_PARAGRAPH: css`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: #666666;
  `,

  TEXT_SUBTITLE: css`
    font-size: 18px;
    font-style: italic;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0;
    text-align: left;
  `,

  TEXT_TITLE_24MONTH_IS_LENGTH: css`
    font-size: 24px;
    font-style: italic;
    font-weight: 900;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: left;
  `,
  TEXT_PARAGRAPH_24MONTH_IS_LENGTH: css`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
  `,
  TEXT_CAPTION_A_THOUGHTFUL_DESIGN: css`
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: center;
  `,

  TEXT_TEN_MILLION_CLOVER: css`
    font-size: 78px;
    font-style: italic;
    font-weight: 900;
    line-height: 56px;
    letter-spacing: 0px;
    text-align: center;
  `,
  TEXT_ALPHABET_COLORS_NUMBERS: css`
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    line-height: 97px;
  `,
  TEXT_ALPHABET_COLORS_LABEL: css`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
  `,
};
const MOBILE: NFT_TEXTSTYLES = {
  TITLE: css`
    font-size: 36px;
    font-style: italic;
    font-weight: 900;
    line-height: 43.75px;
    letter-spacing: 0;
    text-align: left;
  `,
  POWERED_BY_CLOVER: css`
    font-size: 16px;
    font-style: italic;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0;
    text-align: left;
  `,

  TEXT_PARAGRAPH: css`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: #666666;
  `,

  TEXT_SUBTITLE: css`
    font-size: 18px;
    font-style: italic;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0;
    text-align: left;
  `,

  TEXT_TITLE_24MONTH_IS_LENGTH: css`
    font-size: 24px;
    font-style: italic;
    font-weight: 900;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: left;
  `,
  TEXT_PARAGRAPH_24MONTH_IS_LENGTH: css`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
  `,
  TEXT_CAPTION_A_THOUGHTFUL_DESIGN: css`
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: center;
  `,

  TEXT_TEN_MILLION_CLOVER: css`
    font-size: 36px;
    font-style: italic;
    font-weight: 900;
    line-height: 56px;
    letter-spacing: 0px;
    text-align: center;
  `,
  TEXT_ALPHABET_COLORS_NUMBERS: css`
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 87.14px;
  `,
  TEXT_ALPHABET_COLORS_LABEL: css`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
  `,
};

function makeResponsive(desktop: CSS, mobile: CSS) {
  return css`
    ${desktop};
    ${breakpoint(css`
      ${mobile};
    `)}
  `;
}

export const NFT_TYPOGRAPHY: NFT_TEXTSTYLES = {
  POWERED_BY_CLOVER: makeResponsive(
    DESKTOP.POWERED_BY_CLOVER,
    MOBILE.POWERED_BY_CLOVER
  ),
  TEXT_CAPTION_A_THOUGHTFUL_DESIGN: makeResponsive(
    DESKTOP.TEXT_CAPTION_A_THOUGHTFUL_DESIGN,
    MOBILE.TEXT_CAPTION_A_THOUGHTFUL_DESIGN
  ),
  TEXT_PARAGRAPH: makeResponsive(DESKTOP.TEXT_PARAGRAPH, MOBILE.TEXT_PARAGRAPH),
  TEXT_PARAGRAPH_24MONTH_IS_LENGTH: makeResponsive(
    DESKTOP.TEXT_PARAGRAPH_24MONTH_IS_LENGTH,
    MOBILE.TEXT_PARAGRAPH_24MONTH_IS_LENGTH
  ),
  TEXT_SUBTITLE: makeResponsive(DESKTOP.TEXT_SUBTITLE, MOBILE.TEXT_SUBTITLE),
  TEXT_TEN_MILLION_CLOVER: makeResponsive(
    DESKTOP.TEXT_TEN_MILLION_CLOVER,
    MOBILE.TEXT_TEN_MILLION_CLOVER
  ),
  TEXT_TITLE_24MONTH_IS_LENGTH: makeResponsive(
    DESKTOP.TEXT_TITLE_24MONTH_IS_LENGTH,
    MOBILE.TEXT_TITLE_24MONTH_IS_LENGTH
  ),
  TITLE: makeResponsive(DESKTOP.TITLE, MOBILE.TITLE),
  TEXT_ALPHABET_COLORS_NUMBERS: makeResponsive(
    DESKTOP.TEXT_ALPHABET_COLORS_NUMBERS,
    MOBILE.TEXT_ALPHABET_COLORS_NUMBERS
  ),
  TEXT_ALPHABET_COLORS_LABEL: makeResponsive(
    DESKTOP.TEXT_ALPHABET_COLORS_LABEL,
    MOBILE.TEXT_ALPHABET_COLORS_LABEL
  ),
};
