import { DefaultTheme } from "styled-components";

export const ThemeNFT: DefaultTheme = {
  id: "NFT",
  colors: {
    TICKER_POSITIVE: "#06E694",
    TICKER_NEGATIVE: "#FF6D5F",
    TITLE: "#000000",
    SUBTITLE: "#303030",
    BODY: "#666666",
    NEUTRAL: "#303030",
    ACCENT: "#06E594",
    BACKGROUND: "#FFFFFF",
    ECOSYSTEM_BACKGROUND: "#151E26",
    SECONDARY: "#262626",
    FOOTER: "#FFFFFF",
    EMAIL_US: "#06E594",
  },
  fontSizes: {
    TITLE: "48px",
    SUBTITLE: "24px",
    SMALLER_SUBTITLE: "18px",
    BODY: "16px",
    SMALL: "12px",
  },
  fontSizesMobile: {
    TITLE: "36px",
    SUBTITLE: "24px",
    SMALLER_SUBTITLE: "18px",
    BODY: "16px",
    SMALL: "12px",
  },
  margins: {
    MAIN_GUTTER_HORIZONTAL: "128px",
    MAIN_GUTTER_MOBILE_HORIZONTAL: "24px",
    MINI_GUTTER_HORIZONTAL: "24px",
  },
  breakpoints: {
    mobile: "860px",
  },
  misc: {
    DEFAULT_BORDER_RADIUS: "20px",
  },
};
