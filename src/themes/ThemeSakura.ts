import { DefaultTheme } from "styled-components";

export const ThemeSakura: DefaultTheme = {
  id: "Sakura",
  colors: {
    TICKER_POSITIVE: "#06E694",
    TICKER_NEGATIVE: "#FF6D5F",
    TITLE: "#FF5995",
    SUBTITLE: "#303030",
    BODY: "#555555",
    NEUTRAL: "#303030",
    ACCENT: "#FF5995",
    BACKGROUND: "#FFFFFF",
    ECOSYSTEM_BACKGROUND: "#151E26",
    SECONDARY: "#262626",
    FOOTER: "#FFFFFF",
    HEADER: "#FFFFFF",
    HEADERBACK: "#FF5994",
    EMAIL_US: "#303030",
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
