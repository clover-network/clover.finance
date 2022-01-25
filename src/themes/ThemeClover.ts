import { DefaultTheme } from "styled-components";

export const ThemeClover: DefaultTheme = {
  id: "Clover",
  colors: {
    TICKER_POSITIVE: "#06E694",
    TICKER_NEGATIVE: "#FF6D5F",
    TITLE: "#FFFFFF",
    SUBTITLE: "#FFFFFF",
    BODY: "#C4C4C4",
    ACCENT: "#06E594",
    BACKGROUND: "#000000",
    NEUTRAL: "#FFFFFF",
    ECOSYSTEM_BACKGROUND: "#151E26",
    SECONDARY: "#262626",
    FOOTER: "#00000000",
    HEADER: "#000000",
    HEADERBACK: "#06E594",
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
    SUBTITLE: "18px",
    SMALLER_SUBTITLE: "18px",
    BODY: "14px",
    SMALL: "12px",
  },
  margins: {
    MAIN_GUTTER_HORIZONTAL: "128px",
    MAIN_GUTTER_MOBILE_HORIZONTAL: "24px",
    MINI_GUTTER_HORIZONTAL: "40px",
  },
  breakpoints: {
    mobile: "860px",
  },
  misc: {
    DEFAULT_BORDER_RADIUS: "20px",
  },
};
